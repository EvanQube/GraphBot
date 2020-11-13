module.exports = {
  name: 'unban',
  description: 'Unban',
  execute(msg, args, Discord) {
    let author = msg.author.id;
    let target = msg.mentions.users.first() || args[0];
    let guild = msg.guild.name;

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
      .setDescription(`✅ ${target} разбанен`)
      .setColor('GREEN')
      .addFields({
        name: 'Модератор:',
        value: `<@${author}>`,
      })

      let targetUnbanEmbed = new Discord.MessageEmbed()
      .setDescription(`Вы были разбанены на сервере **${guild}**`)
      .setColor('RED')
      .addFields({
        name:'Модератор:',
        value:`<@${author}>`,
        inline: true
      })
      .setTimestamp()

    //check perms
    if (!msg.member.hasPermission("BAN_MEMBERS" || "ADMINISTRATOR")) return msg.channel.send(permsEmbed);
    if(!args[0]) return msg.channel.send(argsEmbed)
    if(!target) return msg.channel.send(targEmbed);
    //unban
    msg.guild.members.unban(target)
    .then(msg.channel.send(unbanEmbed))
    .catch()

    target.send(targetUnbanEmbed)
    msg.delete().catch();
    }
  }
