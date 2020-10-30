module.exports = {
    name: 'kick',
    description: 'Кик участника',
    execute(msg, args, reason) {
      user = msg.mentions.first();
      if (msg.member.hasPermission("KICK_MEMBERS")) {
          user.kick(reason);
        }
      }
    }
