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

client.on('message', msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).split(/ +/);
  const cmdName = args.shift().toLowerCase();
  const cmd = client.commands.get(cmdName)

  if(cmdName ==='ping') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='ping') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='ping') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='ping') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='ping') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='ping') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='ping') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='ping') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='ping') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='ping') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='ping') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='ping') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='ping') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='ping') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='ping') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='ping') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='ping') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='ping') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='ping') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='ping') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='ping') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='ping') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='ping') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='ping') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='ping') {cmd.execute(msg, args, ms, client, prefix, Discord)}
    cmd.execute(msg, Discord, prefix, client);
    //Mod
  else if(cmdName ==='ping') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='ping') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='ping') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='ping') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='ping') {cmd.execute(msg, args, ms, client, prefix, Discord)}


  else if(cmdName ==='ping') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  });
