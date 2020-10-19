module.exports = {
  name: 'update',
  description: "This is an update command!",
  execute(msg, Discord, prefix) {
    const updateEmbed = new Discord.MessageEmbed()
      .setColor('GREEN')
      .setTitle('**Версия 1.1.2**')
      .setAuthor('GraphBot', 'https://i.imgur.com/SY6e3l3.jpg', 'https://discord.gg/683xBMK')
      .addFields({
        name: 'Добавлено',
        value:
        prefix + 'info - актуальная информация о боте',
      }, )
      .setImage('https://i.imgur.com/QQTSOfy.jpg')
      .setTimestamp()
      .setFooter('Ламповый бот для рп!', 'https://i.imgur.com/SY6e3l3.jpg');
    msg.channel.send(updateEmbed)
    msg.delete().catch();
  }
}
