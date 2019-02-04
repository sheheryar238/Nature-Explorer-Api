const express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    cors = require('cors'),
    bcryptjs = require('bcryptjs'),
    path = require('path'),
    config = require('./config/database'),
    port = process.env.port || 3000;

const app = express();

// ========== Connecting to Database ==========
mongoose.connect(config.database, { useNewUrlParser: true });
mongoose.connection.on('success', () => { console.log(`Conneted to Database : ${config.database}`) });
mongoose.connection.on('error', () => { console.log(`Error Connecting to Database : ${config.database}`) });

// ========== Setting all the Middlewares ==========
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

// ========== Setting the Routes ==========
const TourRoutes = require('./routes/toursRoute');
app.use('/tour', TourRoutes);

const GalleryRoutes = require('./routes/galleryRoute');
app.use('/gallery', GalleryRoutes);

const HotelRoutes = require('./routes/hotelRoute');
app.use('/hotel', HotelRoutes);

const UserRoutes = require('./routes/userRoute');
app.use('/user', UserRoutes);

// ========== Listeing at port ==========
app.listen(port, () => { console.log(`Listening at port ${port}`) });