module.exports = {
  name: 'test',
  description: 'Test',
  execute(msg, args, Discord) {
    let reason = args.slice(1).join(' ');
    let guild = msg.guild.name;
    if(!reason) {reason = 'None'}
    let banEmbed = new Discord.MessageEmbed()
    .setDescription(`✅`)
    .setColor('GREEN')
    .addFields({
      name: `<@771706516377960469>`,
      value: reason,
      inline: true
    })
    msg.author.send(banEmbed)

  }
}
