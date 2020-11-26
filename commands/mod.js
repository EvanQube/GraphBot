const modsModel = require("../models/modrole")
const {
  MessageEmbed
} = require('discord.js')
module.exports.help = {
  name: "mod",
  aliases: ['modcmd']
}

module.exports.run = async (client, msg, args, Discord) => {
  const modsData = await modsModel.findOne({
    GuildID: msg.guild.id
  });
  if (!modsData) {
    let newData = new modsModel({
      GuildID: msg.guild.id,
      Role: '123'
    })
    newData.save()
  }

  let permsEmbed = new MessageEmbed()
    .setColor('RED')
    .setDescription('⛔ **Ошибка** \n У вас недостаточно прав для использования этой команды \n У вас должны быть права **администратора**')
  if (!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send(permsEmbed).then(msg.delete().catch());


  let roleErrEmbed = new MessageEmbed()
    .setColor('RED')
    .setDescription('⛔ **Ошибка** \n Я не могу найти эту роль')


  let addEmbed = new MessageEmbed()
    .setDescription(`✅ Модерирующая роль добавлена`)
    .setColor('GREEN')

  let roleEmbed = new MessageEmbed()
    .setColor('RED')
    .setDescription('⛔ **Ошибка** \n Эта роль уже добавлена')
  const roles = modsData.Role;
  const newRole = args[1];
  if (roles === newRole) return (msg.channel.send(roleEmbed));
  if (msg.mentions.roles.first()) {
    const newRole = msg.mentions.roles.first().id;
    if (!msg.guild.roles.cache.find(role => role.id === newRole)) return (msg.channel.send(roleErrEmbed)).then(msg.delete().catch());
    let newData = new modsModel({
      GuildID: msg.guild.id,
      Role: `${newRole}`
    })

    await modsModel.findOneAndRemove({
      GuildID: msg.guild.id
    });
    newData.save();
    msg.channel.send(addEmbed);
  } else if (!msg.mentions.roles.first()) {
    const newRole = args[1];
    if (!msg.guild.roles.cache.find(role => role.id === newRole)) return (msg.channel.send(roleErrEmbed)).then(msg.delete().catch());
    let newData = new modsModel({
      GuildID: msg.guild.id,
      Role: `${newRole}`
    })

    await modsModel.findOneAndRemove({
      GuildID: msg.guild.id
    });
    newData.save();
    msg.channel.send(addEmbed);
  }
  msg.delete().catch()
}
