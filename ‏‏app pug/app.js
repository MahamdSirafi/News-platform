const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const AppError = require('./utils/appError');
const errorGlobal = require('./controllers/errorController');
const app = express();
const path = require('path');
const userRouter = require('./routes/userRoutes');
const newsRouter = require('./routes/newsRoutes');
const viewsRoutes = require('./routes/viewsRoutes');

//PUG
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(cors());
app.options('*', cors());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.static('public'));
app.use('/api/v1.0.0/users', userRouter);
app.use('/api/v1.0.0/news', newsRouter);
app.use('/', viewsRoutes);
//في حال طلب مورد غير موجود
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(errorGlobal);
mongoose
  .connect(process.env.DATABASE_LOCAL)
  .then((result) => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Example app listening at http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
