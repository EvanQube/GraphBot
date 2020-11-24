const { Client, MessageEmbed } = require('discord.js')
const { Menu } = require('discord.js-menu')
const client = new Client()

const prefix = require('../models/prefix');
const cmdsModel = require("../models/cmds")
let help = {
  name: "help",
  aliases: ['cmds', 'commands', 'hlp', 'хелп', 'помощь']
}
module.exports.help = {name:help.name, aliases: help.aliases}

module.exports.run = async (client, msg, args, Discord) => {

  const data = await prefix.findOne({
       GuildID: msg.guild.id
   });
   if(data) {
       const prefix = data.Prefix;
    } else if (!data) {
       const prefix = '/';}
  const cmds = data.Command;
  if(cmds.includes(help.name) || cmds.includes(help.aliases)) return (msg.channel.send(errorEmbed));
  let helpEmbed = new MessageEmbed()
  .setTitle(`✅ Префикс бота - ${prefix}`)
  .setDescription(`Все команды вы можете посмотреть на сайте https://evanenev.gitbook.io/graphbot/`)
      msg.channel.send(helpEmbed)
  msg.delete().catch();
}
