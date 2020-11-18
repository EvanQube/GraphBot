module.exports = {
  name: 'hit',
  description: 'Hit',
  execute(msg, args, ms, client, prefix, Discord) {
    if (!msg.mentions.users.size) {
      let errorEmbed = {
        color: 'RED',
        description: '⛔ Ошибка\n' + 'Вы должны упомянуть пользователя, которого хотите ударить.',
      }
      msg.channel.send({
        embed: errorEmbed
      })
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
