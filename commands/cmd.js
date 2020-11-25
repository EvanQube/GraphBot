const cmdsModel = require("../models/cmds")
const modsModel = require("../models/modrole")
const {MessageEmbed} = require('discord.js')
module.exports.help = {
  name: "cmd",
  aliases: ['command']}

module.exports.run = async (client, msg, args, Discord) => {
  const data = await cmdsModel.findOne({
    GuildID: msg.guild.id
  });
  const modsData = await modsModel.findOne({
    GuildID: msg.guild.id
  });
  const role = modsData.Role;

  const cmd = args[2];
  //embeds
  let remEmbed = new MessageEmbed()
    .setDescription(`✅ Команда **${cmd}** запрещена на сервере`)
    .setColor('GREEN')

    let permsErrEmbed = new MessageEmbed()
      .setColor('RED')
      .setDescription('⛔ **Ошибка** \n У вас недостаточно прав для использования этой команды \n У вас должна быть модерирующая роль')


  let addEmbed = new MessageEmbed()
    .setDescription(`✅ Команда **${cmd}** разрешена на сервере`)
    .setColor('GREEN')

  let cmdEmbed = new MessageEmbed()
    .setColor('RED')
    .setDescription('⛔ **Ошибка** \n Эта команда не запрещена')

    const cmds = data.Command;
    if (!cmds) {
      const cmds = 'None'
    };

  if(!msg.member.roles.cache.get(role)) return (msg.channel.send(permsErrEmbed))

  if(args[1] === 'mod') {
      let permsEmbed = new MessageEmbed()
        .setColor('RED')
        .setDescription('⛔ **Ошибка** \n У вас недостаточно прав для использования этой команды \n У вас должны быть права **администратора**')
      if (!msg.member.hasPermission('ADMINISTRATOR')) return (msg.channel.send(permsEmbed))

      let addEmbed = new MessageEmbed()
        .setDescription(`✅ Модерирующая роль добавлена`)
        .setColor('GREEN')

      let roleEmbed = new MessageEmbed()
        .setColor('RED')
        .setDescription('⛔ **Ошибка** \n Эта роль уже добавлена')
      if (!modsData) {
        let newData = new modsModel({
          GuildID: msg.guild.id,
          Role: '\u200B'
        })
      newData.save()}
      const user = msg.mentions.roles.first();
        const roles = modsData.Role;
          const newRole = user.id || args[2];
          if (roles === newRole) return (msg.channel.send(roleEmbed));

          let newData = new modsModel({
            GuildID: msg.guild.id,
            Role: `${newRole}`
          })

          await modsModel.findOneAndRemove({
            GuildID: msg.guild.id
          });
          newData.save();
          msg.channel.send(addEmbed);}

  if (args[1] === 'rem') {
    if (!data) {

      let newData = new cmdsModel({
        GuildID: msg.guild.id,
        Command: '\u200B'
      })
      newData.save();
    }

    let newData = new cmdsModel({
      GuildID: msg.guild.id,
      Command: `${cmds} ${cmd} `
    })
    await cmdsModel.findOneAndRemove({
      GuildID: msg.guild.id
    });
    newData.save();
    msg.channel.send(remEmbed);
  } else if (args[1] === 'add') {
    if (!data) {

      let newData = new cmdsModel({
        GuildID: msg.guild.id,
        Command: '\u200B'
      })
      newData.save();
    }
    if (cmds === 'None') return {cmdEmbed}
    const cmdAdd = cmds.replace(`${cmd}`, '')
    let newData = new cmdsModel({
      GuildID: msg.guild.id,
      Command: `${cmdAdd}`
    })
    await cmdsModel.findOneAndRemove({
      GuildID: msg.guild.id
    });
    newData.save();
    msg.channel.send(addEmbed);
}
}
