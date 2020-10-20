module.exports = {
  name: 'sad',
  description: 'Sad',
  execute(msg) {
    author = msg.author.id;
    sad = 4;
    sadNumber = Math.floor(Math.random() * (sad - 1)) + 1;
    msg.channel.send('<@' + author + '> грустит', {
      files: ['./src/sads/' + sadNumber + '.gif']
    })
    msg.delete().catch();
  }
}
