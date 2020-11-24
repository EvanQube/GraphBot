const Discord = require('discord.js')
const {MessageEmbed} = require('discord.js')
const cmdsModel = require("../models/cmds")
let help = {
  name: "kiss",
  aliases: ['поцеловать']
}
module.exports.help = {name:help.name, aliases: help.aliases}

module.exports.run = async (client, msg, args, Discord) => {

  let errorEmbed = new MessageEmbed()
    .setColor('RED')
    .setDescription('⛔ **Ошибка** \n Данная команда отключена на сервере')
  const data = await cmdsModel.findOne({
    GuildID: msg.guild.id
  });
  const cmds = data.Command;
  if(cmds.includes(help.name) || cmds.includes(help.aliases)) return (msg.channel.send(errorEmbed));
    if (!msg.mentions.users.size) {
      let errorEmbed = {
        color: 'RED',
        description: '⛔ Ошибка\n' + 'Вы должны упомянуть пользователя, которого хотите поцеловать.',
      }
      msg.channel.send({
        embed: errorEmbed
      })
    } else {
      user = msg.mentions.users.first();
      author = msg.author.id;
      kisses = 16;
      kissesNumber = Math.floor(Math.random() * (kisses - 1)) + 1;
      msg.channel.send('<@' + author + '>' + '\xa0' + 'целует' + '\xa0' + '<@' + user.id + '>', {
        files: ['./src/kisses/' + kissesNumber + '.gif']
      })
    }
    msg.delete().catch();
  }
