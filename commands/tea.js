const {MessageEmbed} = require('discord.js')
const cmdsModel = require("../models/cmds")
let help = {
  name: "tea",
  aliases: ['чай']
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
    user = msg.mentions.users.first();
    tea = 7;
    teaNumber = Math.floor(Math.random() * (tea - 1)) + 1;
    if (!msg.mentions.users.size) {
      msg.channel.send('<@' + author + '>' + '\xa0' + 'пьёт чай', {
        files: ['./src/teas/' + teaNumber + '.gif']
      })
    } else {
      msg.channel.send('<@' + author + '>' + '\xa0' + 'пьёт чай вместе с ' + '<@' + user.id + '>', {
        files: ['./src/teas/' + teaNumber + '.gif']
      })
    }
    msg.delete().catch();
}
