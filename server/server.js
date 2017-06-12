'use strict';

require('dotenv').config();
const express = require('express');
const Logger = require('logdna');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const options = {
  hostname: 'UNICODEVELOPER',
  ip: '160.152.39.235',
  mac: '98:01:a7:98:85:65',
  app: 'testLogger',
};

const log = Logger.setupDefaultLogger(process.env.key, options);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/test', (req, res) => {
  res.json({ message: "Test that the URL is working" });
});


app.post('/api/log', (req, res) => {
  log.info(`Application Name: ${req.body.app_name}`);
  log.info(`Application Description: ${req.body.app_description}`);
  console.log("Log something now");
  res.json({ message: "Logged something successfully" });
});

app.listen(7777);
console.log('Listening on localhost:7777');