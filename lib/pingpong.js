"use strict";

/**
 * Responds to any 'ping' messages with the word 'PONG!'
 */
function PingPong(bot) {
  bot.on('message', function(data) {
    if (data.type === 'message' && data.text && data.text.toLowerCase() === 'ping') {
      bot.postMessage(data.channel, 'PONG!');
    }
  });
}

module.exports = PingPong;
