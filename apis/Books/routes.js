const express = require("express");
const {
  getAllBooks,
  getOneBook,
  CreateBook,
  DeleteBook,
  UpdateBooks,
} = require("./controllers");
const upload = require("../../Middleware/multer");

const BooksRouter = express.Router();
BooksRouter.get("/", getAllBooks);

BooksRouter.get("/:id", getOneBook);

BooksRouter.post("/", upload.single("image"), CreateBook);

BooksRouter.delete("/:id", DeleteBook);

BooksRouter.post("/:id", UpdateBooks);

module.exports = BooksRouter;
