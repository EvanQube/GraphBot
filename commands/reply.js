module.exports = {
  name: 'reply',
  description: "Bot replys",
  execute(msg, args) {
    var facts = ["Your facts", "...", "..."];
    var fact = Math.floor(Math.random() * facts.length);
    msg.channel.send(facts[fact]);
  }
}
