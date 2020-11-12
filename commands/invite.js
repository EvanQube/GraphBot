module.exports = {
  name: 'invite',
  description: "Пригласить бота",
  execute(msg, client) {
    const reactionEmoji = client.emojis.cache.get('776334197916565508');
    msg.author.send('**Ссылка, чтобы пригласить бота к себе:** https://discord.com/api/oauth2/authorize?client_id=766070079577653258&permissions=402794566&scope=bot')
    msg.reply('я отправил тебе ссылку в личные сообщения')
    .then(msg.react(reactionEmoji))
  }
}
