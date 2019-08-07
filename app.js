//Dev URL: https://dev-595998.okta.com
//Client ID: 0oaqbdltip5hVE727356
//Client secret: Q4xccPTsw65bTNpO3FMq_WrWqLsGdyqzCR1a1BXr
//Token value: 00weFwwSEVnZ2zF6ykgKA5lpRNkUcEipIvvQ13P0MZ



const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const session = require('cookie-session');
const okta = require("@okta/okta-sdk-nodejs");
const ExpressOIDC = require("@okta/oidc-middleware").ExpressOIDC;
const mongoose = require('mongoose');
const passport = require('passport');
const gauth = require('./googleauth');
const sslredirect = require('heroku-ssl-redirect');

let baseurl = 'https://greenwich.myclubsource.com';

if (process.env.NODE_ENV === 'development')
	baseurl = 'http://localhost:3000';

console.log('base url: ' + baseurl);

gauth(passport);

var oktaClient = new okta.Client({
  orgUrl: 'https://dev-595998.okta.com',
  token: '00weFwwSEVnZ2zF6ykgKA5lpRNkUcEipIvvQ13P0MZ'
});
const oidc = new ExpressOIDC({
  issuer: "https://dev-595998.okta.com/oauth2/default",
  client_id: '0oaqbdltip5hVE727356',
  client_secret: 'Q4xccPTsw65bTNpO3FMq_WrWqLsGdyqzCR1a1BXr',
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
app.use(express.json());
app.use(express.urlencoded({ 
	extended: false,
	limit: '10mb'
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
	secret: '98d38h38r8148n3y3RNY3n98yr13989ur[014114c8yn2huf927gfbvybyrhuiheg34iuwngug3y3RNY3n98yr83RNQO8RYq3yt23YT2n83rN3RO2tnuay4ltiueyta3984npq29yc83rym[238rmy283ryn',
	resave: true,
	saveUninitialized: false
}));
app.use('/myclub', oidc.router);
app.use((req, res, next) => {
	/*if (!req.userinfo) {
		return next();
	}*/

	if (req.userinfo)
		oktaClient.getUser(req.userinfo.sub)
			.then(user => {
				req.user = user;
				res.locals.user = user;
				next();
			}).catch(err => {
				next(err);
			});
	else if (req.session.passport){
		req.user = req.session.passport.user;
		next();
	}
	else
		next();
});

function clubLoginRequired(req, res, next) {
	console.log('checking login');
	if (!req.user || req.user.credentials.provider.name != 'OKTA')
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

mongoose.connect('mongodb+srv://admin:Toby0188@clubs-rxh79.mongodb.net/clubsource?retryWrites=true&w=majority', 
	{useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true}, function(err){
	if (err) throw err; //Change this before publishing
	console.log('Connected to MongoDB');
});


app.get('/auth/google', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email']
}));
app.get('/auth/google/callback',
    passport.authenticate('google', {failureRedirect:'/'}),
    (req, res) => {
        req.session.token = req.user.token;
        res.redirect('/profile');
    }
);

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

app.use('/', indexRouter);
app.use('/searchData', searchRouter);
app.use('/myclub/dashboard', clubLoginRequired, dashboardRouter);
app.use('/accounts', accountRouter);
app.use('/profile', profileRouter);

app.use('/modules', express.static(__dirname + '/node_modules/'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  if (err)
	  throw err;
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;