
const ms = require('ms');
const {MessageEmbed} = require('discord.js')
const cmdsModel = require("../models/cmds")
let help = {
  name: "mute",
  aliases: ['мут']
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
    let time = args[2];
    if (!time) {
      time = 'Навсегда'
    }
    let author = msg.author.id;
    let target = msg.mentions.users.first() || msg.guild.members.cache.get(args[0]);
    let targetMember = msg.guild.member(target);
    let guild = msg.guild.name;
    let role = msg.guild.roles.cache.find(role => role.name === 'G-Muted');
    if (!role) {
      role = msg.guild.roles.create({
        data: {
          name: 'G-Muted',
          color: '#000000',
          permissions: []
        }
      })
    }

    msg.guild.channels.cache.forEach((channel) => {
      channel.updateOverwrite(role, {
        SEND_MESSAGES: false,
        SPEAK: false,
        ADD_REACTIONS: false,
      });
    });

    //check reason
    let reason = args.slice(3).join(' ');
    if (!reason) {
      reason = 'None'
    }

    //embeds
    let kickPermsEmbed = new MessageEmbed()
      .setColor('RED')
      .setDescription('⛔ **Ошибка** \n У вас недостаточно прав для использования этой команды')

    let authEmbed = new MessageEmbed()
      .setColor('RED')
      .setDescription('⛔ **Ошибка** \n Вы не можете замутить сами себя')

    let argsEmbed = new MessageEmbed()
      .setColor('RED')
      .setDescription('⛔ **Ошибка** \n Укажите пользователя, которого хотите замутить')

    let targEmbed = new MessageEmbed()
      .setColor('RED')
      .setDescription('⛔ **Ошибка** \n Я не могу найти этого пользователя')

    let muteEmbed = new MessageEmbed()
      .setDescription(`✅ ${target} замучен на сервере`)
      .setColor('GREEN')
      .addFields({
        name: 'Модератор:',
        value: `<@${author}>`,
        inline: true
      }, {
        name: 'Причина:',
        value: reason,
        inline: true
      }, {
        name: 'Время:',
        value: time,
        inline: true
      })

    let targetMuteEmbed = new MessageEmbed()
      .setDescription(`Вы были замучены на сервере **${guild}**`)
      .setColor('RED')
      .addFields({
        name: 'Модератор:',
        value: `<@${author}>`,
        inline: true
      }, {
        name: 'Причина:',
        value: reason,
        inline: true
      }, {
        name: 'Время:',
        value: time,
        inline: true
      })
      .setTimestamp()

      let errMuteEmbed = new MessageEmbed()
        .setColor('RED')
        .setDescription('⛔ **Ошибка** \n Не получилось замутить \n Проверьте, правильно ли указано время')

      let timerEmbed = new MessageEmbed()
        .setColor('RED')
        .setDescription('⛔ **Ошибка** \n Я не могу замутить на такое время')

    let unMuteEmbed = new MessageEmbed()
      .setDescription(`Вы были размучены на сервере **${guild}**`)
      .setColor('GREEN')

    let mutedEmbed = new MessageEmbed()
      .setColor('RED')
      .setDescription('⛔ **Ошибка** \n Этот пользователь уже замучен')

    if (!msg.member.hasPermission("MANAGE_MESSAGES" || "ADMINISTRATOR")) return msg.channel.send(kickPermsEmbed).then(msg.delete().catch());
    if (!args[1]) return msg.channel.send(argsEmbed).then(msg.delete().catch());
    if (!targetMember) return msg.channel.send(targEmbed).then(msg.delete().catch());
    if (targetMember.id === author) return msg.channel.send(authEmbed).then(msg.delete().catch());
    if (targetMember.roles.cache.get(role.id)) return msg.channel.send(mutedEmbed).then(msg.delete().catch());

    if (time === 'Навсегда') {
      targetMember.roles.add(role.id).then(msg.channel.send(muteEmbed))
    } else {
      if(ms(args[2]) >= '2160000000') return msg.channel.send(timerEmbed).then(msg.delete().catch());

      targetMember.roles.add(role.id)

      setTimeout(() => {
          if (!targetMember.roles.cache.get(role.id)) return;
        targetMember.roles.remove(role.id).catch(e => {console.log(e)});
        target.send(unMuteEmbed)
      }, ms(args[2]))

      msg.channel.send(muteEmbed)
    }
    target.send(targetMuteEmbed)
    msg.delete().catch();
  }
