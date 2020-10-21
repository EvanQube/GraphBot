module.exports = {
    name: "mute",
    description: "Mutes a player for an amount of time.",
    execute(msg, args, ms){

        // This defines member as the first person that get's mentioned in the message.
        let member = msg.guild.member(msg.mentions.users.first());

        // If there is no member defined this will say that it could not find anyone by that name.
        if(!member) return msg.channel.send("I couldn't find a user by that name.");

        // This defines the main role and the muted role (this works from a config file, so you need to replace
        // botconfig.memberrole and botconfig.mutedrole with the names of the roles.)
        let muterole = msg.guild.roles.cache.find(role => role.name === 'mute');

        // If either role is missing it will send a reply to the user trying to mute someone.
        if(!muterole) return msg.reply("Couldn't find the mute role.")

        // This makes it so that the second argument is the time.
        let time = args[2];

        // If you didn't specify a time in the second argument:
        if(!time) {

            // Reply with this message.
            msg.reply("You need to specify a time in the second argument!");

            // Stop.
            return;
        }

        // Remove the main role and adds the muted role.
        member.roles.add(muterole.id);

        // Sends a message mentioning the person who got muted and how long they are muted for.
        msg.channel.send(`<@${member.user.id}> has now been muted for ${ms(ms(time))}`);

        // This is the time function. When the time is done:
        setTimeout(function() {

            // Add the main role back and remove the muted role.
            member.roles.remove(muterole.id);

            // Sends a message mentioning the person saying that they have been unmuted.
            msg.channel.send(`<@${member.user.id}> has been unmuted.`)

        }, ms(time));

    }
}
