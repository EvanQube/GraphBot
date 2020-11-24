const Discord = require('discord.js')
const {MessageEmbed} = require('discord.js')
const cmdsModel = require("../models/cmds")
let help = {
  name: "kick",
  aliases: ['кик']
}
module.exports.help = {name:help.name, aliases: help.aliases}

module.exports.run = async (client, msg, args, Discord) => {

  let errorEmbed = new MessageEmbed()
    .setColor('RED')
    .setDescription('⛔ **Ошибка** \n Данная команда отключена на сервере')
  const data = await cmdsModel.findOne({
    GuildID: msg.guild.id
  });
  if (!data) {

    let newData = new cmdsModel({
      GuildID: msg.guild.id,
      Command: '\u200B'
    })
  const cmds = data.Command;
  if(cmds.includes(help.name) || cmds.includes(help.aliases)) return (msg.channel.send(errorEmbed));
    let author = msg.author.id;
    let target = msg.mentions.users.first() || msg.guild.members.cache.get(args[1]);
    let targetMember = msg.guild.member(target);
    let guild = msg.guild.name;

    //check reason
    let reason = args.slice(3).join(' ');
    if(!reason) {reason = 'None'}

    //embeds
    let kickPermsEmbed = new Discord.MessageEmbed()
      .setColor('RED')
      .setDescription('⛔ **Ошибка** \n У вас недостаточно прав для использования этой команды')

    let errEmbed = new Discord.MessageEmbed()
      .setColor('RED')
      .setDescription('⛔ **Ошибка** \n Я не могу кикнуть этого пользователя')

    let authEmbed = new Discord.MessageEmbed()
      .setColor('RED')
      .setDescription('⛔ **Ошибка** \n Вы не можете кикнуть сами себя')

    let argsEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription('⛔ **Ошибка** \n Укажите пользователя, которого хотите кикнуть')

    let targEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription('⛔ **Ошибка** \n Я не могу найти этого пользователя')

    let kickEmbed = new Discord.MessageEmbed()
    .setDescription(`✅ ${target} кикнут с сервера `)
    .setColor('GREEN')
    .addFields({
      name: 'Модератор:',
      value: `<@${author}>`,
      inline: true
    })

    let targetKickEmbed = new Discord.MessageEmbed()
    .setDescription(`Вы были кикнуты с сервера **${guild}**`)
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

    //check perms and kickable
    if (!msg.member.hasPermission("KICK_MEMBERS" || "ADMINISTRATOR")) return msg.channel.send(kickPermsEmbed);
    if(!args[2]) return msg.channel.send(argsEmbed).then (msg.delete().catch());
    if(!targetMember) return msg.channel.send(targEmbed).then (msg.delete().catch());
    if(targetMember.id === author) return msg.channel.send(authEmbed).then (msg.delete().catch());
    if(!targetMember.kickable) return msg.channel.send(errEmbed).then (msg.delete().catch());
    //kick
    target
    .kick({reason: `${msg.author.tag}: ${reason}`})
    .then(msg.channel.send(kickEmbed))
    .catch()

    target.send(targetKickEmbed)
    msg.delete().catch();
    }
