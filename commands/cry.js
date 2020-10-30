module.exports = {
  name: 'cry',
  description: 'Плач',
  aliases: ['поплакать'],
  execute(msg, args, ) {
    author = msg.author.id;
    cry = 13;
    cryNumber = Math.floor(Math.random() * (cry - 1)) + 1;
    msg.channel.send('<@' + author + '>' + '\xa0' + 'плачет', {
      files: ['./src/crys/' + cryNumber + '.gif']
    })
    msg.delete().catch();
  }
}
