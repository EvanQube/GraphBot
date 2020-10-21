module.exports = {
  name: 'mute',
  description: "This is a mute command!",
  execute(msg, ms, args, client) {
    const mutedRole = message.guild.roles.cache.find(
 (role) => role.name === 'mute'
);

// if there is no `Muted` role, send an error
if (!mutedRole)
 return message.channel.send('There is no Muted role on this server');
  const target = message.mentions.members.first();
  target.roles.add()
  setTimeout(() => {
  target.roles.remove(mutedRole); // remove the role
}, <time>)
        msg.delete().catch();
    }
}
