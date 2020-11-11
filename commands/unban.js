module.exports = {
  name: 'unban',
  description: 'Unban',
  execute(msg, args, Discord) {
    let author = msg.author.id;
    let target = msg.mentions.users.first() || msg.guild.members.cache.get(args[0]);
    let targetMember = msg.guild.member(target);
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
      .setDescription('✅ Разбан успешен')
      .setColor('GREEN')
      .addFields({
        name: 'Модератор:',
        value: `<@${author}>`,
      }

    //check perms
    if (!msg.member.hasPermission("BAN_MEMBERS" || "ADMINISTRATOR")) return msg.channel.send(permsEmbed);
    if(!args[0]) return msg.channel.send(argsEmbed)
    if(!targetMember) return msg.channel.send(targEmbed);
    //unban
    msg.guild.members.unban(targetMember)
    .then(msg.channel.send(unbanEmbed))
    .catch()

    msg.delete().catch();
    }
  }
