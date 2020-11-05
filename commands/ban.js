module.exports = {
    name: 'ban',
    description: 'BAN',
    execute(msg, args) {
      if (msg.member.hasPermission("BAN_MEMBERS")) {
           let reason = args.slice(1).join(' ');
           let user = msg.mentions.users.first();
           if(!user) {user = args[0]};
           user.ban(reason);
           msg.channel.send(`<@${user.id}> был забанен!`)
        }
      }
    }
