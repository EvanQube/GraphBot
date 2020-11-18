module.exports = {
  name: 'unmute',
  description: 'Unmute',
  execute(msg, args, ms, client, prefix, Discord) {
    let author = msg.author.id;
    let target = msg.mentions.users.first() || msg.guild.members.cache.get(args[0]);
    let targetMember = msg.guild.member(target);
    let guild = msg.guild.name;

    let role = msg.guild.roles.cache.find(role => role.name === 'G-Muted');

    //check reason

    //embeds
    let kickPermsEmbed = new Discord.MessageEmbed()
      .setColor('RED')
      .setDescription('⛔ **Ошибка** \n У вас недостаточно прав для использования этой команды')


    let argsEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription('⛔ **Ошибка** \n Укажите пользователя, которого хотите размутить')

    let targEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription('⛔ **Ошибка** \n Я не могу найти этого пользователя')

    let unmuteEmbed = new Discord.MessageEmbed()
    .setDescription(`✅ ${target} размучен`)
    .setColor('GREEN')
    .addFields({
      name: 'Модератор:',
      value: `<@${author}>`,
      inline: true
    })

    let unMuteEmbed = new Discord.MessageEmbed()
    .setDescription(`Вы были размучены на сервере **${guild}**`)
    .setColor('GREEN')
    .addFields({
      name:'Модератор:',
      value:`<@${author}>`,
      inline: true
    })
    .setTimestamp()

    let unMutedEmbed = new Discord.MessageEmbed()
      .setColor('RED')
      .setDescription('⛔ **Ошибка** \n Этот пользователь не замучен')

    if (!msg.member.hasPermission("MANAGE_MESSAGES" || "ADMINISTRATOR")) return msg.channel.send(kickPermsEmbed).then (msg.delete().catch());
    if(!args[0]) return msg.channel.send(argsEmbed).then (msg.delete().catch());
    if(!targetMember) return msg.channel.send(targEmbed).then (msg.delete().catch());
    if(!targetMember.roles.cache.get(role.id)) return msg.channel.send(unMutedEmbed).then (msg.delete().catch());

      targetMember.roles.remove(role.id)
      target.send(unMuteEmbed)
      msg.channel.send(unmuteEmbed)
        msg.delete().catch();
    }
  }
