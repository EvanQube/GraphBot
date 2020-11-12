module.exports = {
  name: 'mute',
  description: 'Mute',
  execute(msg, args, Discord, ms) {
    if (!msg.mentions.users.size) {
      let errorEmbed = {
        color: 'RED',
        description: '⛔ Ошибка\n' + 'Вы должны упомянуть пользователя, которого хотите замутить.',
      }
      msg.channel.send({
        embed: errorEmbed
      })
    } else {
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
      } else if (!time) {
        target.role.add(mutedRole);
      } else {
        target.role.add(mutedRole);
        setTimeout(() => {
          target.roles.remove(mutedRole);
        }, args[1])
      }
    }
    msg.delete().catch();
  }
}
