const catchAsync = require('./../utils/catchAsync');
const appError = require('./../utils/appError');
const User = require('./../models/userModel');
const News = require('../models/newsModel');

exports.getOverview = catchAsync(async (req, res, next) => {
  //1)Get tour data from Tour collection
  const _News = await News.find()
    .populate({
      path: 'user',
      select: '-_id photo name place_work',
    })
    .sort('createdAt');
  console.log(_News);
  //2)Build the overview page
  //3)Render overview page using the tour data
  res.status(200).render('overview', { title: 'All News', _News });
});

exports.getLoginForm = catchAsync(async (req, res) => {
  res.status(200).render('login', {
    title: 'Log into your account',
    url: ` ${req.protocol}://${req.get('host')}/forgotPassword`,
  });
});
exports.getCreateNewsForm = catchAsync(async (req, res) => {
  if (!res.locals.user) return res.redirect('login');
  res.status(200).render('postNews', {
    title: 'Create news',
  });
});

exports.getSignupForm = catchAsync(async (req, res) => {
  res.status(200).render('signup', { title: 'Create your account' });
});

exports.getForgotPasswordForm = catchAsync(async (req, res, next) => {
  res.status(200).render('forgotPassword', { title: 'Forgot Password' });
});

exports.getResetPasswordForm = catchAsync(async (req, res, next) => {
  const hashToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');
  const user = await User.findOne({
    passwordResetToken: hashToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  if (!user) {
    return next(new AppError(404, 'Invalid url, Please go to the home page'));
  }
  res.status(200).render('resetPassword', {
    title: 'Reset Password',
    token: req.params.token,
  });
});
