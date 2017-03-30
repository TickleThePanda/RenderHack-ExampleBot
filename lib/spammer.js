"use strict";

var restify = require('restify');

var client = restify.createJsonClient({
  url: 'https://westus.api.cognitive.microsoft.com/',
  headers: {
    "Ocp-Apim-Subscription-Key": process.env.COG_SERVICES_TOKEN
  }
});

/**
 * Responds to any 'ping' messages with the word 'PONG!'
 */
function Spammer(bot) {
  var channel = {}

  var threshold = 5;

  bot.on('message', function(data) {
    if(data.type === "desktop_notification" && data.subtitle.indexOf("(bot)") < 0) {

      if(channel[data.channel] === undefined) {
        channel[data.channel] = {
          lastMessenger: data.subtitle,
          count: 1,
          sum: 0
        };
        return;
      }

      var savedChannel = channel[data.channel];
      console.log(savedChannel);
      if(savedChannel.lastMessenger != data.subtitle) {
        savedChannel.count = 1;
        savedChannel.lastMessenger = data.subtitle;
      } else {
        savedChannel.count++;
      }

      if(savedChannel.count >= threshold) {


        client.post('/text/analytics/v2.0/sentiment', {
          "documents": [
            {
              "language": "en",
              "id": "message",
              "text": data.content
            }
          ]
        }, (error, req, response, object) => {
          console.log(object);
          if(object.documents[0].score > 0.5) {
            bot.postMessage(data.channel, "OMG! You're clearly too excited. Stop spamming this poor guy. Get back to work!");
          } else {
            bot.postMessage(data.channel, "OMG! You're probably being a downer. Stop spamming this poor guy. Get back to work!");
          }
        });
        delete channel[data.channel];
      }
    }
  });
}

module.exports = Spammer  ;
