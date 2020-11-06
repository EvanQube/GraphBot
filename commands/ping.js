module.exports = {
  name: 'ping',
  description: 'ping',
  execute(msg, args) {
    let pingEmbed = {
      color: '#7CB9E8',
      description: '🏓 pong! \n' + `Пинг: ${Math.round(client.ws.ping)}`,
      timestamp: new Date(),
    }
    msg.channel.send({
      embed: pingEmbed
    })
}
}
