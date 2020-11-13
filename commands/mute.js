module.exports = {
  name: 'mute',
  description: 'Mute',
  execute(msg, args, Discord, ms) {

    const time = args[1];
    const target = msg.mentions.users.first();
    const mutedRole = msg.guild.roles.cache.find(
      (role) => role.name === 'Muted'
    );
    if (!mutedRole) {
      mutedRole = msg.guild.roles.create({
        data: {
          name: 'Muted',
          color: '#808080',
          permissions: {
            deny: 'SEND_MESSAGES'
          },
        }
      });
    }

    let errorEmbed = new Discord.MessageEmbed()
      .setColor('RED')
      .setDescription('⛔ Ошибка\n' + 'Вы должны упомянуть пользователя, которого хотите замутить.')


    if (!msg.mentions.users.size) return msg.channel.send({embed: errorEmbed});
    if (!time) {
        target.roles.add(mutedRole);
      } else {
        target.roles.add(mutedRole);
        setTimeout(() => {
          target.roles.remove(mutedRole);
        }, time)
      }
          msg.delete().catch();
    }
  }
