module.exports = {
    name: 'send',
    description: 'Отправить сообщение',
    execute(msg, args, reason) {
      if (msg.member.hasPermission("MANAGE_MESSAGES")) {
           let chan = args[0];
           let message = args.slice(0).join();
           msg.chan.send(message);
        }
      }
    }
