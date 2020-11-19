const Discord = require("discord.js");
const client = new Discord.Client();
const { handle, run } = require('penguin-handler')

client.login(process.env.token);

client.on('ready', () => {
  handle('./commands')
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
  run('/', client, msg)})

  /*const args = msg.content.slice(prefix.length).split(/ +/);
  const cmdName = args.shift().toLowerCase();
  const cmd = client.commands.get(cmdName)

  if(cmdName ==='anger') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='bite') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='coffee') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='cry') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='five') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='hand') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='help') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='hit') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='hug') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='info') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='invite') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='kill') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='kiss') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='laugh') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='pat') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='pinch') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='ping') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='praise') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='sad') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='shock') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='shy') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='sleep') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='smile') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='sorry') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='tea') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='wink') {cmd.execute(msg, args, ms, client, prefix, Discord)}
    //Mod
  else if(cmdName ==='ban') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='unban') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='kick') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='mute') {cmd.execute(msg, args, ms, client, prefix, Discord)}
  else if(cmdName ==='unmute') {cmd.execute(msg, args, ms, client, prefix, Discord)}


  else if(cmdName ==='test') {cmd.execute(msg, args, ms, client, prefix, Discord)}*/
  });
