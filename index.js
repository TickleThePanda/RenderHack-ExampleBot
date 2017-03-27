"use strict";
require('dotenv').config()
const fs = require('fs');
const SlackBot = require('slackbots');
const PingPong = require('./lib/pingpong');
const Countdown = require('./lib/countdown');

const bot = new SlackBot({
  token: process.env.SLACK_TOKEN,
  name: process.env.SLACK_BOT_NAME
});

bot.on('start', function() {
  // Load all functionality from `./lib`
  fs.readdirSync('./lib').forEach(function(file) {
    require("./lib/" + file)(bot);
  });
});
