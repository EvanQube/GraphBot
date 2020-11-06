exports.run = async(client, msg, args, Discord, ms) => {
    if (!msg.mentions.users.size) {
      let errorEmbed = {
        color: 'RED',
        description: '⛔ Ошибка\n' + 'Вы должны упомянуть пользователя, которого хотите похвалить.',
      }
      msg.channel.send({
        embed: errorEmbed
      })
    } else {
      author = msg.author.id;
      user = msg.mentions.users.first();
      praise = 6;
      praiseNumber = Math.floor(Math.random() * (praise - 1)) + 1;
      msg.channel.send('<@' + author + '>' + '\xa0' + 'хвалит' + '<@' + user.id + '>', {
        files: ['./src/praises/' + praiseNumber + '.gif']
      })
    }
    msg.delete().catch();
}
