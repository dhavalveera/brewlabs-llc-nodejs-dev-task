const booksRepository = require("../../repository/booksRepository");
const { sendErrorResponse, sendOkResponse } = require("../../helpers/helpers");
const constants = require("../../constants/constants");
const { booksValidationSchema } = require("../../helpers/validation");

exports.createBook = async (req, res) => {
  try {
    await booksValidationSchema.validateAsync({ ...req.body });
    const savedBook = await booksRepository.createNewBook(req.body);
    console.log("10", savedBook);
    sendOkResponse(res, 201, savedBook, constants.BOOK_CREATED);
  } catch (error) {
    sendErrorResponse(res, 500, constants.BOOK_CREATION_FAILED, error);
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const allBooks = await booksRepository.getAllBooks();
    console.log(20, allBooks);
    sendOkResponse(res, 200, allBooks, constants.BOOK_FOUND);
  } catch (error) {
    sendErrorResponse(res, 404, constants.BOOK_NOT_FOUND, error);
  }
};

exports.getSingleBook = async (req, res) => {
  try {
    const booksId = req.params.booksid;
    console.log("30", booksId);
    const singleBookDdata = await booksRepository.retrieveSingleBook(booksId);
    console.log(31, singleBookDdata);
    sendOkResponse(res, 200, singleBookDdata, constants.BOOK_FOUND);
  } catch (error) {
    sendErrorResponse(res, 404, constants.BOOK_NOT_FOUND, error);
  }
};

exports.updateBook = async (req, res) => {
  try {
    const booksId = req.params.booksid;
    const updateBooksPayload = req.body;
    await booksValidationSchema.validateAsync({ ...updateBooksPayload });
    const updatedBookData = await booksRepository.updateBookDetail(
      booksId,
      updateBooksPayload
    );
    console.log(47, updatedBookData);
    sendOkResponse(res, 200, updatedBookData, constants.BOOK_FOUND);
  } catch (error) {
    sendErrorResponse(res, 500, constants.INTERNAL_SERVER_ERROR_TEXT, error);
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const booksId = req.params.booksid;
    const deletedBook = await booksRepository.deleteBookDetail(booksId);
    console.log(58, deletedBook);
    sendOkResponse(res, 200, deletedBook, constants.BOOK_FOUND);
  } catch (error) {
    sendErrorResponse(res, 500, constants.INTERNAL_SERVER_ERROR_TEXT, error);
  }
};
