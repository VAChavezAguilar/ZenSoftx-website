const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');

const app = express();

//Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10kb'}));

//Connect to database

async function startServer() {
    await connectDB();
    app.use('/api', userRoutes);
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server running in port ${PORT}`);
    })
}

startServer();