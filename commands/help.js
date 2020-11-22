const { Client, MessageEmbed } = require('discord.js')
const { Menu } = require('discord.js-menu')
const client = new Client()

const prefix = require('./models/prefix');
const data = await prefix.findOne({
     GuildID: msg.guild.id
 });
if(data) {
    const prefix = data.Prefix;
 } else if (!data) {
    const prefix = '/';

module.exports.help = {
    name: "help",
      aliases: ['cmds', 'commands', 'hlp', 'хелп', 'помощь']
}
module.exports.run = async (client, msg, args) => {

  const infoPage = new MessageEmbed()
  .setColor(`#90e0ef`)
  .setTitle(`Префикс на сервере - \`${prefix}\``)
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
  .setTitle(`Префикс на сервере - \`${prefix}\``)
  .setAuthor(`GraphBot`, `https://i.imgur.com/SY6e3l3.jpg`, `https://discord.gg/683xBMK`)
  .setDescription('**2 страница**')
  .addFields(
  {name:`\u200B`, value:
  '**/info** - актуальная информация о боте \n' +
  '**/invite - пригласить бота к себе** \n' +
  '**/ping** - проверка бота \n' +
  '**/pat** - погладить \n' +
  '**/kill** - убить \n' +
  '**/anger** - позлиться \n' +
  '**/bite** - укусить \n' +
  '**/five** - дать пять'})
  .setImage(`https://i.imgur.com/OYN4T0p.jpg`)
  .setFooter(`На ${client.guilds.cache.size} серверах`, `https://i.imgur.com/SY6e3l3.jpg`);

  const firstPage = new MessageEmbed()
  .setColor(`#90e0ef`)
  .setTitle(`Префикс на сервере - \`${prefix}\``)
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
  '**/praise** - похвалить   \n' +
  '**/shy** - постесняться    \n' +
  '**/coffee** - попить кофе одному или с кем-то  \n' +
  '**/tea** - попить чай одному или с кем-то  \n' +
  '**/shock** - быть в шоке   \n' +
  '**/hug** - обнять  \n' +
  '**/sorry** - извиниться (просто или перед кем-то) \n' +
  '**/wink** - подмигнуть (просто или кому-то) ', inline:true} )
  .setImage(`https://i.imgur.com/OYN4T0p.jpg`)
  .setFooter(`На ${client.guilds.cache.size} серверах`, `https://i.imgur.com/SY6e3l3.jpg`);

  const modPage = new MessageEmbed()
  .setColor(`#90e0ef`)
  .setTitle(`Префикс на сервере - \`${prefix}\``)
  .setAuthor(`GraphBot`, `https://i.imgur.com/SY6e3l3.jpg`)
  .setDescription('**Модерация**')
  .addFields(
  {name:`\u200B`, value:
  '**/ban** - забанить пользователся  \n' +
  '**/unban** - разбанить пользователя   \n' +
  '**/kick** - кикнуть пользователся \n' +
  '**/mute** - замутить пользователя (если не указать время - навечно) \n' +
  '**/unmute** - размутить пользователся  \n'})
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
