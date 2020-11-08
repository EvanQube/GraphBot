module.exports = {
  name: 'ban',
  description: 'Ban',
  execute(msg, args, Discord) {
    if (msg.member.hasPermission("BAN_MEMBERS" || "ADMINISTRATOR")) {
      let author = msg.author.id;
      let reason = args.slice(1).join(' ');
      let target = msg.mentions.users.first() || msg.guild.members.cache.get(args[0]);
      if(!target) {
        let targetEmbed = new Discord.MessageEmbed()
        .setDescription('⛔ Ошибка \n Вы не указали пользователя, которого хотите забанить')
        msg.channel.send(targetEmbed)
      }

      else if(target) {
      if(target.id === author) {
        let authEmbed = new Discord.MessageEmbed()
        .setDescription('⛔ **Ошибка** \n Вы не можете забанить сами себя')
        msg.channel.send(authEmbed)
      }
      else {target.ban({
        reason: `<@${author}>:` + reason
      }).catch(err => {
        let errEmbed = new Discord.MessageEmbed()
        .setDescription('⛔ **Ошибка** \n Я не могу забанить этого пользователя')
        msg.channel.send(errEmbed)
      });
      let banEmbed = new Discord.MessageEmbed()
        .setDescription('✅ Бан выдан')
        .addFields({
          name: 'Модератор:',
          value: `<@${author}>`
        }, {
          name: 'Забанен:',
          value: target
        })
      msg.channel.send(banEmbed)
    }}
    else {
      let permsEmbed = new Discord.MessageEmbed()
      .setDescription('⛔ **Ошибка** \n У вас недостаточно прав для использования этой команды')
      msg.channel.send(permsEmbed)}
    }
    msg.delete().catch();
  }
}
