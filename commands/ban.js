module.exports = {
  name: 'ban',
  description: 'Ban',
  execute(msg, args, Discord) {
    if (msg.member.hasPermission("BAN_MEMBERS" || "ADMINISTRATOR")) {
      let author = msg.author.id;
      let reason = args.slice(1).join(' ');
      let target = msg.mentions.users.first() || msg.guild.members.cache.get(args[0]);
      let targetMember = msg.guild.member(target);
      if (!target) {
        let targetEmbed = new Discord.MessageEmbed()
        .setColor('RED')
          .setDescription('⛔ **Ошибка** \n Вы не указали пользователя, которого хотите забанить \n Или этого пользователся нет на сервере')
        msg.channel.send(targetEmbed)
      } else if (target) {
        if (target.id === author) {
          let authEmbed = new Discord.MessageEmbed()
          .setColor('RED')
            .setDescription('⛔ **Ошибка** \n Вы не можете забанить сами себя')
          msg.channel.send(authEmbed)
        } else {
          targetMember
            .ban({
              reason: `${author.tag}:` + reason
            })
            .then(() => {
              let banEmbed = new Discord.MessageEmbed()
                .setDescription('✅ Бан выдан')
                .setColor('GREEN')
                .addFields({
                  name: 'Модератор:',
                  value: `<@${author}>`,
                  inline: true
                }, {
                  name: 'Забанен:',
                  value: target,
                  inline: true
                }, {
                  name: 'Причина:',
                  value: reason
                })
                msg.channel.send(banEmbed)
            })
            .catch(err => {
              let errEmbed = new Discord.MessageEmbed()
              .setColor('RED')
                .setDescription('⛔ **Ошибка** \n Я не могу забанить этого пользователя')
              msg.channel.send(errEmbed)
            });

        }
      }
    }
    else {
      let permsEmbed = new Discord.MessageEmbed()
      .setColor('RED')
        .setDescription('⛔ **Ошибка** \n У вас недостаточно прав для использования этой команды')
      msg.channel.send(permsEmbed)
    }
    msg.delete().catch();
  }
}
