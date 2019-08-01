const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

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
            callbackURL: 'http://localhost:3000/auth/google/callback'
        },
        (token, refreshToken, email, done) => {
            return done(null, {
				profile: email,
                token: token
            });
        }));
};