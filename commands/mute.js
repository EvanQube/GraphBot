module.exports = {
  name: 'mute',
  description: "This is a mute command!",
  execute(msg, ms, args, client) {
    let role = msg.guild.roles.create({
data: {
name: 'MUTED',
color: '#808080',
},
reason: 'Needed muted role',
}).catch(console.error)
        if(msg.member.hasPermission('MANAGE_MESSAGES')) {
            var member = msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[0]));
            if(!member) return msg.reply('Please Provide a Member to TempMute.')

            let time = args[1];
            if (!time) {
                return msg.reply("Вы не указали время.");
            }

            member.roles.add(role);

            msg.channel.send(`@${member.user.tag} замучен на ${ms(ms(time))}`)

            setTimeout( function () {
                member.roles.remove(role.id);
                msg.channel.send(`@${member.user.tag} был размучен.`)
            }, ms(time));

        } else return msg.channel.send('У вас нет прав!');
        msg.delete().catch();
    }
}
