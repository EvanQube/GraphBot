module.exports = {
  name: 'ban',
  description: 'Ban',
  execute(msg, args) {
      if (msg.member.hasPermission("BAN_MEMBERS")) {
           let reason = args.slice(1).join(' ');
           let target = msg.mentions.users.first();
           let targetMember = msg.guild.members.cache.get(target.id);
           if(!user) {user = args[0]};
           targetMember.ban({reason: reason});
           msg.channel.send(`<@${user.id}> был забанен!`)
        }
    }
}
