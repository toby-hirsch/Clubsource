const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const okta = require("@okta/okta-sdk-nodejs");
const ExpressOIDC = require("@okta/oidc-middleware").ExpressOIDC;
const mongoose = require('mongoose');
const { Club } = require('./schemas/club');
const passport = require('passport');
const gauth = require('./googleauth');
const sslredirect = require('heroku-ssl-redirect');
const secret = require('./secret.js')

const popularitydecay = 0.999;

let baseurl = 'https://greenwich.myclubsource.com';

if (process.env.NODE_ENV === 'development')
	baseurl = 'http://localhost:3000';

console.log('base url: ' + baseurl);

mongoose.connect('mongodb+srv://admin:Toby0188@clubs-rxh79.mongodb.net/clubsource?retryWrites=true&w=majority', 
	{useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true}, function(err){
	if (err) throw err; //Change this before publishing
	console.log('Connected to MongoDB');
	setInterval(() => {
		//TODO: recalculate popularitydecay here based on average popularity to keep it in the right range
		Club.updateMany({}, { $mul: { popularity: popularitydecay } }, (err, clubs) => {
			if (err)
				console.error(err)
			else
				console.log('updated popularity of clubs');
		});
	}, 3600000);
});

gauth(passport);

var oktaClient = new okta.Client({
  orgUrl: 'https://dev-595998.okta.com',
  token: '00weFwwSEVnZ2zF6ykgKA5lpRNkUcEipIvvQ13P0MZ'
});
const oidc = new ExpressOIDC({
  issuer: "https://dev-595998.okta.com/oauth2/default",
  client_id: '0oaqbdltip5hVE727356',
  client_secret: secret.okta,
  redirect_uri: baseurl + '/myclub/callback',
  scope: "openid profile",
  routes: {
    login: {
      path: "/login"
    },
    callback: {
      path: "/callback",
      defaultRedirect: "/myclub/dashboard"
    }
  }
});

var app = express();

app.use(sslredirect());

app.use(passport.initialize());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json({
	limit: '10mb'
}));
app.use(express.urlencoded({ 
	extended: false,
	limit: '10mb'
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
	secret: '98d38h38r8148n3y3RNY3n98yr13989ur[014114c8yn2huf927gfbvybyrhuiheg34iuwngug3y3RNY3n98yr83RNQO8RYq3yt23YT2n83rN3RO2tnuay4ltiueyta3984npq29yc83rym[238rmy283ryn',
	resave: false,
	saveUninitialized: false,
	store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
app.use('/myclub', oidc.router);
app.use((req, res, next) => {
	//console.log('session id: ' + req.sessionID);
	/*console.log('*****************user in session**************************');
	console.log(req.session.user);
	console.log('**********************************club in session*****************************');
	console.log(req.session.club);*/
	res.locals.accType = {};
	if (req.session.user){ //Google OAuth
		req.user = req.session.user;
		res.locals.user = req.user;
		//console.log('user: ' + req.user);
		res.locals.accType.user = true;
	}
	if (req.session.clubowner){
		req.clubowner = req.session.clubowner;
		res.locals.clubowner = req.clubowner;
		res.locals.accType.club = true;
		next();
	}
	else if (req.userinfo && req.userinfo.sub) {//Okta
		//console.log('req.userinfo.sub');
		//console.log(req.userinfo.sub);
		oktaClient.getUser(req.userinfo.sub)
			.then(user => {
				req.clubowner = user.profile.login;
				res.locals.clubowner = req.clubowner
				req.session.clubowner = user.profile.login;
				res.locals.accType.club = true;
				next();
			}).catch(err => {
				next(err);
			});
	}
	else
		next();
});

function clubLoginRequired(req, res, next) {
	//console.log('checking login');
	if (!req.clubowner)
		return res.redirect(baseurl + '/myclub/login');

	next();
}

if (process.env.NODE_ENV === 'development') {
	var cors = require('cors');
	app.use(cors());
}

/*app.use(function (req, res, next) { //Try removing this--might not be necessary

    // Website you wish to allow to connect
	console.log('configuring cors');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
	
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});*/




app.get('/auth/google', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email']
}));
app.get('/auth/google/callback',
    passport.authenticate('google', {failureRedirect:'/'}),
    (req, res) => {
		console.log('redirecting to profile from callback');
        req.session.token = req.user.token;
		req.session.user = req.user.profile.emails[0].value;
        res.redirect('/profile');
    }
);

const adhandler = require('./routes/ads.js');

app.use('/myclub/ads', adhandler);



app.get('/dashboard(/*)?', (req, res) => {
	res.redirect('/myclub' + req.originalUrl);
});

app.get('/myclub/', (req, res) => {
	res.redirect('dashboard');
});

app.get('/myclub', (req, res) => {
	res.redirect('myclub/dashboard');
});

const indexRouter = require('./routes/index');
const searchRouter = require('./routes/searchData');
const dashboardRouter = require('./routes/dashboard');
const accountRouter = require('./routes/accounts');
const profileRouter = require('./routes/profile');

app.use('/profileData', profileRouter);
app.use('/', indexRouter);
app.use('/searchData', searchRouter);
app.use('/myclub/dashboard', clubLoginRequired, dashboardRouter);
app.use('/accounts', accountRouter);

app.use('/modules', express.static(__dirname + '/node_modules/'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	if (res.headersSent)
		return next(err);
	// render the error page
	res.status(err.status || 500);
	res.render('error', { code: err.status, message: process.env.NODE_ENV==='development' ? err.message : {} });
});

module.exports = app;