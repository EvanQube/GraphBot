module.exports = {
  name: 'pinch',
  description: 'Pinch',
  execute(msg, args) {
    if (!msg.mentions.users.size) {
      let errorEmbed = {
        color: 'RED',
        description: '⛔ Ошибка\n' + 'Вы должны упомянуть пользователя, котороого хотите ущипнуть.',
      }
      msg.channel.send({
        embed: errorEmbed
      })
    } else {
      user = msg.mentions.users.first();
      author = msg.author.id;
      pinch = 5;
      pinchNumber = Math.floor(Math.random() * (pinch - 1)) + 1;
      msg.channel.send('<@' + author + '>' + '\xa0' + 'ущипнул' + '<@' + user.id + '>', {
        files: ['./src/pinchs/' + pinchNumber + '.gif']
      })
    }
    msg.delete().catch();
}
}
