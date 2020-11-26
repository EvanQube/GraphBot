
const {MessageEmbed} = require('discord.js')

const cmdsModel = require("../models/cmds")
let help = {
  name: "wink",
  aliases: ['подмиг']
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
  if(cmds.includes(help.name) || cmds.includes(help.aliases)) return (msg.channel.send(errorEmbed)).then(msg.delete().catch())}
    author = msg.author.id;
    user = msg.mentions.users.first();
    wink = 5;
    winkNumber = Math.floor(Math.random() * (wink - 1)) + 1;
    if (!msg.mentions.users.size) {
      msg.channel.send('<@' + author + '>' + '\xa0' + 'подмигивает', {
        files: ['./src/winks/' + winkNumber + '.gif']
      })
    } else {
      msg.channel.send('<@' + author + '>' + '\xa0' + 'подмигивает ' + '<@' + user.id + '>', {
        files: ['./src/winks/' + winkNumber + '.gif']
      })
    }
    msg.delete().catch();
}
