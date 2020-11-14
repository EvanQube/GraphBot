module.exports = {
  name: 'test',
  description: 'Test',
  execute(msg, args, Discord) {
    let reason = args.slice(1).join(' ');
    let guild = msg.guild.name;
    if(!reason) {reason = 'None'}
    let channel = msg.channel;
    channel.createInvite({unique: true})
    .then(invite => {
      msg.reply("Hey! I've created you an invite: https://discord.gg/" + invite.code)
      })
  }
}
