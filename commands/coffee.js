const Discord = require('discord.js')
const {MessageEmbed} = require('discord.js')
const cmdsModel = require("../models/cmds")
let help = {
  name: "coffee",
  aliases: ['кофе']
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
  if(cmds.includes(help.name) || cmds.includes(help.aliases)) return (msg.channel.send(errorEmbed))}
    author = msg.author.id;
    user = msg.mentions.users.first();
    coffee = 4;
    coffeeNumber = Math.floor(Math.random() * (coffee - 1)) + 1;
    if (!msg.mentions.users.size) {
      msg.channel.send('<@' + author + '>' + '\xa0' + 'пьёт кофе', {
        files: ['./src/coffees/' + coffeeNumber + '.gif']
      })
    } else {
      msg.channel.send('<@' + author + '>' + '\xa0' + 'пьёт кофе вместе с ' + '<@' + user.id + '>', {
        files: ['./src/coffees/' + coffeeNumber + '.gif']
      })
    }
    msg.delete().catch();
}
