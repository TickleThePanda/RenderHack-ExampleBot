"use strict";
const moment = require('moment');

const channel = 'general';
const minute = 60 * 1000;
const presentationTime = '2017-03-30 21:30';

/**
 * Lets everyone know how long is left until the hackathon ends.
 */
function Countdown(bot) {
  setInterval(function() {
    const now = moment();

    if (now.isBetween('2017-03-30 18:00', '2017-03-30 22:00', null, '[]')) {
      if (now.isSame('2017-03-30 18:00')) {
        bot.postMessage(channel, 'Time to start hacking! :rocket:');
      } else if (now.isSame(presentationTime)) {
        bot.postMessage(channel, 'Presentation time!');
      } else if (now.minute() === 0 || now.minute() === 30) {
        let remaining = moment.duration(moment(presentationTime).diff(now)).humanize();
        bot.postMessage(channel, remaining + ' remaining');
      }
    }
  }, minute);
}

module.exports = Countdown;
