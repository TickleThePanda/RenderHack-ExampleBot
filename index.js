"use strict";
require('dotenv').config()
const fs = require('fs');
const SlackBot = require('slackbots');

const bot = new SlackBot({
  token: process.env.SLACK_TOKEN,
  name: process.env.SLACK_BOT_NAME
});

bot.on('start', function() {
  // We delay loading functions to prevent events from the past triggering upon startup
  setTimeout(function() {
    // Load all functionality from `./lib`
    fs.readdirSync('./lib').forEach(function(file) {
      if (file[0] !== '.') {
        require("./lib/" + file)(bot);
      }
    });
  }, 3000);
});
