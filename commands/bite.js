const Discord = require('discord.js')
module.exports.help = {
    name: "bite",
    aliases: ['кусь']
}

module.exports.run = async (client, msg, args) => {
    if (!msg.mentions.users.size) {
      let errorEmbed = {
        color: 'RED',
        description: '⛔ Ошибка\n' + 'Вы должны упомянуть пользователя, которого хотите укусить.',
      }
      msg.channel.send({
        embed: errorEmbed
      })
    } else {
      user = msg.mentions.users.first();
      author = msg.author.id;
      bite = 6;
      biteNumber = Math.floor(Math.random() * (bite - 1)) + 1;
      msg.channel.send('<@' + author + '>' + '\xa0' + 'кусает' + '<@' + user.id + '>', {
        files: ['./src/bites/' + biteNumber + '.gif']
      })
    }
    msg.delete().catch();
}
