const express = require('express')
const app = express();
const PORT = process.env.Port || 3001;
const session = require('express-session');

const sequelize = require('./config/connection');

// const model = require('./models');

const routes = require('./controlles');

app.use(session({
    secret: 'your_secret_key_here',
    resave: false,
    saveUninitalized: true,
    cookie: { secure: true }
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({force: true}).then(()=>
app.listen(PORT, ()=> {
    console.log(`Server Running on port ${PORT}`)
}));