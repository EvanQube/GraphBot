module.exports = {
  name: 'kill',
  description: "Убить",
  aliases: ['убить'],
  execute(msg, args, ms, client, prefix, Discord) {
    if (!msg.mentions.users.size) {
      let errorEmbed = {
        color: 'RED',
        description: '⛔ Ошибка\n' + 'Вы должны упомянуть пользователя, которого хотите убить.',
      }
      msg.channel.send({
        embed: errorEmbed
      })
    } else {
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
