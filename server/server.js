require('dotenv').config();
require('./utils/db');

const path = require('path');
const express = require('express');

const roomsRoute = require('./routes/rooms-route');
const authRoute = require('./routes/auth');
const bookingRoute = require('./routes/booking-route');

const app = express();

app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/api/rooms', roomsRoute);
app.use('/api/auth', authRoute);
app.use('/api/bookings', bookingRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is running on ${PORT}`));
