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



  /*if(args[1] === 'mod') {
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
        const roles = modsData.Role;
          const newRole = args[2];
          if (roles === newRole) return (msg.channel.send(roleEmbed));
          if(msg.mentions.roles.first()) {
            const newRole = msg.mentions.roles.first().id;
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
        else if(!msg.mentions.roles.first()) {
          const newRole = args[2];
          let newData = new modsModel({
            GuildID: msg.guild.id,
            Role: `${newRole}`
          })

          await modsModel.findOneAndRemove({
            GuildID: msg.guild.id
          });
          newData.save();
          msg.channel.send(addEmbed);}
*/
  if (args[1] === 'rem') {
    // if(!msg.member.roles.cache.get(role)) return (msg.channel.send(permsErrEmbed));
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
      // if(!msg.member.roles.cache.get(role)) return (msg.channel.send(permsErrEmbed))
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
