const getOrders = require('./getOrders');
const getOrderDetail = require('./getOrderDetail');
const getOrderTracking = require('./getOrderTracking');
const create = require('./create');
const createtracking = require('./createtracking');

module.exports = {
  create,
  createtracking,
  getOrders,
  getOrderDetail,
  getOrderTracking
}