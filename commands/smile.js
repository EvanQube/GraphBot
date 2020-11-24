
const {MessageEmbed} = require('discord.js')
const cmdsModel = require("../models/cmds")
let help = {
  name: "smile",
  aliases: ['улыбка']
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
    smile = 8;
    smileNumber = Math.floor(Math.random() * (smile - 1)) + 1;
    if (!msg.mentions.users.size) {
      msg.channel.send('<@' + author + '>' + '\xa0' + 'улыбается', {
        files: ['./src/smiles/' + smileNumber + '.gif']
      })
    } else {
      msg.channel.send('<@' + author + '>' + '\xa0' + 'улыбается' + '<@' + user.id + '>', {
        files: ['./src/smiles/' + smileNumber + '.gif']
      })
    }
    msg.delete().catch();
}
