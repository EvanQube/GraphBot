module.exports = {
    name: 'send',
    description: 'Отправить сообщение',
    execute(msg, args, client) {
      if (msg.member.hasPermission("MANAGE_MESSAGES")) {
           let chan = args[0];
           let channel = client.channels.cache.get(chan)
           let message = args.slice(1).join();
           channel.send(message);
        }
      }
    }
