module.exports = {
  description: 'Ping'
  callback: (message) => {
    let pingEmbed = {
      color: '#7CB9E8',
      description: '🏓 pong! \n' + `Пинг: ${Math.round(client.ws.ping)}`,
      timestamp: new Date(),
    }
    message.channel.send({
      embed: pingEmbed
    })
  }
}
