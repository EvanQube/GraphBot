
const {MessageEmbed} = require('discord.js')
const cmdsModel = require("../models/cmds")
let help = {
  name: "hand",
  aliases: ['пожать']
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
  if(cmds.includes(help.name) || cmds.includes(help.aliases)) return (msg.channel.send(errorEmbed).then(msg.delete().catch()))}
      if (!msg.mentions.users.size) {
        let errorEmbed = {
          color: 'RED',
          description: '⛔ Ошибка\n' + 'Вы должны упомянуть пользователя, которому хотите пожать руку.',
        }
        msg.channel.send({
          embed: errorEmbed
        })
      } else {
        user = msg.mentions.users.first();
        author = msg.author.id;
        hand = 3;
        handNumber = Math.floor(Math.random() * (hand - 1)) + 1;
        msg.channel.send('<@' + author + '> жмёт руку' + '<@' + user.id + '>', {
          files: ['./src/hands/' + handNumber + '.gif']
        })
      }
      msg.delete().catch();
  }
