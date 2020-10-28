module.exports = {
  name: 'cat',
  description: "Random cat image",
  execute(msg, client) {
    get('https://aws.random.cat/meow').then(res => {
				return message.channel.send(
          {files: [{attachment: res.body.file, name: `cat.${res.body.file.split('.')[2]}`}]});
  })
}}
