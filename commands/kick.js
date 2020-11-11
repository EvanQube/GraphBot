module.exports = {
  name: 'kick',
  description: 'Kick',
  execute(msg, args, Discord) {
    let author = msg.author.id;
    let reason = args.slice(1).join(' ');
    let target = msg.mentions.users.first() || msg.guild.members.cache.get(args[0]);
    let targetMember = msg.guild.member(target);
    //embeds
    let kickPermsEmbed = new Discord.MessageEmbed()
      .setColor('RED')
      .setDescription('⛔ **Ошибка** \n У вас недостаточно прав для использования этой команды')

    let errEmbed = new Discord.MessageEmbed()
      .setColor('RED')
      .setDescription('⛔ **Ошибка** \n Я не могу кикнуть этого пользователя')

    let authEmbed = new Discord.MessageEmbed()
      .setColor('RED')
      .setDescription('⛔ **Ошибка** \n Вы не можете кикнуть сами себя')

    let argsEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription('⛔ **Ошибка** \n Укажите пользователя, которого хотите кикнуть')

    let targEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription('⛔ **Ошибка** \n Я не могу найти этого пользователя')

    let kickEmbed = new Discord.MessageEmbed()
    .setDescription(`✅ ${target} кикнут с сервера`)
    .setColor('GREEN')
    .addFields({
      name: 'Модератор:',
      value: `<@${author}>`,
      inline: true
    })

    //check perms and kickable
    if (!msg.member.hasPermission("KICK_MEMBERS" || "ADMINISTRATOR")) return msg.channel.send(kickPermsEmbed);
    if(!args[0]) return msg.channel.send(argsEmbed).then (msg.delete().catch());
    if(!targetMember) return msg.channel.send(targEmbed).then (msg.delete().catch());
    if(targetMember.id === author) return msg.channel.send(authEmbed).then (msg.delete().catch());
    if(!targetMember.kickable) return msg.channel.send(errEmbed).then (msg.delete().catch());
    //kick
    target
    .kick({reason: `${msg.author.tag}: ${reason}`})
    .then(msg.channel.send(kickEmbed))
    .catch()

    msg.delete().catch();
    }
}
