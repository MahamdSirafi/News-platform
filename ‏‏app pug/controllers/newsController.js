const News = require('../models/newsModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const axios = require('axios');
const handlerFactory = require('../utils/handlerFactory');

exports.getNews = handlerFactory.getOne(News, {
  path: 'user',
  select: '-_id -__v',
});
exports.createNews = catchAsync(async (req, res, next) => {
  switch (req.body.service) {
    case 'img': {
      const formData = new FormData();
      const blob = new Blob([req.file.buffer], {
        type: 'application/octet-stream',
      });
      formData.append('text', blob, req.file.originalname);
      var response = await axios.post(
        'http://localhost:3300/text_extraction',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      req.body.news = response.data.text;
      break;
    }
    case 'pdf': {
      const formData = new FormData();
      const blob = new Blob([req.file.buffer], {
        type: 'application/octet-stream',
      });
      formData.append('text', blob, req.file.originalname);
      var response = await axios.post(
        'http://localhost:3400/extractTextFromPDF',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      req.body.news = response.data.text;
      break;
    }
  }
  if (req.body.spellcheck == 'true') {
    const response = await axios.post('http://localhost:3500/spellcheck', {
      text: req.body.news,
    });
    req.body.news = response.data.text;
  }
  console.log(req.body);
  req.body.user = req.user._id;
  const data = await News.create(req.body);
  res.status(200).json({
    status: 'success',
    data: { data },
  });
});
exports.updateNews = handlerFactory.updateOne(News);
exports.deleteNews = handlerFactory.deleteOne(News);
