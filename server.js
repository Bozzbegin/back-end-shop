const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const Register_Router = require('./Router/register_api');
const Login_Router = require('./Router/login_api');
const secureRoute = require('./Router/secureRoute');
const cors = require('cors');
const app = express();
const PORT = 5000; 

connectDB();
app.use(bodyParser.json());
app.use(cors());

app.use('/register', Register_Router);
app.use('/login', Login_Router);
app.use('/secure', secureRoute);

app.listen(PORT, () => {
    console.log('Server running on PORT: '+PORT);
});