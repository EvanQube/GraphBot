
const {MessageEmbed} = require('discord.js')
const cmdsModel = require("../models/cmds")
let help = {
  name: "five",
  aliases: ['пять']
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
        description: '⛔ Ошибка\n' + 'Вы должны упомянуть пользователя, которому хотите дать пять.',
      }
      msg.channel.send({
        embed: errorEmbed
      })
    } else {
      author = msg.author.id;
      user = msg.mentions.users.first();
      five = 3;
      fiveNumber = Math.floor(Math.random() * (five - 1)) + 1;
      msg.channel.send('<@' + author + '>' + '\xa0' + 'даёт пять ' + '<@' + user.id + '>', {
        files: ['./src/fives/' + fiveNumber + '.gif']
      })
    }
    msg.delete().catch();
}
