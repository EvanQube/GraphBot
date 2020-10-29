module.exports = {
  name: 'kiss',
  description: "This is a kiss command!",
  aliases: ['поцеловать'],
  execute(msg, args) {
    if (!msg.mentions.users.size) {
      let errorEmbed = {
        color: 'RED',
        description: '⛔ Ошибка\n' + 'Вы должны упомянуть пользователя, которого хотите поцеловать.',
      }
      msg.channel.send({
        embed: errorEmbed
      })
    } else {
      user = msg.mentions.users.first();
      author = msg.author.id;
      kisses = 16;
      kissesNumber = Math.floor(Math.random() * (kisses - 1)) + 1;
      msg.channel.send('<@' + author + '>' + '\xa0' + 'целует' + '\xa0' + '<@' + user.id + '>', {
        files: ['./src/kisses/' + kissesNumber + '.gif']
      })
    }
    msg.delete().catch();
  }
}
