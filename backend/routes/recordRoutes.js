const express = require('express');
const multer = require('multer');
const auth = require('../middleware/auth');
const Record = require('../models/Record');
const path = require('path');

const router = express.Router();

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// Upload new record
router.post('/upload', auth, upload.single('document'), async (req, res) => {
  const { title, tags } = req.body;
  const fileUrl = `/uploads/${req.file.filename}`;
  const record = await Record.create({ user: req.user, title, tags: tags?.split(','), fileUrl });
  res.status(201).json(record);
});

// Get user records
router.get('/', auth, async (req, res) => {
  const records = await Record.find({ user: req.user });
  res.json(records);
});

module.exports = router;
