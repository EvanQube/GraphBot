const prefixModel = require("../models/prefix")
const {MessageEmbed} = require('discord.js')
module.exports.help = {
    name: "prefix", //Name of the command
    aliases: ['prfx'] // Any Aliases you want for the command (If you don't want any just ignore this.)
}

module.exports.run = async (client, msg, args) => {
  const member = msg.guild.member(msg.author);

  let argsEmbed = new MessageEmbed()
  .setColor('RED')
  .setDescription('⛔ **Ошибка** \n Укажите префикс, который хотите поставить')

  let permsEmbed = new MessageEmbed()
    .setColor('RED')
    .setDescription('⛔ **Ошибка** \n У вас недостаточно прав для использования этой команды \n Необхожимые права: `Администратор`')

  const data = await prefixModel.findOne({
  GuildID: client.guilds.cache.get(msg.guild.id).id
});
if(!member.hasPermission('ADMINISTRATOR')) return msg.channel.send(permsEmbed).then(msg.delete().catch());
if(!args[1]) return msg.channel.send(argsEmbed).then(msg.delete().catch());
if (data) {
       await prefixModel.findOneAndRemove({
           GuildID: msg.guild.id
       })

       msg.channel.send(`Новый префикс для этого сервера **\`${args[1]}\`**`);

       let newData = new prefixModel({
           Prefix: args[1],
           GuildID: client.guilds.cache.get(msg.guild.id).id
       })
       newData.save();
   } else if (!data) {
       msg.channel.send(`Новый префикс для этого сервера **\`${args[1]}\`**`);

       let newData = new prefixModel({
           Prefix: args[1],
           GuildID: client.guilds.cache.get(msg.guild.id).id
       })
       newData.save();
}}
