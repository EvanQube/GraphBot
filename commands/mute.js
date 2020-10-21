module.exports = {
  name: 'mute',
  description: "This is a mute command!",
  execute(msg, ms, args, client) {
var person  = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[1]));
    if(!person) return  msg.reply("I CANT FIND THE USER " + person)

    let mainrole = msg.guild.roles.find(role => role.name === "Newbie");
    let role = msg.guild.roles.find(role => role.name === "mute");


    if(!role) return msg.reply("Couldn't find the mute role.")


    let time = args[2];
    if(!time){
        return msg.reply("You didnt specify a time!");
    }

    person.addRole(role.id);


    msg.channel.send(`@${person.user.tag} has now been muted for ${ms(ms(time))}`)

    setTimeout(function(){

        person.addRole(mainrole.id)
        person.removeRole(role.id);
        console.log(role.id)
        msg.channel.send(`@${person.user.tag} has been unmuted.`)
    }, ms(time));

        msg.delete().catch();
    }
}
