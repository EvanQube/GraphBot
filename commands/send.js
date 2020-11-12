module.exports = {
  name: 'send',
  description: 'Send',
  execute(msg, args, Discord) {

    msg.delete().catch();
    }
}
