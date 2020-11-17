/* module.exports = {
  name: 'ping',
  description: 'ping',
  execute(msg, client) {
    let pingEmbed = {
      color: '#7CB9E8',
      description: '🏓 pong! \n' + `Пинг: ${Math.round(client.ws.ping)}ms`,
      timestamp: new Date(),
    }
    msg.channel.send({
      embed: pingEmbed
    })
}
} */


const Discord = require('discord.js')
module.exports.help = {
    name: "ping", //Name of the command
    aliases: ['p'] // Any Aliases you want for the command (If you don't want any just ignore this.)
}

module.exports.run = async (client, msg, args) => {
    //Code for Command (This will be ran once the command is called.)
    msg.reply('Pong!')
}
