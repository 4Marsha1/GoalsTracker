const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const cors = require("cors")
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require("./config/db")

const port = process.env.PORT || 5000;
const app = express();

// ---- CONNECT DATABASE ----
connectDB();

// ---- MIDDLEWARES ----
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ---- ROUTES ----
app.use('/api/goals', require('./routes/goalsRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// ---- CUSTOM ERROR HANDLER ----
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
})