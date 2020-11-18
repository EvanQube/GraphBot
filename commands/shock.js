module.exports = {
  name: 'shock',
  description: 'Shock',
  execute(msg, args, ms, client, prefix, Discord) {
    author = msg.author.id;
    shock = 5;
    shockNumber = Math.floor(Math.random() * (shock - 1)) + 1;
    msg.channel.send('<@' + author + '>' + '\xa0' + 'в шоке', {
      files: ['./src/shocks/' + shockNumber + '.gif']
    })
    msg.delete().catch();
}
}
