const Discord = require("discord.js");
const client = new Discord.Client();
const { handle, run } = require('penguin-handler')
const token = process.env.token;
const mongoose = require('mongoose')

mongoose.connect(process.env.mongodb,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});
const prefix = require('./models/prefix');

client.on('ready', () =>{
  client.user.setPresence({
    status: 'online',
    activity: {
      name:  `/help | Автор - Evan🎃#6456`,
      type: 'WATCHING'
    }
  })
  handle('./commands')
  console.log('Bot is ready !')
});

client.on('message', async (msg) =>{
  const data = await prefix.findOne({
       GuildID: client.guilds.cache.get(msg.guild.id).id
   });
   if(data) {
       const prefix = data.Prefix;

       if (!msg.content.startsWith(prefix)) return;
      run(prefix, client, msg)
    } else if (!data) {
       const prefix = "/";

       if (!msg.content.startsWith(prefix)) return;
           run(prefix, client, msg)}})

client.login(token);
