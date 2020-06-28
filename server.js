const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const morgan = require("morgan");

// Load Routes
const todos = require("./routes/todos");

// connect to Database
connectDB();

const app = express();

// Body Parser
app.use(express.json());

// Enable CORS
app.use(cors());

// Morgan
app.use(morgan("dev"));

// Mount Routers
app.use("/api/v1/todos", todos);

// PORT on which server is running
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server is running on ${PORT}`));

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server and exit process
  server.close(() => process.exit(1));
});
