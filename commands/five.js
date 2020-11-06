exports.run = async(client, msg, args, Discord, ms) => {
    if (!msg.mentions.users.size) {
      let errorEmbed = {
        color: 'RED',
        description: '⛔ Ошибка\n' + 'Вы должны упомянуть пользователя, которому хотите дать пять.',
      }
      msg.channel.send({
        embed: errorEmbed
      })
    } else {
      author = msg.author.id;
      user = msg.mentions.users.first();
      five = 3;
      fiveNumber = Math.floor(Math.random() * (five - 1)) + 1;
      msg.channel.send('<@' + author + '>' + '\xa0' + 'даёт пять ' + '<@' + user.id + '>', {
        files: ['./src/fives/' + fiveNumber + '.gif']
      })
      msg.delete().catch();
    }
}
