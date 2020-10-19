module.exports = {
  name: 'help',
  description: "This is a help command!",
  execute(msg, Discord, prefix, version) {
    const helpEmbed = new Discord.MessageEmbed()
    .setColor('ORANGE')
    .setTitle('**Команды**')
    .setAuthor('GraphBot', 'https://i.imgur.com/SY6e3l3.jpg', 'https://discord.gg/683xBMK')
    .addFields({
      name: '\u200B',
      value:
      prefix + 'help - выводит это сообщение' + '\n' +
      prefix + 'hug - обнять собеседника' + '\n' +
      prefix + 'ping - проверка бота' + '\n' +
      prefix + 'pat - погладить собеседника' + '\n' +
      prefix + 'kill - убить собеседника' + '\n' +
      prefix + 'invite - пригласить бота к себе',
      inline: true
    }, {
      name: '\u200B',
      value:
      prefix + 'kiss - поцеловать собеседника' + '\n' +
      prefix + 'hit - ударить собеседника'+ '\n' +
      prefix + 'cry - поплакать'+ '\n' +
      prefix + 'sleep - готовность ко сну' + '\n' +
      prefix + 'laugh - посмеятся' + '\n' +
      prefix + 'info - актуальная информация о боте \n' +
      prefix + 'update - узнать, что добавили',
      inline: true
    })
      .setImage('https://i.imgur.com/OYN4T0p.jpg')
      .setTimestamp()
	    .setFooter('Версия' + version, 'https://i.imgur.com/SY6e3l3.jpg');
      msg.channel.send(helpEmbed)
      msg.delete().catch();
  }
}
