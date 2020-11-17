const fs = require('fs');
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
  console.log('Bot is ready !')
  client.user.setPresence({
    status: 'online',
    activity: {
      name: prefix + `help | Автор - Evan🎃#6456`,
      type: 'WATCHING'
    }
  })
});

client.on('message', async msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

  t
      command.execute(msg, args);
      command.execute(msg, args);
      command.execute(msg, args);
      command.execute(msg, args);
      command.execute(msg, args);
      command.execute(msg, client);
      command.execute(msg);
      command.execute(msg);
      command.execute(msg);
      command.execute(msg, args);
      command.execute(msg, args);
      command.execute(msg, args);
      command.execute(msg, args);
      command.execute(msg, args);
      command.execute(msg, args);
      command.execute(msg, args);
      command.execute(msg, args);
      command.execute(msg, args);
      command.execute(msg, args);
      command.execute(msg, args);
      command.execute(msg, args);
      command.execute(msg, Discord, prefix, client);
      //Mod
      command.execute(msg, args, Discord);
      command.execute(msg, args, Discord, client);
      command.execute(msg, args, Discord);
      command.execute(msg, args, ms, Discord);
      command.execute(msg, args, ms, Discord);


      command.execute(msg, args, Discord);}catch(e){console.log(e);}
});
