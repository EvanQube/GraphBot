module.exports = {
  name: 'kiss',
  description: "This is a kiss command!",
  execute(msg, args) {
    if (!msg.mentions.users.size) {
      msg.reply('нужно отметить пользователся, которого вы хотите поцеловать.')
    } else {
      user = msg.mentions.users.first();
      author = msg.author.id;
      kisses = 16;
      kissesNumber = Math.floor(Math.random() * (kisses - 1)) + 1;
      msg.channel.send('<@' + author + '>' + '\xa0' + 'обнимает' + '\xa0' + '<@' + user.id + '>', {
        files: ['./src/hugs/' + kissesNumber + '.gif']
      })
      msg.delete().catch();
    }
  }
}