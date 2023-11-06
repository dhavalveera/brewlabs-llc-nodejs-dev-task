const Books = require("../models/bookModel");

// Create New Book
exports.createNewBook = async (booksPayload) => {
  try {
    const newBookData = new Books(booksPayload);
    const data = await newBookData.save();
    return data;
  } catch (error) {
    throw Error(error);
  }
};

// Get All Books
exports.getAllBooks = async () => {
  try {
    const newBookData = await Books.find();
    return newBookData;
  } catch (error) {
    throw Error(error);
  }
};

// Get Single Book
exports.retrieveSingleBook = async (booksId) => {
  try {
    const singleBookData = await Books.findById(booksId);
    return singleBookData;
  } catch (error) {
    throw Error(error);
  }
};

// Update Book
exports.updateBookDetail = async (booksId, updateBooksPayload) => {
  try {
    const updatedBookDetail = await Books.findByIdAndUpdate(
      booksId,
      updateBooksPayload,
      { new: true }
    );
    return updatedBookDetail;
  } catch (error) {
    throw Error(error);
  }
};

// Delete Book
exports.deleteBookDetail = async (booksId) => {
  try {
    const deletedBook = await Books.findOneAndDelete(booksId);
    return deletedBook;
  } catch (error) {
    throw Error(error);
  }
};
