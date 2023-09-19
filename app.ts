import { ActiveSession } from "./model/auth";

const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');
const session =require('express-session')

const app = express();

//configure nunjucks
const appViews = path.join(__dirname, '/views');

const nunjucksConfig = {
    autoescape: true,
    coCache: true,
    express: app
};

nunjucks.configure(appViews, nunjucksConfig);

//configure Express
app.set('view engine', 'html');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(express.json())


app.use(express.urlencoded({ extended: true }));


declare module "express-session"{
    interface SessionData{
        token: ActiveSession
    }
}

app.listen(3000, ()=> {
    console.log('Server listening on port 3000');
});

app.get('/', (req, res) => {
  res.send('hello world')
})

require('./controller/authController')(app);