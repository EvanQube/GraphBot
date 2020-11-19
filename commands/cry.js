const Discord = require('discord.js')
module.exports.help = {
    name: "cry",
    aliases: ['плак']
}

module.exports.run = async (client, msg, args) => {
    author = msg.author.id;
    cry = 13;
    cryNumber = Math.floor(Math.random() * (cry - 1)) + 1;
    msg.channel.send('<@' + author + '>' + '\xa0' + 'плачет', {
      files: ['./src/crys/' + cryNumber + '.gif']
    })
    msg.delete().catch();
}
