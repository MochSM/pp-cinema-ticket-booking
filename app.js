const express = require("express");
const router = require('./routers');
const sessions = require('express-session');
const HomeController = require('./controllers/homeController')

const app = express();
const port = process.env.PORT || 8080;

// view engine
app.set('view engine', 'ejs')

//session middleware
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    resave: false
}));

// parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', HomeController.readMovie );
app.use('/', router)

app.listen(port, () => console.log(`App running on port ${port}.`));