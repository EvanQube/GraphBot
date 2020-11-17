const Discord = require('discord.js')
const client = new Discord.Client()
const token = process.env.token
const { handle, run } = require('penguin-handler') //Require the package so you can use the handler function
/*
On the next line I will be calling the handler function with one parameter:
The parameter is the path to your commands folder, for example if my commands folder is in the same folder as my index.js I would put "./commands".
*/
client.on('ready', () =>{
    handle('./comms') //This line of code will load all commands in the path specified, including all commands that are in subfolders.
    console.log('I am online!')})
//Now we have to run the commands when they are called this will be done is a message listener.
const prefix = '/'
client.on('message', msg =>{
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    run('/', client, msg, args)  //The first agument here will be what you want your prefix to be. The second is your client vairable, and the third is your message variable
})

client.login(token)








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
