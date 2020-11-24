const mongoose = require('mongoose');

const CmdsSchema = new mongoose.Schema({
  Command: {
      type: String
  },
  GuildID: String
});

const MessageModel = module.exports = mongoose.model('cmds', CmdsSchema);
