const mongoose = require('mongoose');

const uerSchema = new mongoose.Schema ({
    username: String,
    password: String,
    email: String,
    timestamp: {
        type: Date,
        default: () => Date.now() + 7 * 60 * 60 * 1000,
        required: true,
      },
});

//, unique: true 
module.exports = mongoose.model('User', uerSchema);