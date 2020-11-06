module.exports = {
  name: 'coffee',
  description: 'Coffee',
  execute(msg, args) {
    author = msg.author.id;
    user = msg.mentions.users.first();
    coffee = 4;
    coffeeNumber = Math.floor(Math.random() * (coffee - 1)) + 1;
    if (!msg.mentions.users.size) {
      msg.channel.send('<@' + author + '>' + '\xa0' + 'пьёт кофе', {
        files: ['./src/coffees/' + coffeeNumber + '.gif']
      })
    } else {
      msg.channel.send('<@' + author + '>' + '\xa0' + 'пьёт кофе вместе с ' + '<@' + user.id + '>', {
        files: ['./src/coffees/' + coffeeNumber + '.gif']
      })
    }
    msg.delete().catch();
}
}
