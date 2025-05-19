const mongoose = require('mongoose');

const RecordSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  tags: [String],
  fileUrl: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Record', RecordSchema);
