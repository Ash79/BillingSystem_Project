'use strict';
var url = require('url');
var Address = require('./AddressService');

module.exports.getAddress = function getAddress (req, res, next) {
    Address.getAddress (req.swagger.params, res, next);
};

module.exports.putAddress = function putAddress (req, res, next) {
    Address.putAddress (req.swagger.params, res, next);
};

module.exports.postAddress = function postAddress (req, res, next) {
    Address.postAddress (req.swagger.params, res, next);
};

module.exports.patchAddress = function patchAddress (req, res, next) {
    Address.patchAddress (req.swagger.params, res, next);
};

