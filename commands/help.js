const { Client, MessageEmbed } = require('discord.js')
const { Menu } = require('discord.js-menu')
const client = new Client()

const prefix = require('../models/prefix');

module.exports.help = {
    name: "help",
      aliases: ['cmds', 'commands', 'hlp', 'хелп', 'помощь']
}
module.exports.run = async (client, msg, args) => {
  let helpEmbed = new MessageEmbed()
  .setTitle('✅ Помощь')
  .setDescription(`Все команды вы можете посмотреть на сайте https://evanenev.gitbook.io/graphbot/`)
      msg.channel.send(helpEmbed)
  msg.delete().catch();
}
