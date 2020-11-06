exports.run = async(client, msg, args, Discord, ms) => {
      if (msg.member.hasPermission("MANAGE_MESSAGES")) {
           let chan = args[0];
           let channel = client.channels.cache.get(chan)
           let message = args.slice(1);
           channel.send(message);
        }

    }
