module.exports = {
  name: 'pat',
  description: 'Pat',
  execute(msg, args) {
    if (!msg.mentions.users.size) {
      let errorEmbed = {
        color: 'RED',
        description: '⛔ Ошибка\n' + 'Вы должны упомянуть пользователя, которого хотите погладить.',
      }
      msg.channel.send({
        embed: errorEmbed
      })
    } else {
      user = msg.mentions.users.first();
      author = msg.author.id;
      pats = 10;
      patsNumber = Math.floor(Math.random() * (pats - 1)) + 1;
      msg.channel.send('<@' + author + '>' + '\xa0' + 'гладит' + '\xa0' + '<@' + user.id + '>', {
        files: ['./src/pats/' + patsNumber + '.gif']
      })
    }
    msg.delete().catch();
}
}
