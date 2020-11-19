const Discord = require('discord.js')
module.exports.help = {
    name: "laugh",
    aliases: ['смех']
}

module.exports.run = async (client, msg, args) => {
    author = msg.author.id;
    laugh = 10;
    laughNumber = Math.floor(Math.random() * (laugh - 1)) + 1;
    msg.channel.send('<@' + author + '>' + '\xa0' + 'смеётся', {
      files: ['./src/laughs/' + laughNumber + '.gif']
    })
    msg.delete().catch();
  }
