const google = require('googleapis').google;
const qs = require('qs');

let rooturl = 'https://greenwich.myclubsource.com';

if (process.env.NODE_ENV==='development')
	rooturl = 'http://localhost:3000';

const googleConfig = {
	clientId: '118647316730-ra99g2renbeu5dk3qv40iaq1udquh6t5.apps.googleusercontent.com',
	clientSecret: 'uEC5ineqYFDHIN5K07W-97HG',
	redirect: rooturl + '/auth/google/callback'
};

/**
 * Create the google auth object which gives us access to talk to google's apis.
 */
function createConnection() {
	return new google.auth.OAuth2(
		googleConfig.clientId,
		googleConfig.clientSecret,
		googleConfig.redirect
	);
}


/**
 * This scope tells google what information we want to request.
 */
const defaultScope = [
	'https://www.googleapis.com/auth/plus.me',
	'https://www.googleapis.com/auth/userinfo.email',
];

/**
 * Get a url which will open the google sign-in page and request access to the scope provided (such as calendar events).
 */
function getConnectionUrl(auth) {
	return auth.generateAuthUrl({
		access_type: 'offline',
		prompt: 'consent', // access type and approval prompt will force a new refresh token to be made each time signs in
		scope: defaultScope
	});
}

/**
 * Create the google url to be sent to the client.
 */
function urlGoogle() {
	const auth = createConnection();
	const url = getConnectionUrl(auth);
	return url;
}


app.get('/', function(req, res){
	const redirect = urlGoogle();
	res.redirect(redirect);
});

app.get('/callback', function(req, res){
	const query = qs.parse(req.query);
	const user = getGoogleAccountFromCode(query.code);
	res.cookie('token', user.tokens);
});

/**
 * Helper function to get the library with access to the google plus api.
 */
function getGooglePlusApi(auth) {
	return google.plus({ version: 'v1', auth });
}

/**
 * Extract the email and id of the google account from the "code" parameter.
 */
function getGoogleAccountFromCode(code) {
  
	// get the auth "tokens" from the request
	const data = await auth.getToken(code);
	const tokens = data.tokens;

	// add the tokens to the google api so we have access to the account
	const auth = createConnection();
	auth.setCredentials(tokens);

	// connect to google plus - need this to get the user's email
	const plus = getGooglePlusApi(auth);
	const me = await plus.people.get({ userId: 'me' });

	// get the google id and email
	const userGoogleId = me.data.id;
	const userGoogleEmail = me.data.emails && me.data.emails.length && me.data.emails[0].value;

	// return so we can login or sign up the user
	return {
		id: userGoogleId,
		email: userGoogleEmail,
		tokens: tokens, // you can save these to the user if you ever want to get their details without making them log in again
	};
}