const client = require('discord.js');

const { Handler } = require('discord.js-handler');

const handler = new Handler({
  client: new client(),
  token: '/',
  eventsFolder: './events',
  commandsFolder: './commands',
});

try {
  handler.login();
  handler.run();
} catch (e) {
  console.error(e);
}

client.login(process.env.token);








/*const fs = require('fs');
const ms = require('ms');
const Discord = require("discord.js");
const client = new Discord.Client();
const mongoose = require('mongoose');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

prefix = "/";
client.login(process.env.token);

client.on('ready', async () => {
  console.log('client is ready !')
  client.user.setPresence({
    status: 'online',
    activity: {
      name: prefix + `help | Автор - Evan🎃#6456`,
      type: 'WATCHING'
    }
  })
});

client.on('message', msg => {
  if (!msg.content.startsWith(prefix) || msg.author.client) return;

  const args = msg.content.slice(prefix.length).split(/ +/);
  const cmdName = args.shift().toLowerCase();
  const cmd = client.commands.get(cmdName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName))

  cmd.execute(msg, client);
  cmd.execute(msg, Discord, prefix, client);
  cmd.execute(msg, args);
  cmd.execute(msg, args);
  cmd.execute(msg, args);
  cmd.execute(msg, args);
  cmd.execute(msg, args);
  cmd.execute(msg, args);
  cmd.execute(msg, args);
  cmd.execute(msg, client);
  cmd.execute(msg);
  cmd.execute(msg);
  cmd.execute(msg);
  cmd.execute(msg, args);
  cmd.execute(msg, args);
  cmd.execute(msg, args);
  cmd.execute(msg, args);
  cmd.execute(msg, args);
  cmd.execute(msg, args);
  cmd.execute(msg, args);
  cmd.execute(msg, args);
  cmd.execute(msg, args);
  cmd.execute(msg, args);
  cmd.execute(msg, args);
  cmd.execute(msg, args);
  cmd.execute(msg, Discord, prefix, client);
  //Mod
  cmd.execute(msg, args, Discord);
  cmd.execute(msg, args, Discord, client);
  cmd.execute(msg, args, Discord);
  cmd.execute(msg, args, ms, Discord);
  cmd.execute(msg, args, ms, Discord);


  cmd.execute(msg, args, Discord);
}); */
