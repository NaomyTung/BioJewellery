const path = require('path');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const { urlencoded } = require('express');
const dotenv = require('dotenv')
dotenv.config()
const colours  = require('colors');
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db')
const {errorHandler} = require('./middleware/errorHandler')

//allows any ip address to access our express server
var cors = require('cors');
//to uniquely identify the resources and prevent conflict or data loss
const uuid = require('uuid')
//Initializing stripe client for our account using secret key
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

//Mongodb connections
connectDB();
app.use(express.json());
app.use(urlencoded({extended: false}));
app.use(cors());
//allows to serve static files from public directory to client, recommended by stripe doc.
app.use(express.static('public'));

//Routes
//Just to test server is running
// app.get("/", (req, res) => {
//     res.send("Whoohoo I am working!");
// });

//Connect the routes and controllers
//For all product routes
app.use('/api/product', require('./routes/productRoutes.js'));

//User routes 
app.use('/api/account', require('./routes/accountRoutes.js'));

//Review routes
app.use('/api/reviews', require('./routes/reviewRoutes.js'));

//Cart routes
app.use('/api/cart', require('./routes/cartRoutes.js'));

//Order routes
app.use('/api/order', require('./routes/orderRoutes.js'));

//Address routes
app.use('/api/address', require('./routes/addressRoutes.js'));

// Stripe routes
app.use('/checkout', require('./routes/stripeRoutes.js'));

//Return Request Form routes
app.use('/api/returnrequest', require('./routes/returnrequest.js'));

//Serve frontend
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../capstone/build')));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'capstone', 'build', 'index.html')));
} else {
    app.get('/', (req, res) => res.send('Please set to production'));
}

app.use(errorHandler);

//Listen
app.listen(PORT, () => console.log(`Server runs on Port ${PORT}`));

//To run server type: 'npm start server'