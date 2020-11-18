module.exports = {
  name: 'hand',
  description: 'Hand',
  execute(msg, args, ms, client, prefix, Discord) {
      if (!msg.mentions.users.size) {
        let errorEmbed = {
          color: 'RED',
          description: '⛔ Ошибка\n' + 'Вы должны упомянуть пользователя, которому хотите пожать руку.',
        }
        msg.channel.send({
          embed: errorEmbed
        })
      } else {
        user = msg.mentions.users.first();
        author = msg.author.id;
        hand = 3;
        handNumber = Math.floor(Math.random() * (hand - 1)) + 1;
        msg.channel.send('<@' + author + '> жмёт руку' + '<@' + user.id + '>', {
          files: ['./src/hands/' + handNumber + '.gif']
        })
      }
      msg.delete().catch();
  }
}
