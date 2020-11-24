const Discord = require('discord.js')
const {MessageEmbed} = require('discord.js')
const cmdsModel = require("../models/cmds")
let help = {
  name: "shy",
  aliases: ['стеснение']
}
module.exports.help = {name:help.name, aliases: help.aliases}

module.exports.run = async (client, msg, args, Discord) => {

  let errorEmbed = new MessageEmbed()
    .setColor('RED')
    .setDescription('⛔ **Ошибка** \n Данная команда отключена на сервере')
  const data = await cmdsModel.findOne({
    GuildID: msg.guild.id
  });
  if (!data) {

    let newData = new cmdsModel({
      GuildID: msg.guild.id,
      Command: '\u200B'
    })
  const cmds = data.Command;
  if(cmds.includes(help.name) || cmds.includes(help.aliases)) return (msg.channel.send(errorEmbed));
    author = msg.author.id;
    shy = 4;
    shyNumber = Math.floor(Math.random() * (shy - 1)) + 1;
    msg.channel.send('<@' + author + '> стесняется', {
      files: ['./src/shys/' + shyNumber + '.gif']
    })
    msg.delete().catch();
}
