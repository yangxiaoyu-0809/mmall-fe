/*
* @Author: dell
* @Date:   2017-09-23 19:30:17
* @Last Modified by:   dell
* @Last Modified time: 2017-09-23 19:35:01
*/
'use strict';

var _mm = require('util/mm.js');

var _cart = {
	//获取购物车数量
	getCartCount : function(resolve, reject){
		_mm.request({
			url      : _mm.getServerUrl('/cart/get_cart_product_count.do'),
			success  : resolve,
			error    : reject
		});
	}
}

module.exports = _cart;