
const {MessageEmbed} = require('discord.js')

const cmdsModel = require("../models/cmds")
let help = {
  name: "sleep",
  aliases: ['спать']
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
  if(cmds.includes(help.name) || cmds.includes(help.aliases)) return msg.channel.send(errorEmbed).then(msg.delete().catch())}
    user = msg.mentions.users.first();
    author = msg.author.id;
    sleep = 9;
    sleepNumber = Math.floor(Math.random() * (sleep - 1)) + 1;
    msg.channel.send('<@' + author + '>' + '\xa0' + 'спит', {
      files: ['./src/sleeps/' + sleepNumber + '.gif']
    })
    msg.delete().catch();
}
