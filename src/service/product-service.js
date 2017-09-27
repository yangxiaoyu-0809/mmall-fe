/*
* @Author: dell
* @Date:   2017-09-26 09:42:58
* @Last Modified by:   dell
* @Last Modified time: 2017-09-27 08:28:43
*/
'use strict';

var _mm = require('util/mm.js');

var _product = {
	//获取商品列表
	getProductList : function(listParam, resolve, reject){
		_mm.request({
			url      : _mm.getServerUrl('/product/list.do'),
			data     : listParam,
			success  : resolve,
			error    : reject
		});
	},
	//获取商品详细信息
	getProductDetail : function(productId, resolve, reject){
		_mm.request({
			url      : _mm.getServerUrl('/product/detail.do'),
			data     : {
				productId : productId
			},
			success  : resolve,
			error    : reject
		});
	}
}

module.exports = _product;