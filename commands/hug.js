module.exports = {
    name: 'hug',
    description: "This is a hug command!",
    aliases: ['обнять'],
    execute(msg, args, embed) {
      user = msg.mentions.users.first();
      author = msg.author.id;
      hugs = 14;
      hugsNumber = Math.floor(Math.random() * (hugs - 1)) + 1;
      if (!msg.mentions.users.size) {
        let errorEmbed = {
          color: 'RED',
          description: '⛔ Ошибка\n' + 'Вы должны упомянуть пользователя, которого хотите обнять.',
        }
        msg.channel.send({
          embed: errorEmbed
        })
      } else if (args[0] === 'everyone') {
        msg.channel.send(`<@${author}> обнимает **ВСЕХ**`, {
          files: ['./src/hugs/' + hugsNumber + '.gif']
        })
      } else {
        msg.channel.send('<@' + author + '>' + '\xa0' + 'обнимает' + '\xa0' + '<@' + user.id + '>', {
            files: ['./src/hugs/' + hugsNumber + '.gif']
          })
          msg.delete().catch();
        }
      }
    }
