'use strict';

const express = require('express'),
      pug = require('pug'),
      bodyParser = require('body-parser'),
      session = require('express-session'),
      morgan= require('morgan'),
      errors = require('./middlewares/errors'),
      auth = require('./routes/auth-router'),
      restFul = require('express-method-override')('_method'),
      routes = require('./routes/team-router'),
      favicon = require('serve-favicon')(`${__dirname}/public/favicon.png`),
      publicDir = express.static(`${__dirname}/public`),
      viewDir = `${__dirname}/views`,
      optSession = {
        secret: 'shhh',
        saveUninitialized: true,
        resave: true
      },
      port = (process.env.PORT || 3000);

let app = express();

app
  .set( 'views', viewDir )
  .set( 'view engine', 'pug' )
  .set( 'port', port )
  .use( session(optSession))
  .use( bodyParser.json() )
  .use( bodyParser.urlencoded({ extended : false }) )
  .use( publicDir )
  .use( favicon )
  .use( morgan('dev') )
  .use( restFul )
  .use( auth )
  .use( routes )
  .use( errors.http404 );

module.exports = app;