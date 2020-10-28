module.exports = {
  name: 'sad',
  description: 'Sad',
  aliases: ['погрустить'],
  execute(msg) {
    author = msg.author.id;
    sad = 4;
    var sadNames = ['грустит', 'опечален'];
    var sads = Math.floor(Math.random() * sadNames.length);
    sadNumber = Math.floor(Math.random() * (sad - 1)) + 1;
    msg.channel.send('<@' + author + '> ' + sads, {
      files: ['./src/sads/' + sadNumber + '.gif']
    })
    msg.delete().catch();
  }
}
