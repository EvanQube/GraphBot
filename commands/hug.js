module.exports = {
  name: 'hug',
  description: "This is a hug command!",
  aliases: ['обнять'],
  execute(msg, args, embed) {
    if (!msg.mentions.users.size) {
      let errorEmbed = {
      color: 'RED',
      description: 'Ошибка',}
      msg.channel.send({embed:})
    } else {
      user = msg.mentions.users.first();
      author = msg.author.id;
      hugs = 14;
      hugsNumber = Math.floor(Math.random() * (hugs - 1)) + 1;
      msg.channel.send('<@' + author + '>' + '\xa0' + 'обнимает' + '\xa0' + '<@' + user.id + '>', {
        files: ['./src/hugs/' + hugsNumber + '.gif']
      })
      msg.delete().catch();
    }
  }
}
