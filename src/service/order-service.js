/*
* @Author: dell
* @Date:   2017-09-27 19:44:35
* @Last Modified by:   dell
* @Last Modified time: 2017-09-29 12:32:07
*/
'use strict';

var _mm = require('util/mm.js');

var _order = {
	//获取商品列表
	getProductList : function(resolve, reject){
		_mm.request({
			url      : _mm.getServerUrl('/order/get_order_cart_product.do'),
			success  : resolve,
			error    : reject
		});
	},
	//提交订单
	createOrder : function(orderInfo, resolve, reject){
		_mm.request({
			url      : _mm.getServerUrl('/order/create.do'),
			data     : orderInfo,
			success  : resolve,
			error    : reject
		});
	},
	//获取订单列表
	getOrderList : function(listParam, resolve, reject){
		_mm.request({
			url      : _mm.getServerUrl('/order/list.do'),
			data     : listParam,
			success  : resolve,
			error    : reject
		});
	},
	//获取订单详情
	getOrderDetail : function(orderNumber, resolve, reject){
		_mm.request({
			url      : _mm.getServerUrl('/order/detail.do'),
			data     : {
				orderNo : orderNumber
			},
			success  : resolve,
			error    : reject
		});
	},
	//取消订单
	cancelOrder : function(orderNumber, resolve, reject){
		_mm.request({
			url      : _mm.getServerUrl('/order/cancel.do'),
			data     : {
				orderNo : orderNumber
			},
			success  : resolve,
			error    : reject
		});
	}
}

module.exports = _order;