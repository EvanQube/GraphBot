const {MessageEmbed} = require('discord.js')
const cmdsModel = require("../models/cmds")
let help = {
  name: "anger",
  aliases: ['angr', 'злой']
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
    anger = 6;
    user = msg.mentions.users.first();
    angerNumber = Math.floor(Math.random() * (anger - 1)) + 1;
    if(!msg.mentions.users.size){
    msg.channel.send('<@' + author + '>' + '\xa0' + 'злится', {
      files: ['./src/angers/' + angerNumber + '.gif']
    })}
    else {
      msg.channel.send(`<@${author}> злится на <@${user.id}>`,{
        files: ['./src/angers/' + angerNumber + '.gif']
      })}
    msg.delete().catch();
}
