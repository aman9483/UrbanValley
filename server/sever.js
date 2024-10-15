const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();


app.use(cors());
app.use(express.json())
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send("Welcome to server side my friend");
});


mongoose.connect(process.env.Mongo_url)
    .then(() => console.log('Database Connected:', process.env.Mongo_url))
    .catch(error => console.error('Database Connection Error:', error));


const ProductRoute = require('./Routes/ProductRoutes');
const UserRoute = require('./Routes/userRoutes');
const orderRoute = require('./Routes/orderRoute');
app.use('/api/v1', ProductRoute);
app.use('/api/v1/users', UserRoute);
app.use('/api/v1', orderRoute)




const PORT = 8000;
const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Handle server errors
server.on('error', (error) => {
    console.error('Server Error:', error);
});