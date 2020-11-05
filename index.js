const fs = require('fs');
const ms = require('ms');
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
      name: prefix + `help | Автор - Evan🎃#6456`,
      type: 'WATCHING'
    }
  })
});

client.on('message', msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'ping') {client.commands.get('ping').execute(msg, client);}
  else if (command === 'help') {client.commands.get('help').execute(msg, Discord, prefix, client);}
  else if (command === 'hug') {client.commands.get('hug').execute(msg, args);}
  else if (command === 'hit') {client.commands.get('hit').execute(msg, args);}
  else if (command === 'kiss') {client.commands.get('kiss').execute(msg, args);}
  else if (command === 'cry') {client.commands.get('cry').execute(msg, args);}
  else if (command === 'sleep') {client.commands.get('sleep').execute(msg, args);}
  else if (command === 'pat') {client.commands.get('pat').execute(msg, args);}
  else if (command === 'laugh') {client.commands.get('laugh').execute(msg, args);}
  else if (command === 'invite') {client.commands.get('invite').execute(msg);}
  else if (command === 'kill') {client.commands.get('kill').execute(msg);}
  else if (command === 'shy') {client.commands.get('shy').execute(msg);}
  else if (command === 'sad') {client.commands.get('sad').execute(msg);}
  else if (command === 'kick') {client.commands.get('kick').execute(msg, args);}
  else if (command === 'sorry') {client.commands.get('sorry').execute(msg, args);}
  else if (command === 'mute') {client.commands.get('mute').execute(msg, args, ms);} //mute
  else if (command === 'ban') {client.commands.get('ban').execute(msg, args);} //ban
  else if (command === 'anger') {client.commands.get('anger').execute(msg, args);}
  else if (command === 'bite') {client.commands.get('bite').execute(msg, args);}
  else if (command === 'coffee') {client.commands.get('coffee').execute(msg, args);}
  else if (command === 'five') {client.commands.get('five').execute(msg, args);}
  else if (command === 'hand') {client.commands.get('hand').execute(msg, args);}
  else if (command === 'pinch') {client.commands.get('pinch').execute(msg, args);}
  else if (command === 'praise') {client.commands.get('praise').execute(msg, args);}
  else if (command === 'shock') {client.commands.get('shock').execute(msg, args);}
  else if (command === 'smile') {client.commands.get('smile').execute(msg, args);}
  else if (command === 'tea') {client.commands.get('tea').execute(msg, args);}
  else if (command === 'wink') {client.commands.get('wink').execute(msg, args);}
  else if (command === 'send') {client.commands.get('send').execute(msg, args, client);}
  else if (command === 'info') {client.commands.get('info').execute(msg, Discord, prefix, client);}
});
