module.exports = {
  name: 'ban',
  description: 'Ban',
  execute(msg, args) {
      if (msg.member.hasPermission("BAN_MEMBERS")) {
           let reason = args.slice(1).join(' ');
           let user = msg.mentions.users.first();
           let target = msg.guild.members.cache.get(user.id);
           if(!user) {user = args[0]};
           target.ban({reason: reason});
           msg.channel.send(`<@${user.id}> был забанен!`)
        }
    }
}
