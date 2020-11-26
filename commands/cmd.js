const cmdsModel = require("../models/cmds")
const modsModel = require("../models/modrole")
const {MessageEmbed} = require('discord.js')
module.exports.help = {
  name: "cmd",
  aliases: ['command']}

module.exports.run = async (client, msg, args, Discord) => {
  const commdata = await cmdsModel.findOne({
    GuildID: msg.guild.id
  });
  const modsData = await modsModel.findOne({
    GuildID: msg.guild.id
  });
  if (!modsData) {
    let newData = new modsModel({
      GuildID: msg.guild.id,
      Role: '123'
    })
  newData.save()}
  const cmd = args[2];
  const role = modsData.Role;
   if(!msg.member.roles.cache.get(role)) return (msg.channel.send(permsErrEmbed));
  //embeds
  let remEmbed = new MessageEmbed()
    .setDescription(`✅ Команда **${cmd}** запрещена на сервере`)
    .setColor('GREEN')

    let permsErrEmbed = new MessageEmbed()
      .setColor('RED')
      .setDescription('⛔ **Ошибка** \n У вас недостаточно прав для использования этой команды \n У вас должна быть модерирующая роль')

      let argsErrEmbed = new MessageEmbed()
        .setColor('RED')
        .setDescription('⛔ **Ошибка** \n Укажите роль, которую хотите разрешить/запретить')


  let addEmbed = new MessageEmbed()
    .setDescription(`✅ Команда **${cmd}** разрешена на сервере`)
    .setColor('GREEN')

  let cmdEmbed = new MessageEmbed()
    .setColor('RED')
    .setDescription('⛔ **Ошибка** \n Эта команда не запрещена')



if(!args[1]) return (msg.channel.send(argsErrEmbed));
  else if (args[1] === 'rem') {
    if (!commdata) {

      let cmdsData = new cmdsModel({
        GuildID: msg.guild.id,
        Command: '\u200B'
      })
      cmdsData.save();
    }
    const cmds = cmdsModel.Command;
    if (!commdata.Command) {
      const cmds = 'None'
    };

    let cmdsData = new cmdsModel({
      GuildID: msg.guild.id,
      Command: `${cmds} ${cmd} `
    })
    await cmdsModel.findOneAndRemove({
      GuildID: msg.guild.id
    });
    cmdsData.save();
    msg.channel.send(remEmbed);
  } else if (args[1] === 'add') {
    if (!commdata) {

      let cmdsData = new cmdsModel({
        GuildID: msg.guild.id,
        Command: '\u200B'
      })
      cmdsData.save();
    }
    const cmds = commdata.Command;
    if (!commdata.Command) {
      const cmds = 'None'
    };
    if (cmds === 'None') return {cmdEmbed}
    const cmdAdd = cmds.replace(`${cmd}`, '')
    let cmdsData = new cmdsModel({
      GuildID: msg.guild.id,
      Command: `${cmdAdd}`
    })
    await cmdsModel.findOneAndRemove({
      GuildID: msg.guild.id
    });
    cmdsData.save();
    msg.channel.send(addEmbed);
}
}
