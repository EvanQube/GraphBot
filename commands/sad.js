module.exports = {
    name: 'sad',
    description: 'Sad',
    aliases: ['погрустить'],
    execute(msg) {
      author = msg.author.id;
      user = msg.mentions.users.first();
      sad = 4;
      var sadNames = ['грустит', 'опечален'];
      var sads = Math.floor(Math.random() * 2);
      sadNumber = Math.floor(Math.random() * (sad - 1)) + 1;
      if (!msg.mentions.users.size) {
        msg.channel.send(`<@${author}> ${sadNames[sads]}`, {
          files: ['./src/sads/' + sadNumber + '.gif']
        })
      } else {
        msg.channel.send(`<@${author}>грустит вместе с <@${user.id}>`, {
            files: ['./src/sads/' + sadNumber + '.gif']
          })
          msg.delete().catch();
        }
      }
    }
