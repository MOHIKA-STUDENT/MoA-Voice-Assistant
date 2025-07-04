const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

// ✅ Use your existing route file
const moaRoutes = require('./routes/moaRoutes');

dotenv.config();
app.use(cors());
app.use(express.json());

// ✅ Use your existing route path
app.use('/moa', moaRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🟢 MoA Server is running at http://localhost:${PORT}`);
});
