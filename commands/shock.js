module.exports = {
  name: 'shock',
  description: 'Шок',
  execute(msg, args) {
    author = msg.author.id;
    shock = 5;
    shockNumber = Math.floor(Math.random() * (shock - 1)) + 1;
    msg.channel.send('<@' + author + '>' + '\xa0' + 'в шоке', {
      files: ['./src/shocks/' + shockNumber + '.gif']
    })
    msg.delete().catch();
  }
}