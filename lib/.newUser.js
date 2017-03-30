function newUser(bot) {
  bot.on('message', function(message) {
    console.log(message);
    if (message.type === 'team_join' && message.user) {
      bot.postMessage(message.user.id, `Hello! :wave: If you're after the bot token it is: \`${process.env.SLACK_TOKEN}\``);
    }
  });
}

module.exports = newUser;