module.exports = {
  name: 'anger',
  description: 'Anger',
  execute(msg, args, ms, client, prefix, Discord) {
    author = msg.author.id;
    anger = 6;
    angerNumber = Math.floor(Math.random() * (anger - 1)) + 1;
    msg.channel.send('<@' + author + '>' + '\xa0' + 'злится', {
      files: ['./src/angers/' + angerNumber + '.gif']
    })
    msg.delete().catch();
}
}
