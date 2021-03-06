const {MessageEmbed} = require('discord.js')
const cmdsModel = require("../models/cmds")
let help = {
  name: "ban",
  aliases: ['бан']
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
    let author = msg.author.id;
    let target = msg.mentions.users.first() || msg.guild.members.cache.get(args[1]);
    let targetMember = msg.guild.member(target);
    let guild = msg.guild.name;

    //check reason
    let reason = args.slice(2).join(' ');
    if(!reason) {reason = 'None'}

    //embeds
    let permsEmbed = new MessageEmbed()
      .setColor('RED')
      .setDescription('⛔ **Ошибка** \n У вас недостаточно прав для использования этой команды')

    let errEmbed = new MessageEmbed()
      .setColor('RED')
      .setDescription('⛔ **Ошибка** \n Я не могу забанить этого пользователя')

    let authEmbed = new MessageEmbed()
      .setColor('RED')
      .setDescription('⛔ **Ошибка** \n Вы не можете забанить сами себя')

    let argsEmbed = new MessageEmbed()
    .setColor('RED')
    .setDescription('⛔ **Ошибка** \n Укажите пользователя, которого хотите забанить')

    let targEmbed = new MessageEmbed()
    .setColor('RED')
    .setDescription('⛔ **Ошибка** \n Я не могу найти этого пользователя')

    let banEmbed = new MessageEmbed()
    .setDescription(`✅ ${target} забанен на сервере`)
    .setColor('GREEN')
    .addFields({
      name: 'Модератор:',
      value: `<@${author}>`,
      inline: true
    }, {
      name: 'Причина:',
      value: reason,
      inline: true
    })

    let targetBanEmbed = new MessageEmbed()
    .setDescription(`Вы были забанены на сервере **${guild}**`)
    .setColor('RED')
    .addFields({
      name:'Модератор:',
      value:`<@${author}>`,
      inline: true
    }, {
      name: 'Причина:',
      value: reason,
      inline: true
    })
    .setTimestamp()

    //check perms and bannable
    if (!msg.member.hasPermission("BAN_MEMBERS" || "ADMINISTRATOR")) return msg.channel.send(permsEmbed).then (msg.delete().catch());
    if(!args[1]) return msg.channel.send(argsEmbed).then (msg.delete().catch());
    if(!targetMember) return msg.channel.send(targEmbed).then(msg.delete().catch());
    if(targetMember.id === author) return msg.channel.send(authEmbed).then (msg.delete().catch());
    if(!targetMember.bannable) return msg.channel.send(errEmbed).then (msg.delete().catch());

    //ban
    targetMember
    .ban({reason: `${msg.author.tag}: ${reason}`})
    .then(msg.channel.send(banEmbed))
    .catch()
    msg.delete().catch();


    //dm message
    target.send(targetBanEmbed)
}
