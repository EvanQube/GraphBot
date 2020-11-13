module.exports = {
  name: 'test',
  description: 'Test',
  execute(msg, args) {
    let reason = args.slice(1).join(' ');
    if(!reason) {reason = 'None'}
    msg.channel.send(reason) 

  }
}
