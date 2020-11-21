const Discord = require('discord.js')
module.exports.help = {
    name: "unban",
    aliases: ['разбан', 'анбан']
}

module.exports.run = async (client, msg, args) => {
    let author = msg.author.id;
    let target = args[1];
    let targetMember = client.users.cache.get(args[1]);
    let guild = msg.guild.name;
    let channel = msg.channel;
    let invite = msg.channel.createInvite({
  maxAge: 86400000, //1 day
  maxUses: 0,
});

    //embeds
    let permsEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription('⛔ **Ошибка** \n У вас недостаточно прав для использования этой команды')

    let argsEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription('⛔ **Ошибка** \n Укажите пользователя, которого хотите разбанить')

    let targEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription('⛔ **Ошибка** \n Я не могу найти этого пользователя \n Возможно он не забанен')

    let unbanEmbed = new Discord.MessageEmbed()
      .setDescription(`✅ <@${target}> разбанен`)
      .setColor('GREEN')
      .addFields({
        name: 'Модератор:',
        value: `<@${author}>`,
      })

      let targetUnbanEmbed = new Discord.MessageEmbed()
      .setDescription(`Вы были разбанены на сервере **${guild}**`)
      .setColor('GREEN')
      .addFields({
        name:'Модератор:',
        value:`<@${author}>`,
        inline: true
      }, {
        name:'Ссылка (действительна 24 часа):',
        value:`discord.gg/${invite.code}`,
        inline: true
      })
      .setTimestamp()

    //check perms
    if (!msg.member.hasPermission("BAN_MEMBERS" || "ADMINISTRATOR")) return msg.channel.send(permsEmbed);
    if(!args[1]) return msg.channel.send(argsEmbed)
    if(!target) return msg.channel.send(targEmbed);
    //unban
    msg.guild.members.unban(target)
    .then(msg.channel.send(unbanEmbed))
    .catch()

    targetMember.send(targetUnbanEmbed)
    msg.delete().catch();
    }
