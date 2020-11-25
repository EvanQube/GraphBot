const mongoose = require('mongoose');

const ModsSchema = new mongoose.Schema({
  Role: {
      type: String
  },
  GuildID: String
});

const MessageModel = module.exports = mongoose.model('mods', ModsSchema);
