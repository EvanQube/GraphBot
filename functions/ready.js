const Discord = require("discord.js");

module.exports = async (client) => {

  console.log(`${client.user.username} is ready !`
    client.user.setPresence({
      status: 'online',
      activity: {
        name: prefix + `help | Автор - Evan🎃#6456`,
        type: 'WATCHING'
      }
    })
  );

} 
