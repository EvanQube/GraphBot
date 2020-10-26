module.exports = {
  name: 'info',
  description: "This is an info command!",
  execute(msg, Discord, prefix, client) {
    const infoEmbed = new Discord.MessageEmbed()
      .setColor('#ADD8E6')
      .setTitle('**Привет!**')
      .setAuthor('GraphBot', 'https://i.imgur.com/SY6e3l3.jpg', 'https://discord.gg/683xBMK')
      .addFields({
        name: '\u200B',
        value:'Меня зовут **Граф**, я предназначен для отыгрывания рп прямо в дискорде! \n \n' +
        'Я поддерживаю довольно много команд, которые часто обновляются и добавляются. \n' +
        'Ты также можешь добавить меня к себе, просто напиши команду ' + prefix + '**invite** \n \n' +
        '`**Я уже на `' + client.guilds.cache.size + '`серверах**`',
      },)
      .setImage('https://i.pinimg.com/originals/fb/24/3f/fb243f7b97edf6267a29b99a772297da.jpg')
      .setTimestamp()
      .setFooter('Ламповый бот для рп!', 'https://i.imgur.com/SY6e3l3.jpg');
    msg.channel.send(infoEmbed)
    msg.delete().catch();
  }
}
