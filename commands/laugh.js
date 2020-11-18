module.exports = {
  name: 'laugh',
  description: 'Смех',
  execute(msg, args, ms, client, prefix, Discord) {
    author = msg.author.id;
    laugh = 10;
    laughNumber = Math.floor(Math.random() * (laugh - 1)) + 1;
    msg.channel.send('<@' + author + '>' + '\xa0' + 'смеётся', {
      files: ['./src/laughs/' + laughNumber + '.gif']
    })
    msg.delete().catch();
  }
}
