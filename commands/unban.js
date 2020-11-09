module.exports = {
  name: 'unban',
  description: 'Unban',
  execute(msg, args, Discord) {
    if (msg.member.hasPermission("BAN_MEMBERS" || "ADMINISTRATOR")) {
      let author = msg.author.id;
      let reason = args.slice(1).join(' ');
      let target = msg.mentions.users.first() || msg.guild.members.cache.get(args[0]);
      let targetMember = msg.guild.member(target);
      if (!target) {
        let targetEmbed = new Discord.MessageEmbed()
        .setColor('RED')
          .setDescription('⛔ **Ошибка** \n Вы не указали пользователя, которого хотите разбанить \n Или этого пользователся нет на сервере')
        msg.channel.send(targetEmbed)
      } else if (target) {
            msg.guild.members.unban(targetMember, reason)
            .then(() => {
              let unbanEmbed = new Discord.MessageEmbed()
                .setDescription('✅ Разбан успешен')
                .setColor('GREEN')
                .addFields({
                  name: 'Модератор:',
                  value: `<@${author}>`,
                  inline: true
                }, {
                  name: 'Разбанен:',
                  value: target,
                  inline: true
                })
                msg.channel.send(unbanEmbed)
            })
            .catch(err => {
              let errEmbed = new Discord.MessageEmbed()
              .setColor('RED')
                .setDescription('⛔ **Ошибка** \n Я не могу разбанить этого пользователя \n Возможно он не забанен')
              msg.channel.send(errEmbed)
            });}
            else {
              let permsEmbed = new Discord.MessageEmbed()
              .setColor('RED')
                .setDescription('⛔ **Ошибка** \n У вас недостаточно прав для использования этой команды')
              msg.channel.send(permsEmbed)
            }
      }
      msg.delete().catch();
    }
  }
}
