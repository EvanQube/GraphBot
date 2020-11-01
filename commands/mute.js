module.exports = {
  name: 'mute',
  description: 'Мут',
  execute(msg, args, ms) {
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
      const mutedRole = message.guild.roles.cache.find(
        (role) => role.name === 'Muted'
      );
      if (!mutedRole) {
        mutedRole = message.guild.roles.create({
          data: {
            name: 'Muted',
            color: '#808080',
            permissions: {
              deny: 'SEND_MESSAGES'
            },
          }
        });
      } else if (!time) {
        target.roles.add(mutedRole);
      } else {
        target.roles.add(mutedRole);
        setTimeout(() => {
          target.roles.remove(mutedRole); // remove the role
        }, args[1])
      }
      msg.delete().catch();
    }
  }
}
