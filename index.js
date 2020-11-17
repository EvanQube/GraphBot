const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
require('dotenv').config()

const client = new DiscordJS.Client()

client.on('ready', () => {
  // Initialize WOKCommands
  new WOKCommands(client, 'comms')
})

client.login(process.env.token)
