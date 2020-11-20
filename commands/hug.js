const Discord = require('discord.js')
module.exports.help = {
    name: "hug",
    aliases: ['обнять']
}

module.exports.run = async (client, msg) => {
  const prefix = '/'
  const args = msg.content.slice(prefix.length).split(/ +/);
      const args = msg.content.slice(prefix.length).trim().split(/ +/);
      user = msg.mentions.users.first();
      author = msg.author.id;
      hugs = 14;
      hugsNumber = Math.floor(Math.random() * (hugs - 1)) + 1;
      if (args[0] === 'everyone') {
        msg.channel.send(`<@${author}> обнимает **ВСЕХ**`, {
          files: ['./src/hugs/' + hugsNumber + '.gif']
        })
      }
      else if (!msg.mentions.users.size) {
        let errorEmbed = {
          color: 'RED',
          description: '⛔ Ошибка\n' + 'Вы должны упомянуть пользователя, которого хотите обнять.',
        }
        msg.channel.send({
          embed: errorEmbed
        })
      } else {
        msg.channel.send(`<@${author}> обнимает <@${user.id}>`, {
            files: ['./src/hugs/' + hugsNumber + '.gif']
          })
          msg.delete().catch();
        }
    }
