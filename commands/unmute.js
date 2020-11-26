

const {MessageEmbed} = require('discord.js')
const cmdsModel = require("../models/cmds")
let help = {
  name: "unmute",
  aliases: ['анмут', 'размут']
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
    let author = msg.author.id;
    let target = msg.mentions.users.first() || msg.guild.members.cache.get(args[1]);
    let targetMember = msg.guild.member(target);
    let guild = msg.guild.name;

    let role = msg.guild.roles.cache.find(role => role.name === 'G-Muted');

    //check reason

    //embeds
    let kickPermsEmbed = new MessageEmbed()
      .setColor('RED')
      .setDescription('⛔ **Ошибка** \n У вас недостаточно прав для использования этой команды')


    let argsEmbed = new MessageEmbed()
    .setColor('RED')
    .setDescription('⛔ **Ошибка** \n Укажите пользователя, которого хотите размутить')

    let targEmbed = new MessageEmbed()
    .setColor('RED')
    .setDescription('⛔ **Ошибка** \n Я не могу найти этого пользователя')

    let unmuteEmbed = new MessageEmbed()
    .setDescription(`✅ ${target} размучен`)
    .setColor('GREEN')
    .addFields({
      name: 'Модератор:',
      value: `<@${author}>`,
      inline: true
    })

    let unMuteEmbed = new MessageEmbed()
    .setDescription(`Вы были размучены на сервере **${guild}**`)
    .setColor('GREEN')
    .addFields({
      name:'Модератор:',
      value:`<@${author}>`,
      inline: true
    })
    .setTimestamp()

    let unMutedEmbed = new MessageEmbed()
      .setColor('RED')
      .setDescription('⛔ **Ошибка** \n Этот пользователь не замучен')

    if (!msg.member.hasPermission("MANAGE_MESSAGES" || "ADMINISTRATOR")) return msg.channel.send(kickPermsEmbed).then (msg.delete().catch());
    if(!args[1]) return msg.channel.send(argsEmbed).then (msg.delete().catch());
    if(!targetMember) return msg.channel.send(targEmbed).then (msg.delete().catch());
    if(!targetMember.roles.cache.get(role.id)) return msg.channel.send(unMutedEmbed).then (msg.delete().catch());

      targetMember.roles.remove(role.id)
      target.send(unMuteEmbed)
      msg.channel.send(unmuteEmbed)
        msg.delete().catch();
    }
