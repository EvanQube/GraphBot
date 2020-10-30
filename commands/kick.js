module.exports = {
    name: 'kick',
    description: 'Кик участника',
    execute(msg, args) {
      user = msg.mentions.first() || args[0];
      if (msg.member.hasPermission("KICK_MEMBERS")) {
          user.kick;
        }
      }
    }
