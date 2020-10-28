module.exports = {
  name: 'hit',
  aliases: ['ударить'],
  description: "This is a hit command!",
  execute(msg, args) {
    if (!msg.mentions.users.size) {
      let errorEmbed = {
      color: 'RED',
      description: 'Ошибка',}
      msg.channel.send({embed: errorEmbed})
    } else {
      user = msg.mentions.users.first();
      author = msg.author.id;
      hits = 13;
      hitsNumber = Math.floor(Math.random() * (hits - 1)) + 1;
      msg.channel.send('<@' + author + '>' + '\xa0' + 'ударяет' + '\xa0' + '<@' + user.id + '>', {
        files: ['./src/hits/' + hitsNumber + '.gif']
      })
    }
    msg.delete().catch();
  }
}
