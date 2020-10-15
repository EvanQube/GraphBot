const fs = require('fs');
const Discord = require("discord.js");
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

prefix = "/";
client.login(process.env.token);

client.on('ready', async () => {
  console.log('Bot is ready !')
  client.user.setPresence({
    status: 'online',
    activity: {
      name: prefix + 'help | Автор - Evan🎃#6456',
      type: 'WATCHING'
    }
  })
});

client.on('message', msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'ping') {client.commands.get('ping').execute(msg, args);}
  else if (command === 'help') {client.commands.get('help').execute(msg, Discord, prefix);}
  else if (command === 'hug') {client.commands.get('hug').execute(msg, args);}
  else if (command === 'hit') {client.commands.get('hit').execute(msg, args);}
  else if (command === 'kiss') {client.commands.get('kiss').execute(msg, args);}
  else if (command === 'cry') {client.commands.get('cry').execute(msg, args);}
  else if (command === 'sleep') {client.commands.get('sleep').execute(msg, args);}
});
