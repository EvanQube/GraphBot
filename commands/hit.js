
const cmdsModel = require("../models/cmds")
const {MessageEmbed} = require('discord.js')
let help = {
  name: "hit",
  aliases: ['ударить']
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
    if (!msg.mentions.users.size) {
      let errorEmbed = {
        color: 'RED',
        description: '⛔ Ошибка\n' + 'Вы должны упомянуть пользователя, которого хотите ударить.',
      }
      msg.channel.send({
        embed: errorEmbed
      })
    } else {
      user = msg.mentions.users.first();
      author = msg.author.id;
      hits = 13;
      hitsNumber = Math.floor(Math.random() * (hits - 1)) + 1;
      msg.channel.send('<@' + author + '>' + '\xa0' + 'ударяет' + '\xa0' + '<@' + user.id + '>', {
        files: ['./src/hits/' + hitsNumber + '.gif']
      })
    }
    msg.delete().catch();
}
