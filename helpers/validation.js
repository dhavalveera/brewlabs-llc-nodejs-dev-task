const Joi = require("joi");

const booksValidationSchema = Joi.object({
  title: Joi.string()
    .invalid(...["null", "undefined"])
    .required(),
  author: Joi.string()
    .invalid(...["null", "undefined"])
    .required(),
  summary: Joi.string()
    .invalid(...["null", "undefined"])
    .required(),
});

module.exports = { booksValidationSchema };
