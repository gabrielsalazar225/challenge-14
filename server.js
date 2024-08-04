// Server things
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const session = require('express-session');
const hbs = require('express-handlebars');
const path = require('path');
//Sequelize var
const sequelize = require('./config/connection');

//Calling the models
const model = require('./models');

//Calling the routes
const routes = require('./controllers');

//MiddleWare
app.use(session({
    secret: 'your_secret_key_here',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true } 
  }));
//Setting up handlebars
app.engine('handlebars', hbs.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'public', 'views'));
//Server static files
app.use(express.static(path.join(__dirname, 'public')));
//Data things
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use(routes);

//Declaring the root route as a /login
app.get('/', (req, res)=>{
    res.redirect('/login');
})

sequelize.sync({force: false}).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server Running on port ${PORT}`);
    })
});