const Record = require('../models/Record');

// Upload Medical Record
exports.uploadRecord = async (req, res) => {
  const { title, tags } = req.body;
  const fileUrl = `/uploads/${req.file.filename}`;
  try {
    const record = await Record.create({
      user: req.user,
      title,
      tags: tags?.split(','),
      fileUrl,
    });
    res.status(201).json(record);
  } catch (err) {
    res.status(500).json({ error: 'Upload failed' });
  }
};

// Get User Records
exports.getRecords = async (req, res) => {
  try {
    const records = await Record.find({ user: req.user });
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve records' });
  }
};
