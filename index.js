const ms = require('ms');
const fs = require('fs');
const Discord = require("discord.js");
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const cmd = require(`./commands/${file}`);

  client.commands.set(cmd.name, cmd);
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
  const cmdName = args.shift().toLowerCase();
  const cmd = client.commands.get(cmdName)
  || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName));

  if (cmd === 'ping') {client.commands.get('ping').execute(msg, args);}
  else if (cmd === 'help') {client.commands.get('help').execute(msg, Discord, prefix, client);}
  else if (cmd === 'hug') {client.commands.get('hug').execute(msg, args);}
  else if (cmd === 'hit') {client.commands.get('hit').execute(msg, args);}
  else if (cmd === 'kiss') {client.commands.get('kiss').execute(msg, args);}
  else if (cmd === 'cry') {client.commands.get('cry').execute(msg, args);}
  else if (cmd === 'sleep') {client.commands.get('sleep').execute(msg, args);}
  else if (cmd === 'pat') {client.commands.get('pat').execute(msg, args);}
  else if (cmd === 'laugh') {client.commands.get('laugh').execute(msg, args);}
  else if (cmd === 'invite') {client.commands.get('invite').execute(msg);}
  else if (cmd === 'kill') {client.commands.get('kill').execute(msg);}
  else if (cmd === 'shy') {client.commands.get('shy').execute(msg);}
  else if (cmd === 'sad') {client.commands.get('sad').execute(msg);}
  else if (cmd === 'info') {client.commands.get('info').execute(msg, Discord, prefix, client);}
  // else if (message.isMemberMentioned(client.user) {client.commands.get('reply').execute(msg, args);}
});
