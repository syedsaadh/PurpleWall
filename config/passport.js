var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

var Editor = require('../models/editor');
var config = require('../config/db');

module.exports = function (passport) {
    var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    opts.secretOrKey = config.secret;

    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        Editor.findOne({id: jwt_payload.id}, function (err, editor) {
            if (err) {
                return done(err, false);
            }
            if (editor) {
                done(null, editor);
            } else {
                done(null, false);
            }
        });
    }));
};
