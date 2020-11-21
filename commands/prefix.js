const prefixModel = require("../models/prefix")
const { Discord } = require('discord.js')
module.exports.help = {
    name: "prefix", //Name of the command
    aliases: ['prfx'] // Any Aliases you want for the command (If you don't want any just ignore this.)
}

module.exports.run = async (client, msg, args, Discord) => {
  let argsEmbed = new Discord.MessageEmbed()
  .setColor('RED')
  .setDescription('⛔ **Ошибка** \n Укажите префикс, который хотите поставить')

  let permsEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription('⛔ **Ошибка** \n У вас недостаточно прав для использования этой команды \n Необхожимые права: `Администратор`')

  const member = msg.guild.member(msg.author);
  const data = await prefixModel.findOne({
  GuildID: msg.guild.id
});
if(!member.hasPermission('ADMINISTRATOR')) return permsEmbed;
if(!args[1]) return argsEmbed;
if (data) {
       await prefixModel.findOneAndRemove({
           GuildID: msg.guild.id
       })

       msg.channel.send(`Новый префикс для этого сервера **\`${args[1]}\`**`);

       let newData = new prefixModel({
           Prefix: args[1],
           GuildID: msg.guild.id
       })
       newData.save();
   } else if (!data) {
       msg.channel.send(`Новый префикс для этого сервера **\`${args[1]}\`**`);

       let newData = new prefixModel({
           Prefix: args[1],
           GuildID: msg.guild.id
       })
       newData.save();
}}
