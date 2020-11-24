
const {MessageEmbed} = require('discord.js')
const cmdsModel = require("../models/cmds")
let help = {
  name: "sad",
  aliases: ['грусть']
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
      sad = 4;
      var sadNames = ['грустит', 'опечален'];
      var sads = Math.floor(Math.random() * 2);
      sadNumber = Math.floor(Math.random() * (sad - 1)) + 1;
      if (!msg.mentions.users.size) {
        msg.channel.send(`<@${author}> ${sadNames[sads]}`, {
          files: ['./src/sads/' + sadNumber + '.gif']
        })
      } else {
        msg.channel.send(`<@${author}>грустит вместе с <@${user.id}>`, {
            files: ['./src/sads/' + sadNumber + '.gif']
          })
        }
        msg.delete().catch();

    }
