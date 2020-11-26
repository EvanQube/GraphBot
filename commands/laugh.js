
const {MessageEmbed} = require('discord.js')
const cmdsModel = require("../models/cmds")
let help = {
  name: "laugh",
  aliases: ['смех']
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
    author = msg.author.id;
    laugh = 10;
    laughNumber = Math.floor(Math.random() * (laugh - 1)) + 1;
    msg.channel.send('<@' + author + '>' + '\xa0' + 'смеётся', {
      files: ['./src/laughs/' + laughNumber + '.gif']
    })
    msg.delete().catch();
  }
