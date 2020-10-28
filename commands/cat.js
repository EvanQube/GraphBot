const superagent = require('superagent')

module.exports = {
  name: 'cat',
  description: "Random cat image",
  execute(msg) {
    let body = superagent.get('http://aws.random.cat/meow/')
    const catEmbed = {
    color: '#03CAFC',
    image: body,
    footer:{text:'Кошечка для ' + msg.author.username},}
    msg.channel.send({embed: catEmbed})
  }
}
