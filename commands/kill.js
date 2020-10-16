module.exports = {
  name: 'kill',
  description: "Убить",
  execute(msg, args) {
    if (!msg.mentions.users.size) return msg.reply('нужно отметить пользователся, которого вы хотите убить.')
    else {
      user = msg.mentions.users.first();
      author = msg.author.id;
      kills = 4;
      killsNumber = Math.floor(Math.random() * (kills - 1)) + 1;
      msg.channel.send('<@' + author + '>' + '\xa0' + 'убивает' + '\xa0' + '<@' + user.id + '>', {
        files: ['./src/kills/' + killsNumber + '.gif']
      })
    }
    msg.delete().catch();
  }
}
