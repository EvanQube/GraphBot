module.exports = {
  name: 'mute',
  description: 'Мут',
  execute(msg) {
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
      const mutedRole = message.guild.roles.cache.find(
        (role) => role.name === 'Muted'
      );

      // if there is no `Muted` role, send an error
      if (!mutedRole)
        return message.channel.send('There is no Muted role on this server');
      msg.delete().catch();
    }
  }
}
