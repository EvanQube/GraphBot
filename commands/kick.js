module.exports = {
    name: 'kick',
    description: 'Кик участника',
    execute(msg, args, reason) {
      let user = msg.mentions.users.first()
      if (msg.member.hasPermission("KICK_MEMBERS")) {
           user.kick(reason);
        }
      }
    }
