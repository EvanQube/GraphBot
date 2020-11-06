module.exports = {
  name: 'help',
  description: 'Help',
  execute(msg, Discord, prefix, client) {
    const helpEmbed = new Discord.MessageEmbed()
      .setColor(`ORANGE`)
      .setTitle('Префикс бота - `/`')
      .setAuthor(`GraphBot`, `https://i.imgur.com/SY6e3l3.jpg`, `https://discord.gg/683xBMK`)
      .addFields({
        name: `\u200B`,
        value: `Перечень команд, \n список обновлений \n доступны на сайте - \n` +
          `https://evanenev.gitbook.io/graphbot/`,
        inline: true
      }, {
        name: `\u200B`,
        value: `Пригласить бота к себе можно прописав команду \n **${prefix} invite**, бот вышлет вам ссылку в личные сообщения`,
        inline: true
      }, )
      .setImage(`https://i.imgur.com/OYN4T0p.jpg`)
      .setTimestamp()
      .setFooter(`На ${client.guilds.cache.size} серверах`, `https://i.imgur.com/SY6e3l3.jpg`);
    msg.author.send(helpEmbed)
    msg.reply('я отправил тебе команды в личные сообщения')
    msg.delete().catch();
  }
}
