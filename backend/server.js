const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const recordRoutes = require('./routes/recordRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // serve uploads

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/records', recordRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(process.env.PORT || 5000, () =>
    console.log('Server running...')
  );
}).catch(err => console.log(err));
