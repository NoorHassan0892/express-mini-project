const { request } = require("express");
const Book = require("../../models/Books");

const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    return res.json(books);
  } catch (error) {
    return next(error);
  }
};

const getOneBook = async (req, res, next) => {
  const id = req.params.id;

  try {
    const book = await Book.findById(id);
    if (book) {
      return res.status(200).json(book);
    } else {
      return res
        .status(404)
        .json({ msg: "There is no Book with this id, is not found!" });
    }
  } catch (error) {
    return next(error);
  }
};

const CreateBook = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = req.file.path;
    }
    const newBook = await Book.create(req.body);
    if (newBook) {
      return res.status(201).json(newBook);
    } else {
      return rec.status(404).json({ msg: "Create a Book is faild! " });
    }
  } catch (error) {
    return next(error);
  }
};

const DeleteBook = async (req, res, next) => {
  const id = req.params.id;
  try {
    const bookDel = await Book.findByIdAndDelete(id, req.body);
    if (book.id) {
      return res.status(201).json(bookDel);
    } else {
      return res.status(404).json({ msg: "Delete the Book is Faild!" });
    }
  } catch (error) {
    return next(error);
  }
};

const UpdateBooks = async (req, res, next) => {
  const id = req.params.id;
  try {
    const book = await Book.findByIdAndUpdate(id, req.body);
    if (book) {
      return res.status(200).json(book);
    } else return res.status(404).json({ msg: "Update Book is Faild!" });
  } catch (error) {
    return next(error);
    // return res.status(error.status).json(error);
  }
};

module.exports = {
  getAllBooks,
  getOneBook,
  CreateBook,
  DeleteBook,
  UpdateBooks,
};
