exports.run = async(client, msg, args, Discord, ms) => {
    author = msg.author.id;
    user = msg.mentions.users.first();
    tea = 7;
    teaNumber = Math.floor(Math.random() * (tea - 1)) + 1;
    if (!msg.mentions.users.size) {
      msg.channel.send('<@' + author + '>' + '\xa0' + 'пьёт чай', {
        files: ['./src/teas/' + teaNumber + '.gif']
      })
    } else {
      msg.channel.send('<@' + author + '>' + '\xa0' + 'пьёт чай вместе с ' + '<@' + user.id + '>', {
        files: ['./src/teas/' + teaNumber + '.gif']
      })
    }
    msg.delete().catch();
}
