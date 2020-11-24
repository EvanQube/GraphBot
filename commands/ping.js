const Discord = require('discord.js')
module.exports.help = {
    name: "ping",
    aliases: ['p']
}

module.exports.run = async (client, msg, args) => {
    let pingEmbed = {
      color: '#7CB9E8',
      description: '🏓 pong! \n' + `Пинг: ${Math.round(client.ws.ping)}ms`,
      timestamp: new Date(),
    }
    msg.channel.send({
      embed: pingEmbed
    })
}
