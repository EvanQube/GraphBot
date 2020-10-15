module.exports = {
  name: 'cry',
  description: 'Плач',
  execute(msg, args, ) {
    if (!msg.mentions.users.size) return msg.reply('нужно отметить пользователся, которого вы хотите поцеловать.')
    else {
      author = msg.author.id;
      cry = 11;
      cryNumber = Math.floor(Math.random() * (cry - 1)) + 1;
      msg.channel.send('<@' + author + '>' + '\xa0' + 'плачет', {
        files: ['./src/crys/' + cryNumber + '.gif']
      })
    }
    msg.delete().catch();
  }
}
