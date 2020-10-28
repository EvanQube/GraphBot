const superagent = require('superagent')

module.exports = {
  name: 'cat',
  description: "Random cat image",
  execute(msg) {
    let body = await superagent.get('http://aws.random.cat/meow')
    const catEmbed = {
    color: '#03CAFC',
    image: body.file,
    footer:{text:'Кошечка для ' + msg.author.username},
    timestamp: new Date(),}
    msg.channel.send({embed: catEmbed})
  })
}}
