module.exports = {
  name: 'wink',
  description: 'Подмиг',
  execute(msg, args) {
    author = msg.author.id;
    user = msg.mentions.users.first();
    wink = 5;
      if (!msg.mentions.users.size) {
    winkNumber = Math.floor(Math.random() * (wink - 1)) + 1;
    msg.channel.send('<@' + author + '>' + '\xa0' + 'подмигивает', {
      files: ['./src/winks/' + winkNumber + '.gif']
    })}
    else {msg.channel.send('<@' + author + '>' + '\xa0' + 'подмигивает ' + '<@' + user.id + '>', {
      files: ['./src/winks/' + winkNumber + '.gif']})}
    msg.delete().catch();
  }
}
