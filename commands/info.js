
const {MessageEmbed} = require('discord.js')
const cmdsModel = require("../models/cmds")
const p = require('../models/prefix');
let help = {
  name: "info",
  aliases: ['инфо']
}
module.exports.help = {name:help.name, aliases: help.aliases}

module.exports.run = async (client, msg, args, Discord) => {
  const pData = await p.findOne({
       GuildID: msg.guild.id
   });
  if(pData) {const p = pData.Prefix}
  if (!pData) {const p = '/'}
  let errorEmbed = new MessageEmbed()
    .setColor('RED')
    .setDescription('⛔ **Ошибка** \n Данная команда отключена на сервере')
  const data = await cmdsModel.findOne({
    GuildID: msg.guild.id
  });
  if (data) {
  const cmds = data.Command;
  if(cmds.includes(help.name) || cmds.includes(help.aliases)) return msg.channel.send(errorEmbed).then(msg.delete().catch())}
    const infoEmbed = new MessageEmbed()
      .setColor('#ADD8E6')
      .setTitle('**Привет!**')
      .setAuthor('GraphBot', 'https://i.imgur.com/SY6e3l3.jpg')
      .setDescription('Меня зовут **Граф**, я предназначен для отыгрывания рп прямо в дискорде!')
      .addFields({
        name: '\u200B',
        value:
          'Я поддерживаю довольно много команд, которые часто обновляются и добавляются. \n\n' +
          `Чтобы узнать какие, пропиши **/help**. \n\n` +
          `Ты также можешь добавить меня к себе, просто напиши команду **/invite** \n \n` +
          `**Я уже на ${client.guilds.cache.size} серверах**`,
      }, )
      .setImage('https://i.pinimg.com/originals/fb/24/3f/fb243f7b97edf6267a29b99a772297da.jpg')
      .setTimestamp()
      .setFooter('Ламповый бот для рп!', 'https://i.imgur.com/SY6e3l3.jpg');
    msg.channel.send(infoEmbed)
    msg.delete().catch();
  }
