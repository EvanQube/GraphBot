const Discord = require('discord.js')
const {MessageEmbed} = require('discord.js')
const cmdsModel = require("../models/cmds")
let help = {
  name: "sorry",
  aliases: ['извини']
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
    user = msg.mentions.users.first();
    sorry = 7;
    sorryNumber = Math.floor(Math.random() * (sorry - 1)) + 1;
    if (!msg.mentions.users.size) {
      msg.channel.send('<@' + author + '>' + '\xa0' + 'извиняется', {
        files: ['./src/sorrys/' + sorryNumber + '.gif']
      })
    } else {
      msg.channel.send('<@' + author + '>' + '\xa0' + 'извиняется перед ' + '<@' + user.id + '>', {
        files: ['./src/sorrys/' + sorryNumber + '.gif']
      })
    }
    msg.delete().catch();
}
