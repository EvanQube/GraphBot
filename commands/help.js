module.exports = {
  name: `help`,
  description: "This is a help command!",
  execute(msg, Discord, prefix, client) {
    const helpEmbed = new Discord.MessageEmbed()
    .setColor(`ORANGE`)
    .setTitle(`**Команды**`)
    .setAuthor(`GraphBot`, `https://i.imgur.com/SY6e3l3.jpg`, `https://discord.gg/683xBMK`)
    .addFields({
      name: `\u200B`,
      value:
      'Префикс бота - `/`'
    }, {
      name: `\u200B`,
      value:
      `Перечень команд, список обновлений доступны на сайте - \n` +
      `https://evanenev.gitbook.io/graphbot/`,
      inline: true
    }, {
      name: `\u200B`,
      value:
      `Пригласить бота к себе можно прописав команду **${prefix} invite**, бот вышлет вам ссылку в личные сообщения`,
      inline: true
    },
    )
      .setImage(`https://i.imgur.com/OYN4T0p.jpg`)
      .setTimestamp()
	    .setFooter(`На ${client.guilds.cache.size} серверах`, `https://i.imgur.com/SY6e3l3.jpg`);
      msg.channel.send(helpEmbed)
      msg.delete().catch();
  }
}
