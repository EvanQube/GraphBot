module.exports = {
    name: 'kick',
    description: 'Кик участника',
    execute(msg, args, reason) {
      if (msg.member.hasPermission("KICK_MEMBERS")) {
          msg.mentions.users.first().kick(reason);
        }
      }
    }
