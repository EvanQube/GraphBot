const cmdsModel = require("../models/cmds")
const {MessageEmbed} = require('discord.js')
module.exports.help = {
  name: "cmd",
  aliases: ['command']
}

module.exports.run = async (client, msg, args, Discord) => {

  let permsEmbed = new MessageEmbed()
    .setColor('RED')
    .setDescription('⛔ **Ошибка** \n У вас недостаточно прав для использования этой команды \n У вас должна быть модерирующая роль (G-Mod)')

  let role = msg.guild.roles.cache.find(role => role.name === 'G-Mod');
  if (!role) {
    role = msg.guild.roles.create({
      data: {
        name: 'G-Mod',
        color: '#000000',
        permissions: []
      }
    })
  }
let author = msg.guild.members.cache.get(msg.author.id);
if(!author.roles.cache.get(role.id)) return (msg.channel.send(permsEmbed))

  const data = await cmdsModel.findOne({
    GuildID: msg.guild.id
  });

  const cmd = args[2];
  //embeds
  let remEmbed = new MessageEmbed()
    .setDescription(`✅ Команда **${cmd}** запрещена на сервере`)
    .setColor('GREEN')

  let addEmbed = new MessageEmbed()
    .setDescription(`✅ Команда **${cmd}** разрешена на сервере`)
    .setColor('GREEN')

  let cmdEmbed = new MessageEmbed()
    .setColor('RED')
    .setDescription('⛔ **Ошибка** \n Эта команда не запрещена')

    if(data){const cmds = data.Command}

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
