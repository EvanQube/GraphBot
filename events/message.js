const { EventListener } = require('discord.js-handler');

module.exports = class MessageEvent extends EventListener {
  constructor() {
    super({
      event: 'message',
      listener: async ({ handler }, message) => {
        try {
          await handler.importCommands('/', message);

          await message.react('💡');
        } catch (e) {
          console.error(e);
        }
      },
    });
  }
};
