module.exports = {
  name: 'sleep',
  description: 'Готовность ко сну',
  execute(msg, args, ) {
    user = msg.mentions.users.first();
    author = msg.author.id;
    sleep = 9;
    sleepNumber = Math.floor(Math.random() * (sleep - 1)) + 1;
    msg.channel.send('<@' + author + '>' + '\xa0' + 'готовится ко сну', {
      files: ['./src/sleeps/' + sleepNumber + '.gif']
    })
    msg.delete().catch();
  }
}
