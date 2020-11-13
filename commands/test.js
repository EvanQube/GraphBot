module.exports = {
  name: 'test',
  description: 'Test',
  execute(msg, args, Discord) {
    let reason = args.slice(1).join(' ');
    if(!reason) {reason = 'None'}
    let banEmbed = new Discord.MessageEmbed()
    .setDescription(`✅ ${target} забанен на сервере`)
    .setColor('GREEN')
    .addFields({
      name: 'Модератор:',
      value: reason,
      inline: true
    })
    msg.channel.send(banEmbed)

  }
}
