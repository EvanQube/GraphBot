module.exports = {
  name: 'mute',
  description: "This is a mute command!",
  execute(msg, ms, args, client) {
var person  = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
    if(!person) return  message.reply("I CANT FIND THE USER " + person)

    let mainrole = message.guild.roles.find(role => role.name === "Newbie");
    let role = message.guild.roles.find(role => role.name === "mute");


    if(!role) return message.reply("Couldn't find the mute role.")


    let time = args[2];
    if(!time){
        return message.reply("You didnt specify a time!");
    }

    person.addRole(role.id);


    message.channel.send(`@${person.user.tag} has now been muted for ${ms(ms(time))}`)

    setTimeout(function(){

        person.addRole(mainrole.id)
        person.removeRole(role.id);
        console.log(role.id)
        message.channel.send(`@${person.user.tag} has been unmuted.`)
    }, ms(time));

        msg.delete().catch();
    }
}
