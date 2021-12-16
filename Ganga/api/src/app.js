const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
// MongoDB
const MongoStore = require('connect-mongo');
const mongoose = require("mongoose");
// passport
const passport = require('passport');                   //se importa passport para autenticacion con google
const session = require("express-session");             //se importa session para el manejo de sesiones con passport
require('./utils/google-passport-setup');              //se importa para toda la app, la estructura de passport con google
require('./utils/local-passport-setup')

require('./db.js');

const server = express();

const cors = require('cors');

server.set("trust proxy", 1);

server.name = 'API';

// server.use(cors());
server.use(
  cors({
    origin: "https://ganga-app.vercel.app",             //se habilitan las credenciales de cors para los pedidos que vengan del front
    credentials: true,
  })
)

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
// server.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'https://ganga-app.vercel.app'); // update to match the domain you will make the request from
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//   next();
// });

mongoose.connect(
  "mongodb+srv://eze:eze@cluster0.5cxnx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Mongoose Is Connected");
  }
);
// mongoose.set("useCreateIndex", false);

// - - - - Deploy - - - -

// server.use(                                             //se habilita el manejo de sesiones para el server
//   session({
//     secret: "secretcode",
//     resave: true,
//     saveUninitialized: true,
//     cookie: {
//       httpOnly: true,
//       secure: true,
//       sameSite: "none",
//     },
//     store: MongoStore.create({
//       mongoUrl: "mongodb+srv://eze:eze@cluster0.5cxnx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
//       ttl: 14 * 24 * 60 * 60 // = 14 days. Default
//     })
//   })
// );

server.use(
  session({
    secret: "secretcode",
    resave: false,
    path: "/",
    proxy: true,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: "mongodb+srv://eze:eze@cluster0.5cxnx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      ttl: 14 * 24 * 60 * 60 // = 14 days. Default
    }),
    cookie: {
      
      sameSite: 'none',
      secure: true,
      maxAge: 60 * 60 * 1000 * 24 * 365,
    },
  })
);


server.use(passport.initialize());                    //se inicializa passport y passport session para el manejo de la session con passport
server.use(passport.session());

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
