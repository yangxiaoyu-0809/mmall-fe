/*
* @Author: dell
* @Date:   2017-09-29 15:02:34
* @Last Modified by:   dell
* @Last Modified time: 2017-09-29 15:16:32
*/
'use strict';

var _mm = require('util/mm.js');

var _payment = {
	//获取支付信息
	getPaymentInfo : function(orderNumber, resolve, reject){
		_mm.request({
			url      : _mm.getServerUrl('/order/pay.do'),
			data     : {
				orderNo : orderNumber
			},
			success  : resolve,
			error    : reject
		});
	},
	//获取订单状态
	getPaymentStatus : function(orderNumber, resolve, reject){
		_mm.request({
			url      : _mm.getServerUrl('/order/query_order_pay_status.do'),
			data     : {
				orderNo : orderNumber
			},
			success  : resolve,
			error    : reject
		});
	}
}

module.exports = _payment;