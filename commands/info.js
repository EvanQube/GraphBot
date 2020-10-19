module.exports = {
  name: 'info',
  description: "This is an info command!",
  execute(msg, Discord, prefix) {
    const infoEmbed = new Discord.MessageEmbed()
      .setColor('#ADD8E6')
      .setTitle('**Версия 1.1.2**')
      .setAuthor('GraphBot', 'https://i.imgur.com/SY6e3l3.jpg', 'https://discord.gg/683xBMK')
      .addFields({
        name: 'Информация',
        value:'Бот находится в стадии разработки, предназначен для отыгрывания рп прямо в дискорде. \n' +
        'Приглашайте бота на свои сервера, ссылку можно получить, использовав команду /invite',
      }, )
      .setImage('https://i.pinimg.com/originals/fb/24/3f/fb243f7b97edf6267a29b99a772297da.jpg')
      .setTimestamp()
      .setFooter('Ламповый бот для рп!', 'https://i.imgur.com/SY6e3l3.jpg');
    msg.channel.send(infoEmbed)
    msg.delete().catch();
  }
}
