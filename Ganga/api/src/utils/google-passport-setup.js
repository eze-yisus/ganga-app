require("dotenv").config();
const { CLIENT_ID, CLIENT_SECRET } = process.env;
const { User } = require("../db.js");
const passport = require("passport"); //AQUI SE HACE EL SETUP de passport authentication
var GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      callbackURL: `/loginGoogle/callback`,
    },
    async function (accessToken, refreshToken, profile, cb) {
      const defaultUser = {
        name: profile.name.givenName,
        surname: profile.name.familyName,
        mail: profile.emails[0].value,
        // id: profile.id,
      };

      const user = await User.findOrCreate({
        where: { mail: profile.emails[0].value }, // CAMBIAR EMAIL POR MAIL!!!
        defaults: defaultUser,
      }).catch((err) => {
        console.log("Error signing up", err);
        cb(err, null);
      });

      if (user && user[0]) return cb(null, user && user[0]);
    }
  )
);

// passport.serializeUser((user, cb) => {
//   console.log("Serializing user:", user);
//   cb(null, user.email);
// });

// passport.deserializeUser(async (email, cb) => {
//   const user = await User.findOne({ where: { email } }).catch((err) => {
//     console.log("Error deserializing", err);
//     cb(err, null);
//   });

//   console.log("DeSerialized user", user);

//   if (user) cb(null, user);
// });

passport.serializeUser((user, cb) => {
  //console.log("Serializing user:", user);
  cb(null, user.id);
});

passport.deserializeUser(async (id, cb) => {
  const user = await User.findOne({ where: { id } }).catch((err) => {
    console.log("Error deserializing", err);
    cb(err, null);
  });

  //console.log("DeSerialized user", user);

  if (user) cb(null, user);
});
