const Discord = require('discord.js')
module.exports.help = {
    name: "hit",
    aliases: ['ударить']
}

module.exports.run = async (client, msg, args) => {
    if (!msg.mentions.users.size) {
      let errorEmbed = {
        color: 'RED',
        description: '⛔ Ошибка\n' + 'Вы должны упомянуть пользователя, которого хотите ударить.',
      }
      msg.channel.send({
        embed: errorEmbed
      })
    } else {
      user = msg.mentions.users.first();
      author = msg.author.id;
      hits = 13;
      hitsNumber = Math.floor(Math.random() * (hits - 1)) + 1;
      msg.channel.send('<@' + author + '>' + '\xa0' + 'ударяет' + '\xa0' + '<@' + user.id + '>', {
        files: ['./src/hits/' + hitsNumber + '.gif']
      })
    }
    msg.delete().catch();
}
