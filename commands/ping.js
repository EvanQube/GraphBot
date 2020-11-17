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


const { CommandListener } = require('discord.js-handler');

module.exports = class PingCommand extends CommandListener {
  constructor() {
    const parameters = {
      aliases: ['ping', 'pong'],
      listener: async ({ client, message }) => {
        try {
          await message.reply(`Pong! :ping_pong: ${Math.round(client.ws.ping)}ms`);
          await message.delete();
        } catch (e) {
          console.error(e);
        }
      },
    };
    super(parameters);
  }
};
