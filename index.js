const Discord = require("discord.js");
const client = new Discord.Client();
prefix = "/";
client.login(process.env.token);

client.on('ready', async() => {
  console.log('Bot is ready !')
  client.user.setPresence({
    status: 'online',
    activity: {
        name: '/help | Автор - Evan🎃#6456',
        type: 'WATCHING'
    }
})
});
