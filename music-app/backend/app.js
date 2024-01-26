const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const color = require("colors");
const connectDB = require("./config/db");
const errorHandler= require("./middlewares/error");
const cookieParser = require("cookie-parser");
const cors = require('cors');

const path = require("path");
dotenv.config({ path: "./.env" });


const db =  require("./config/db");
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
// cors
app.use(cors());

// body parser
app.use(express.json())

const port = process.env.PORT || 5000;
connectDB();

// dev logger middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}


// cookie
app.use(cookieParser());

// route files
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/song");

const { required } = require("nodemon/lib/config");
const { cookie } = require("express/lib/response");


// roues setup
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/song", songRoutes);

// mount error handler
app.use(errorHandler);



const server = app.listen(port, () => {
  console.log(`Server app running on ${port}`.yellow.bold);
});

// handle unhandle rejections
process.on('unhandledRejection', (err, promise)=>{
    console.log(`Errpr: ${err.message}`.red);
    server.close(()=>process.exit(1));
});
