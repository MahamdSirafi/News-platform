const newsController = require('../controllers/newsController');
const authMiddlewers=require("../middlewares/authMiddlewers")
const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
router
  .route('/')
  .get(newsController.getAllNews)
  .post(authMiddlewers.protect,upload.single('text'), newsController.createNews);
router
  .route('/:id')
  .get(newsController.getNews)
  .patch(newsController.updateNews)
  .delete(newsController.deleteNews);
module.exports = router;
