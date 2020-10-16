module.exports = {
  name: 'update',
  description: "This is an update command!",
  execute(msg, Discord, prefix) {
    const helpEmbed = new Discord.MessageEmbed()
      .setColor('GREEN')
      .setTitle('**Версия 1.1.1**')
      .setAuthor('GraphBot', 'https://i.imgur.com/SY6e3l3.jpg', 'https://discord.gg/683xBMK')
      .addFields({
        name: 'Добавлено',
        value:
        prefix + 'kill' + '\n' +
        prefix + 'update - узнать, что добавили',
      }, )
      .setImage('https://i.imgur.com/QQTSOfy.jpg')
      .setTimestamp()
      .setFooter('Ламповый бот для рп!', 'https://i.imgur.com/SY6e3l3.jpg');
    msg.channel.send(helpEmbed)
    msg.delete().catch();
  }
}
