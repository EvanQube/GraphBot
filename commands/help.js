<<<<<<< HEAD
module.exports = {
    name: 'help',
    description: 'Help',
    execute(msg, args) {
      execute(msg, Discord, prefix, client) {
        const helpEmbed = new Discord.MessageEmbed()
          .setColor(`ORANGE`)
          .setTitle(`**Команды**`)
          .setAuthor(`GraphBot`, `https://i.imgur.com/SY6e3l3.jpg`, `https://discord.gg/683xBMK`)
          .addFields({
            name: `\u200B`,
            value: 'Префикс бота - `/`'
          }, {
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
        msg.reply.send('Я отправил тебе команды в личные сообщения')
        msg.delete().catch();
      }
    }
=======
exports.run = async(client, msg, args, Discord, ms) => {
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
      `Перечень команд, \n список обновлений \n доступны на сайте - \n` +
      `https://evanenev.gitbook.io/graphbot/`,
      inline: true
    }, {
      name: `\u200B`,
      value:
      `Пригласить бота к себе можно прописав команду \n **${prefix} invite**, бот вышлет вам ссылку в личные сообщения`,
      inline: true
    },
    )
      .setImage(`https://i.imgur.com/OYN4T0p.jpg`)
      .setTimestamp()
	    .setFooter(`На ${client.guilds.cache.size} серверах`, `https://i.imgur.com/SY6e3l3.jpg`);
      msg.author.send(helpEmbed)
      msg.reply.send('Я отправил тебе команды в личные сообщения')
      msg.delete().catch();
}
>>>>>>> c3b5e731b559491157d617db2efae644aa4e225a
