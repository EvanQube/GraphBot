module.exports = {
  name: 'ban',
  description: 'Ban',
  execute(msg, args, Discord) {
    let author = msg.author.id;
    let reason = args.slice(1).join(' ');
    let target = msg.mentions.users.first() || msg.guild.members.cache.get(args[0]);
    let targetMember = msg.guild.member(target);
    //embeds
    let permsEmbed = new Discord.MessageEmbed()
      .setColor('RED')
      .setDescription('⛔ **Ошибка** \n У вас недостаточно прав для использования этой команды')

    let errEmbed = new Discord.MessageEmbed()
      .setColor('RED')
      .setDescription('⛔ **Ошибка** \n Я не могу забанить этого пользователя')

    let authEmbed = new Discord.MessageEmbed()
      .setColor('RED')
      .setDescription('⛔ **Ошибка** \n Вы не можете забанить сами себя')

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
      })

      let argsEmbed = new Discord.MessageEmbed()
      .setColor('RED')
      .setDescription('⛔ **Ошибка** \n Укажите пользователя, которого хотите забанить')

      let targEmbed new Discord.MessageEmbed()
      .setColor('RED')
      .setDescription('⛔ **Ошибка** \n Я не могу найти этого пользователя')

    //check perms and bannable
    if (!msg.member.hasPermission("BAN_MEMBERS" || "ADMINISTRATOR")) return msg.channel.send(permsEmbed);
    if(!targetMember.bannable) return msg.channel.send(errembed);
    if(target.id === author) return msg.channel.send(authEmbed);
    if(!args) return msg.channel.send(argsEmbed);
    if(!targetMember) return msg.channel.send(targEmbed)

    targetMember
    .ban({reason: reason})
    .then(msg.channel.send(banEmbed))
    .catch(err => {
      console.log()
    })



      /*if(!targetMember.bannable) return msg.channel.send(errEmbed);
      if (targetMember) {
        if (target.id === author) {
          let authEmbed = new Discord.MessageEmbed()
            .setColor('RED')
            .setDescription('⛔ **Ошибка** \n Вы не можете забанить сами себя')
          msg.channel.send(authEmbed)
        } else {
          targetMember
            .ban({
              reason: `${author}:` + reason
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
                })
              msg.channel.send(banEmbed)
            })
            .catch(err => {
                let targetEmbed = new Discord.MessageEmbed()
                  .setColor('RED')
                  .setDescription('⛔ **Ошибка** \n Вы не указали пользователя, которого хотите забанить \n Или этого пользователся нет на сервере')
                msg.channel.send(targetEmbed)
              });

        }
      } */
      msg.delete().catch();
    }
}
