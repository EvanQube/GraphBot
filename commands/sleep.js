exports.run = async(client, msg, args, Discord, ms) => {
    user = msg.mentions.users.first();
    author = msg.author.id;
    sleep = 9;
    sleepNumber = Math.floor(Math.random() * (sleep - 1)) + 1;
    msg.channel.send('<@' + author + '>' + '\xa0' + 'спит', {
      files: ['./src/sleeps/' + sleepNumber + '.gif']
    })
    msg.delete().catch();
}
