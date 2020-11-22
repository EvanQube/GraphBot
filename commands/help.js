const { Client, MessageEmbed } = require('discord.js')
const { Menu } = require('discord.js-menu')
const client = new Client()

const prefix = require('../models/prefix');

module.exports.help = {
    name: "help",
      aliases: ['cmds', 'commands', 'hlp', 'хелп', 'помощь']
}
module.exports.run = async (client, msg, args) => {

  const data = await prefix.findOne({
       GuildID: msg.guild.id
   });
  if(data) {
      const prefix = data.Prefix;
   } else if (!data) {
      const prefix = '/';}

  const infoPage = new MessageEmbed()
  .setColor(`#90e0ef`)
  .setTitle(`Префикс бота: *{prefix}*`)
  .setAuthor(`GraphBot`, `https://i.imgur.com/SY6e3l3.jpg`, `https://discord.gg/683xBMK`)
  .setDescription('**Help**')
  .addFields(
  {name:`\u200B`, value: `Перемещайтесь по страницам, **нажимая на реакции**: \n \n` +
    `▶ - следующая страница \n \n` +
    `◀ - предыдущая страницы \n \n` +
    `⚙ - команды модерации \n \n` +
    `1️⃣ - вернуться сюда`
  })
  .setImage(`https://i.imgur.com/OYN4T0p.jpg`)
  .setFooter(`На ${client.guilds.cache.size} серверах`, `https://i.imgur.com/SY6e3l3.jpg`);

  const secondPage = new MessageEmbed()
  .setColor(`#90e0ef`)
  .setTitle(`Префикс бота: *${prefix}*`)
  .setAuthor(`GraphBot`, `https://i.imgur.com/SY6e3l3.jpg`, `https://discord.gg/683xBMK`)
  .setDescription('**2 страница**')
  .addFields(
  {name:`\u200B`, value:
  `**${prefix}info** - актуальная информация о боте \n` +
  `**${prefix}invite - пригласить бота к себе** \n` +
  `**${prefix}ping** - проверка бота \n` +
  `**${prefix}pat** - погладить \n` +
  `**${prefix}kill** - убить \n` +
  `**${prefix}anger** - позлиться \n` +
  `**${prefix}bite** - укусить \n` +
  `**${prefix}five** - дать пять`})
  .setImage(`https://i.imgur.com/OYN4T0p.jpg`)
  .setFooter(`На ${client.guilds.cache.size} серверах`, `https://i.imgur.com/SY6e3l3.jpg`);

  const firstPage = new MessageEmbed()
  .setColor(`#90e0ef`)
  .setTitle(`Префикс бота: *${prefix}*`)
  .setAuthor(`GraphBot`, `https://i.imgur.com/SY6e3l3.jpg`)
  .setDescription('**1 страница**')
  .addFields(
  {name:`\u200B`, value:
  '**/hand** - пожать руку  \n' +
  '**/pinch** - ущипнуть  \n' +
  '**/sad** - погрустить \n' +
  '**/sad** - погрустить \n' +
  '**/hit** - ударить  \n' +
  '**/cry** - поплакать  \n' +
  '**/sleep** - поспать \n' +
  '**/laugh** - посмеятся ', inline:true},
  {name:`\u200B`, value:`\u200B`, inline:true},
  {name:`\u200B`, value:
  `**${prefix}praise** - похвалить   \n` +
  `**${prefix}shy** - постесняться    \n` +
  `**${prefix}coffee** - попить кофе одному или с кем-то  \n` +
  `**${prefix}tea** - попить чай одному или с кем-то  \n` +
  `**${prefix}shock** - быть в шоке   \n` +
  `**${prefix}hug** - обнять  \n` +
  `**${prefix}sorry** - извиниться (просто или перед кем-то) \n` +
  `**${prefix}wink** - подмигнуть (просто или кому-то)`, inline:true} )
  .setImage(`https://i.imgur.com/OYN4T0p.jpg`)
  .setFooter(`На ${client.guilds.cache.size} серверах`, `https://i.imgur.com/SY6e3l3.jpg`);

  const modPage = new MessageEmbed()
  .setColor(`#90e0ef`)
  .setTitle(`Префикс бота: *${prefix}*`)
  .setAuthor(`GraphBot`, `https://i.imgur.com/SY6e3l3.jpg`)
  .setDescription('**Модерация**')
  .addFields(
  {name:`\u200B`, value:
  `**${prefix}ban** - забанить пользователся  \n` +
  `**${prefix}unban** - разбанить пользователя   \n` +
  `**${prefix}kick** - кикнуть пользователся \n` +
  `**${prefix}mute** - замутить пользователя (если не указать время - навечно) \n` +
  `**${prefix}unmute** - размутить пользователся  \n`})
  .setImage(`https://i.imgur.com/OYN4T0p.jpg`)
  .setFooter(`На ${client.guilds.cache.size} серверах`, `https://i.imgur.com/SY6e3l3.jpg`);


  let helpMenu = new Menu(msg.channel, msg.author.id, [
      {
          name: 'info',
          content: infoPage,
          reactions: {
              '▶': 'next',
              '⚙': 'mod'
          }
      },
      {
          name: 'first',
          content: firstPage,
          reactions: {
              '▶': 'next',
              '⚙': 'mod',
              '1️⃣': 'info'
          }
      },
      {
          name: 'second',
          content: secondPage,
          reactions: {
              '◀': 'previous',
              '⚙': 'mod',
              '1️⃣': 'info'
          }
      },
      {
          name: 'mod',
          content: modPage,
          reactions: {
              '◀': 'previous',
              '1️⃣': 'info'
          }
      }
  ])
  helpMenu.start()
  msg.delete().catch();
}
