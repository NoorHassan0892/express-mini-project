const express = require("express");
const Books = require("./data");
const BooksRouter = require("./apis/Books/routes");
const connectDB = require("./dataBase");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const ErrorHandler = require("./Middleware/ErrorHandler");
const NotFound = require("./Middleware/NotFound");
const path = require("path");

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/media", express.static(path.join(__dirname, "media")));

app.use("/Books", BooksRouter);
app.use(ErrorHandler);
app.use(NotFound);
connectDB();

app.listen(8001, () => {
  console.log("i am running on port 8001");
});
