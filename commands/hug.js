const Discord = require('discord.js')
module.exports.help = {
    name: "hug",
    aliases: ['обнять']
}

module.exports.run = async (client, msg, args) => {

      user = msg.mentions.users.first();
      author = msg.author.id;
      hugs = 14;
      hugsNumber = Math.floor(Math.random() * (hugs - 1)) + 1;
      if (args[1] === 'everyone') {
        msg.channel.send(`<@${author}> обнимает **ВСЕХ**`, {
          files: ['./src/hugs/' + hugsNumber + '.gif']
        })
      }
      
      else if (!msg.mentions.users.size) {
        let errorEmbed = new Discord.MessageEmbed()
          .setColor('#90e0ef')
          .setTitle('Команда /hug \n')
          .setDescription('Обнять участника в чате')
          .addFields( {
            name: 'Использование:', value:'`/hug <тэг пользователя>`'
          })
        msg.channel.send(errorEmbed)
      } else {
        msg.channel.send(`<@${author}> обнимает <@${user.id}>`, {
            files: ['./src/hugs/' + hugsNumber + '.gif']
          })
          msg.delete().catch();
        }
    }
