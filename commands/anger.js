const Discord = require('discord.js')
module.exports.help = {
    name: "anger",
    aliases: ['angr', 'злой']
}

module.exports.run = async (client, msg, args) => {
    author = msg.author.id;
    anger = 6;
    user = msg.mentions.users.first();
    angerNumber = Math.floor(Math.random() * (anger - 1)) + 1;
    if(!msg.mentions.users.size){
    msg.channel.send('<@' + author + '>' + '\xa0' + 'злится', {
      files: ['./src/angers/' + angerNumber + '.gif']
    })}
    else {
      msg.channel.send(`<@${author}> злится на <@${user.id}>`,{
        files: ['./src/angers/' + angerNumber + '.gif']
      })}
    msg.delete().catch();
}
