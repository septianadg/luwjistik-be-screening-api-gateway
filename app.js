require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const orderPaymentsRouter = require('./routes/orderPayments');
const refreshTokensRouter = require('./routes/refreshTokens');

const verifyToken = require('./middlewares/verifyToken');
const can = require('./middlewares/permission');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//app.use('/orders', verifyToken, can('admin', 'student'), orderPaymentsRouter);
app.use('/orders', verifyToken, can('admin', 'customer'), orderPaymentsRouter);
app.use('/refresh-tokens', refreshTokensRouter);

module.exports = app;
