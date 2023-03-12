const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const path = require("path");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const profileRoutes = require("./routes/profileRoutes");
// const path = require('path')


app.use(express.json());
app.use(cors());


const mongoUrl = process.env.MONGODB_URL;
mongoose.connect(mongoUrl, err => {
  if (err) throw err;
  console.log("Mongodb connected...");
});


app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/profile", profileRoutes);


// // For deployment to heroku
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.resolve(__dirname, "../frontend/build")));
//   app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "../frontend/build/index.html")));
// }

// static 
// app.use(express.static(path.join(__dirname, "./frontend/build")))
// app.get('*', function(req, res){
//   res.sendFile(path.join(__dirname, "./frontend/build/index.html"))
// });

//port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});



