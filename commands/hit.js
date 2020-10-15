module.exports = {
  name: 'hit',
  description: "This is a hit command!",
  execute(msg, args) {
    if (!msg.mentions.users.size) {
      msg.reply('нужно отметить пользователся, которого вы хотите ударить.')
    } else {
      user = msg.mentions.users.first();
      author = msg.author.id;
      hits = 13;
      hitsNumber = Math.floor(Math.random() * (hits - 1)) + 1;
      msg.channel.send('<@' + author + '>' + '\xa0' + 'ударяет' + '\xa0' + '<@' + user.id + '>', {
        files: ['./src/hits/' + hitsNumber + '.gif']
      })
      msg.delete().catch();
    }
  }
}
