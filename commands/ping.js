module.exports = {
  name: 'ping',
  description: 'ping',
  execute(msg, args, ms, client, prefix, Discord) {
    let pingEmbed = {
      color: '#7CB9E8',
      description: '🏓 pong! \n' + `Пинг: ${Math.round(client.ws.ping)}ms`,
      timestamp: new Date(),
    }
    msg.channel.send({
      embed: pingEmbed
    })
}
}
