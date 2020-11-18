module.exports = {
  name: 'invite',
  description: "Пригласить бота",
  execute(msg, args, ms, client, prefix, Discord) {
    msg.author.send('**Ссылка, чтобы пригласить бота к себе:** https://discord.com/api/oauth2/authorize?client_id=766070079577653258&permissions=8&scope=bot')
    msg.reply('я отправил тебе ссылку в личные сообщения')
  }
}
