const Discord = require('discord.js')
module.exports.help = {
    name: "invite",
    aliases: ['пригласить', 'ссылка']
}

module.exports.run = async (client, msg, args) => {
    msg.author.send('**Ссылка, чтобы пригласить бота к себе:** https://discord.com/api/oauth2/authorize?client_id=766070079577653258&permissions=8&scope=bot')
    msg.reply('я отправил тебе ссылку в личные сообщения')
  }
