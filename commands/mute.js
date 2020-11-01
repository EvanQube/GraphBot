module.exports = {
  name: 'mute',
  description: 'Мут',
  execute(msg, args) {
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
      // or, if you can't get the id:

      // if there is no `Muted` role, send an error
      if (!mutedRole) {
        const mutedRole = message.guild.roles.create({
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
        setTimeout(() => {
          target.roles.remove(mutedRole); // remove the role
        }, < time > )
      }
      msg.delete().catch();
    }
  }
}