const { Client, MessageEmbed } = require('discord.js')
const { Menu } = require('discord.js-menu')
const client = new Client()

const p = require('../models/prefix');
let help = {
  name: "help",
  aliases: ['cmds', 'commands', 'hlp', 'хелп', 'помощь']
}
module.exports.help = {name:help.name, aliases: help.aliases}

module.exports.run = async (client, msg, args, Discord) => {

  const data = await p.findOne({
       GuildID: msg.guild.id
   });
   if(data) {
       const p = data.Prefix;
    } else if (!data) {
       const p = '/';}
  let helpEmbed = new MessageEmbed()
  .setTitle(`✅ Префикс бота - $p`)
  .setDescription(`Все команды вы можете посмотреть на сайте https://evanenev.gitbook.io/graphbot/`)
      msg.channel.send(helpEmbed)
  msg.delete().catch();
}
