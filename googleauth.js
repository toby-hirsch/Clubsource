const GoogleStrategy = require('passport-google-oauth2').Strategy;
let baseurl = 'https://greenwich.myclubsource.com';

if (process.env.NODE_ENV=='development')
	baseurl = 'http://localhost:3000';

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
    passport.use(new GoogleStrategy({
            clientID: '118647316730-ra99g2renbeu5dk3qv40iaq1udquh6t5.apps.googleusercontent.com',
            clientSecret: 'uEC5ineqYFDHIN5K07W-97HG',
            callbackURL: baseurl + '/auth/google/callback'
        },
        (token, refreshToken, email, done) => {
            return done(null, {
				profile: email,
                token: token
            });
        }));
};