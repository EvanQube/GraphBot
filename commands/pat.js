module.exports = {
  name: 'pat',
  description: "Погладить",
  execute(msg, args) {
    if (!msg.mentions.users.size) return msg.reply('нужно отметить пользователся, которого вы хотите погладить.')
    else {
      user = msg.mentions.users.first();
      author = msg.author.id;
      pats = 16;
      patsNumber = Math.floor(Math.random() * (pats - 1)) + 1;
      msg.channel.send('<@' + author + '>' + '\xa0' + 'гладит' + '\xa0' + '<@' + user.id + '>', {
        files: ['./src/pats/' + patsNumber + '.gif']
      })
    }
    msg.delete().catch();
  }
}
