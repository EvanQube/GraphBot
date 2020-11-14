module.exports = {
  name: 'mute',
  description: 'Mute',
  execute(msg, args, ms, Discord) {
    let time = args[1];
    let author = msg.author.id;
    let target = msg.mentions.users.first() || msg.guild.members.cache.get(args[0]);
    let targetMember = msg.guild.member(target);
    let guild = msg.guild.name;

    let role = msg.guild.roles.cache.find(role => role.name === 'G-Muted');
    if(!role) {
        role = msg.guild.roles.create({
        data: {
          name: 'G-Muted',
          color: '#000000',
          permissions: []
        }
      })
    }

    msg.guild.channels.cache.forEach((channel) => {
      channel.updateOverwrite(role, {
        SEND_MESSAGES: false,
        SPEAK: false,
      });
    });

    //check reason
    let reason = args.slice(1).join(' ');
    if(!reason) {reason = 'None'}

    //embeds
    let kickPermsEmbed = new Discord.MessageEmbed()
      .setColor('RED')
      .setDescription('⛔ **Ошибка** \n У вас недостаточно прав для использования этой команды')

    let authEmbed = new Discord.MessageEmbed()
      .setColor('RED')
      .setDescription('⛔ **Ошибка** \n Вы не можете замутить сами себя')

    let argsEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription('⛔ **Ошибка** \n Укажите пользователя, которого хотите замутить')

    let targEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription('⛔ **Ошибка** \n Я не могу найти этого пользователя')

    let muteEmbed = new Discord.MessageEmbed()
    .setDescription(`✅ ${target} замучен на сервере`)
    .setColor('GREEN')
    .addFields({
      name: 'Модератор:',
      value: `<@${author}>`,
      inline: true
    }, {
      name: 'Время:',
      value: time,
      inline: true
    })

    let targetMuteEmbed = new Discord.MessageEmbed()
    .setDescription(`Вы были замучены на сервере **${guild}**`)
    .setColor('RED')
    .addFields({
      name:'Модератор:',
      value:`<@${author}>`,
      inline: true
    }, {
      name: 'Причина:',
      value: reason,
      inline: true
    }, {
      name: 'Время:',
      value: time,
      inline: true
    })
    .setTimestamp()

    if (!msg.member.hasPermission("MANAGE_MESSAGES" || "ADMINISTRATOR")) return msg.channel.send(kickPermsEmbed);
    if(!args[0]) return msg.channel.send(argsEmbed).then (msg.delete().catch());
    if(!targetMember) return msg.channel.send(targEmbed).then (msg.delete().catch());
    if(targetMember.id === author) return msg.channel.send(authEmbed).then (msg.delete().catch());

    if(!time) {
      targetMember.roles.add(role.id)
    } else {
      targetMember.roles.add(role.id)
      setTimeout(() => {
      targetMember.roles.remove(role.id)
    }, ms(args[1]))
    }
    target.send(targetMuteEmbed)
        msg.delete().catch();
    }
  }
