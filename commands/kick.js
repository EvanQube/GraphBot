module.exports = {
    name: 'kick',
    description: 'Кик участника',
    execute(msg, args, reason) {
      const member = msg.mentions.members.first();
      if (msg.member.hasPermission("KICK_MEMBERS")) {
          member.kick(reason);
        }
      }
    }
