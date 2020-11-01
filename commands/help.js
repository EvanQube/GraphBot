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
      `${prefix}help - выводит это сообщение \n` + //1
      `${prefix}**invite - пригласить бота к себе** \n` + //2
      `${prefix}info - актуальная информация о боте \n` + //3
      `${prefix}ping - проверка бота \n` + //4
      `${prefix}pat - погладить собеседника \n` + //5
      `${prefix}kill - убить собеседника \n` + //6
      `${prefix}anger - позлиться \n` + //7
      `${prefix}bite - сделать кусь\n` + //8
      `${prefix}five - дать пять \n` + //9
      `${prefix}hand - пожать руку \n` + //10
      `${prefix}pinch - ущипнуть \n` + //11
      `${prefix}sad - погрустить \n`, //12
      inline: true
    }, {
      name: `\u200B`,
      value:
      `${prefix}kiss - поцеловать собеседника \n` + //1
      `${prefix}hit - ударить собеседника \n` + //2
      `${prefix}cry - поплакать \n` + //3
      `${prefix}sleep - готовность ко сну \n` + //4
      `${prefix}laugh - посмеятся \n` + //5
      `${prefix}praise - похвалить \n` + //6
      `${prefix}pinch - ущипнуть \n` + //7
      `${prefix}shy - постесняться \n` + //8
      `${prefix}coffee - попить кофе одному или с кем-то \n` + //9
      `${prefix}tea - попить чай одному или с кем-то \n` + //10
      `${prefix}shock - быть в шоке \n` + //11
      `${prefix}sorry - извиниться (просто или перед кем-то) \n` + //12
      `${prefix}wink - подмигнуть (просто или кому-то) \n` + //13
      `${prefix}hug - обнять собеседника \n`, //14
      inline: true
    }, //{
      //name: `\u200B`,
      //value: `**Присоединяйся к сообществу программистов - https://discord.gg/JguHbeEUMP**`,
    )
      .setImage(`https://i.imgur.com/OYN4T0p.jpg`)
      .setTimestamp()
	    .setFooter(`На ${client.guilds.cache.size} серверах`, `https://i.imgur.com/SY6e3l3.jpg`);
      msg.channel.send(helpEmbed)
      msg.delete().catch();
  }
}
