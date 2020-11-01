module.exports = {
    name: 'send',
    description: 'Отправить сообщение',
    execute(msg, args, reason) {
      if (msg.member.hasPermission("MANAGE_MESSAGES")) {
           let chan = args[0];
           let channel = msg.channels.cache.get(chan)
           let message = args.slice(0).join();
           channel.send(message);
        }
      }
    }
