exports.run = async(client, msg, args, Discord, ms) => {
    author = msg.author.id;
    shy = 4;
    shyNumber = Math.floor(Math.random() * (shy - 1)) + 1;
    msg.channel.send('<@' + author + '> стесняется', {
      files: ['./src/shys/' + shyNumber + '.gif']
    })
    msg.delete().catch();
}
