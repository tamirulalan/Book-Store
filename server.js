/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const product = require("./models/product.js");
const path = require('path');
const app = express();
const Router = require('./routes/router')
var session = require('express-session');
const UserRoutes = require("./routes/user");
const bcrypt = require('bcrypt')
const morgan = require('morgan')
const MongoStore = require('connect-mongo')
var cookieParser = require('cookie-parser');
var passport = require('passport');

// var cart =require('./routes/cart')
const flash = require('express-flash')




////////////////////////////////////////////////////
// Defining Middleware
/////////////////////////////////////////////////////
app.use(express.static('public'))
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({secret: 'mysupersecret', resave: false, saveUninitialized: false}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('dev'))

app.use(session({
  secret: process.env.SECRET,
  store: MongoStore.create({mongoUrl: process.env.MONGO_URI}),
  resave: false,
  saveUninitialized: true
}))
app.use(function(req, res, next) {
  req.session.cookie.maxAge = 180 * 60 * 1000; // 3 hours
   next();
});
/////////////////////////////////////////////////
// Create Templating Engine
/////////////////////////////////////////////////
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

/////////////////////////////////////////////
// Setting mongooDb and mongoose connection
/////////////////////////////////////////////
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo"); 
});

/////////////////////////////////////////////
// Routes
/////////////////////////////////////////////
app.use(Router)
app.use(UserRoutes);

//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
app.listen(3000, ()=>{
    console.log('Start listning to port 3000')
})