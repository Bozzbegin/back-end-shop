const mongoose = require('mongoose');

const connectDB = async (req, res) => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Login-Regis');
        console.log('Databae connected');
    }
    catch (error) {
        console.log('Database failed:', error);
    };
};

module.exports = connectDB;