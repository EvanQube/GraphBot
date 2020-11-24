const Discord = require('discord.js')
const {MessageEmbed} = require('discord.js')
const cmdsModel = require("../models/cmds")
let help = {
  name: "kill",
  aliases: ['убить']
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
    if (!msg.mentions.users.size) {
      let errorEmbed = {
        color: 'RED',
        description: '⛔ Ошибка\n' + 'Вы должны упомянуть пользователя, которого хотите убить.',
      }
      msg.channel.send({
        embed: errorEmbed
      })
    } else {
      user = msg.mentions.users.first();
      author = msg.author.id;
      kills = 4;
      killsNumber = Math.floor(Math.random() * (kills - 1)) + 1;
      msg.channel.send('<@' + author + '>' + '\xa0' + 'убивает' + '\xa0' + '<@' + user.id + '>', {
        files: ['./src/kills/' + killsNumber + '.gif']
      })
    }
    msg.delete().catch();
  }
