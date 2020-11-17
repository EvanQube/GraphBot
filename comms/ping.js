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


module.exports = {
  name: ping,
  description: 'Ping',
  aliases: ['p'], // Optional
  callback: (message) => {
    message.reply('pong')
  }
}
