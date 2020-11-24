const Discord = require('discord.js')
const {MessageEmbed} = require('discord.js')
const cmdsModel = require("../models/cmds")
let help = {
  name: "cry",
  aliases: ['плак']
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
    author = msg.author.id;
    cry = 13;
    cryNumber = Math.floor(Math.random() * (cry - 1)) + 1;
    msg.channel.send('<@' + author + '>' + '\xa0' + 'плачет', {
      files: ['./src/crys/' + cryNumber + '.gif']
    })
    msg.delete().catch();
}
