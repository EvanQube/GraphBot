const Discord = require('discord.js')
const {MessageEmbed} = require('discord.js')
const cmdsModel = require("../models/cmds")
let help = {
  name: "praise",
  aliases: ['похвалить']
}
module.exports.help = {name:help.name, aliases: help.aliases}

module.exports.run = async (client, msg, args, Discord) => {

  let errorEmbed = new MessageEmbed()
    .setColor('RED')
    .setDescription('⛔ **Ошибка** \n Данная команда отключена на сервере')
  const data = await cmdsModel.findOne({
    GuildID: msg.guild.id
  });
  if (data) {
  const cmds = data.Command;
  if(cmds.includes(help.name) || cmds.includes(help.aliases)) return (msg.channel.send(errorEmbed));}
    if (!msg.mentions.users.size) {
      let errorEmbed = {
        color: 'RED',
        description: '⛔ Ошибка\n' + 'Вы должны упомянуть пользователя, которого хотите похвалить.',
      }
      msg.channel.send({
        embed: errorEmbed
      })
    } else {
      author = msg.author.id;
      user = msg.mentions.users.first();
      praise = 6;
      praiseNumber = Math.floor(Math.random() * (praise - 1)) + 1;
      msg.channel.send('<@' + author + '>' + '\xa0' + 'хвалит' + '<@' + user.id + '>', {
        files: ['./src/praises/' + praiseNumber + '.gif']
      })
    }
    msg.delete().catch();
}
