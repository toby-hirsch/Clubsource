//Dev URL: https://dev-595998.okta.com
//Client ID: 0oaqbdltip5hVE727356
//Client secret: Q4xccPTsw65bTNpO3FMq_WrWqLsGdyqzCR1a1BXr
//Token value: 00weFwwSEVnZ2zF6ykgKA5lpRNkUcEipIvvQ13P0MZ


const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const session = require('express-session');
const okta = require("@okta/okta-sdk-nodejs");
const ExpressOIDC = require("@okta/oidc-middleware").ExpressOIDC;
const mongoose = require('mongoose');

var oktaClient = new okta.Client({
  orgUrl: 'https://dev-595998.okta.com',
  token: '00weFwwSEVnZ2zF6ykgKA5lpRNkUcEipIvvQ13P0MZ'
});
const oidc = new ExpressOIDC({
  issuer: "https://dev-595998.okta.com/oauth2/default",
  client_id: '0oaqbdltip5hVE727356',
  client_secret: 'Q4xccPTsw65bTNpO3FMq_WrWqLsGdyqzCR1a1BXr',
  redirect_uri: 'http://localhost:3000/accounts/callback',
  scope: "openid profile",
  routes: {
    login: {
      path: "/accounts/login"
    },
    callback: {
      path: "/accounts/callback",
      defaultRedirect: "/dashboard"
    }
  }
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
	secret: '98d38h38r8148n3y3RNY3n98yr13989ur[014114c8yn2huf927gfbvybyrhuiheg34iuwngug3y3RNY3n98yr83RNQO8RYq3yt23YT2n83rN3RO2tnuay4ltiueyta3984npq29yc83rym[238rmy283ryn',
	resave: true,
	saveUninitialized: false
}));
app.use(oidc.router);
app.use((req, res, next) => {
	if (!req.userinfo) {
		return next();
	}

	oktaClient.getUser(req.userinfo.sub)
		.then(user => {
			req.user = user;
			res.locals.user = user;
			next();
		}).catch(err => {
			next(err);
		});
});

function loginRequired(req, res, next) {
	if (!req.user)
		return res.status(401).render("unauthenticated");

	next();
}

if (process.env.NODE_ENV === 'development') {
	var cors = require('cors');
	app.use(cors());
}

app.use(function (req, res, next) { //Try removing this--might not be necessary

    // Website you wish to allow to connect
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
});

mongoose.connect('mongodb+srv://admin:Toby0188@clubs-rxh79.mongodb.net/clubsource?retryWrites=true&w=majority', {useNewUrlParser: true}, function(err){
	if (err) throw err;
	console.log('Connected to MongoDB');
});

const indexRouter = require('./routes/index');
const searchRouter = require('./routes/users');
const dashboardRouter = require('./routes/dashboard');
const accountRouter = require('./routes/accounts');

app.use('/', indexRouter);
app.use('/users', searchRouter);
app.use('/dashboard', loginRequired, dashboardRouter);
app.use('/accounts', accountRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;