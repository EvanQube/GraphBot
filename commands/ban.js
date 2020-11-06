exports.run = async(client, msg, args) => {
      if (msg.member.hasPermission("BAN_MEMBERS")) {
           let reason = args.slice(1).join(' ');
           let user = msg.mentions.users.first();
           let target = user.id;
           if(!user) {user = args[0]};
           target.ban(reason);
           msg.channel.send(`<@${user.id}> был забанен!`)
        }
    }
