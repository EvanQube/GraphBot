
const {MessageEmbed} = require('discord.js')
const cmdsModel = require("../models/cmds")
let help = {
  name: "unban",
  aliases: ['анбан', 'разбан']
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
    let author = msg.author.id;
    let target = args[1];
    let targetMember = client.users.cache.get(args[1]);
    let guild = msg.guild.name;
    let channel = msg.channel;

    //embeds
    let permsEmbed = new MessageEmbed()
    .setColor('RED')
    .setDescription('⛔ **Ошибка** \n У вас недостаточно прав для использования этой команды')

    let argsEmbed = new MessageEmbed()
    .setColor('RED')
    .setDescription('⛔ **Ошибка** \n Укажите пользователя, которого хотите разбанить')

    let targEmbed = new MessageEmbed()
    .setColor('RED')
    .setDescription('⛔ **Ошибка** \n Я не могу найти этого пользователя \n Возможно он не забанен')

    let unbanEmbed = new MessageEmbed()
      .setDescription(`✅ <@${target}> разбанен`)
      .setColor('GREEN')
      .addFields({
        name: 'Модератор:',
        value: `<@${author}>`,
      })

      let targetUnbanEmbed = new MessageEmbed()
      .setDescription(`Вы были разбанены на сервере **${guild}**`)
      .setColor('GREEN')
      .addFields({
        name:'Модератор:',
        value:`<@${author}>`,
        inline: true
      })
      .setTimestamp()

    //check perms
    if (!msg.member.hasPermission("BAN_MEMBERS" || "ADMINISTRATOR")) return msg.channel.send(permsEmbed).then(msg.delete().catch());
    if(!args[1]) return (msg.channel.send(argsEmbed)).then(msg.delete().catch());
    if(!target) return (msg.channel.send(targEmbed)).then(msg.delete().catch());
    //unban
    msg.guild.members.unban(target)
    .then(msg.channel.send(unbanEmbed))
    .catch()

    targetMember.send(targetUnbanEmbed)
    msg.delete().catch();
    }
