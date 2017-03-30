"use strict";

/**
 * Responds to any 'ping' messages with the word 'PONG!'
 */
function Logger(bot) {
  bot.on('message', function(data) {
    //console.log(data);
  });

}

module.exports = Logger;
