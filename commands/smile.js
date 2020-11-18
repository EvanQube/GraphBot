module.exports = {
  name: 'smile',
  description: 'Smile',
  execute(msg, args, ms, client, prefix, Discord) {
    author = msg.author.id;
    user = msg.mentions.users.first();
    smile = 8;
    smileNumber = Math.floor(Math.random() * (smile - 1)) + 1;
    if (!msg.mentions.users.size) {
      msg.channel.send('<@' + author + '>' + '\xa0' + 'улыбается', {
        files: ['./src/smiles/' + smileNumber + '.gif']
      })
    } else {
      msg.channel.send('<@' + author + '>' + '\xa0' + 'улыбается' + '<@' + user.id + '>', {
        files: ['./src/smiles/' + smileNumber + '.gif']
      })
    }
    msg.delete().catch();
}
}
