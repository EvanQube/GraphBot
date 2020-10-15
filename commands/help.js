module.exports = {
  name: 'help',
  description: "This is a help command!",
  execute(msg, Discord, prefix) {
    const helpEmbed = new Discord.messageEmbed();
    .setColor('ORANGE')
      .setTitle('**Команды**')
      .setUrl('https://discord.gg/683xBMK')
      .setAuthor('GraphBot', 'https://i.imgur.com/SY6e3l3.jpg', 'https://discord.gg/683xBMK')
      .addFields({
        name: '\u200B',
        value:
        prefix + 'help - выводит это сообщение' + '\n' +
        prefix + 'hug - обнять собеседника',
        inline: true
      } {
        name: '\u200B',
        value:
        prefix + 'kiss - поцеловать собеседника' + '\n' +
        prefix + 'hit - ударить собеседника',
        inline: true
      })
      .setImage('https://i.imgur.com/BLn6BfO.jpg')
      .setTimestamp()
	    .setFooter('Ламповый бот для рп!', 'https://i.imgur.com/SY6e3l3.jpg');
      msg.channel.send(helpEmbed)
      msg.delete().catch();
  }
}
}
