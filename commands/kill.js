const Discord = require('discord.js')
module.exports.help = {
    name: "kill",
    aliases: ['убить']
}

module.exports.run = async (client, msg, args) => {
    if (!msg.mentions.users.size) {
      let errorEmbed = {
        color: 'RED',
        description: '⛔ Ошибка\n' + 'Вы должны упомянуть пользователя, которого хотите убить.',
      }
      msg.channel.send({
        embed: errorEmbed
      })
    } else {
      user = msg.mentions.users.first();
      author = msg.author.id;
      kills = 4;
      killsNumber = Math.floor(Math.random() * (kills - 1)) + 1;
      msg.channel.send('<@' + author + '>' + '\xa0' + 'убивает' + '\xa0' + '<@' + user.id + '>', {
        files: ['./src/kills/' + killsNumber + '.gif']
      })
    }
    msg.delete().catch();
  }
