module.exports = {
  name: 'sorry',
  description: 'Sorry',
  execute(msg, args) {
    author = msg.author.id;
    user = msg.mentions.users.first();
    sorry = 7;
    sorryNumber = Math.floor(Math.random() * (sorry - 1)) + 1;
    if (!msg.mentions.users.size) {
      msg.channel.send('<@' + author + '>' + '\xa0' + 'извиняется', {
        files: ['./src/sorrys/' + sorryNumber + '.gif']
      })
    } else {
      msg.channel.send('<@' + author + '>' + '\xa0' + 'извиняется перед ' + '<@' + user.id + '>', {
        files: ['./src/sorrys/' + sorryNumber + '.gif']
      })
    }
    msg.delete().catch();
}
}
