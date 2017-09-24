/*
* @Author: dell
* @Date:   2017-09-23 17:08:56
* @Last Modified by:   dell
* @Last Modified time: 2017-09-23 17:30:13
*/
'use strict';

var _mm = require('util/mm.js');

var _user = {
	//检查登录状态
	checkLogin : function(resolve, reject){
		_mm.request({
			url      : _mm.getServerUrl('/user/get_user_info.do'),
			method   : 'POST',
			success  : resolve,
			error    : reject
		});
	},
	//登出
	logout : function(resolve, reject){
		_mm.request({
			url      : _mm.getServerUrl('/user/logout.do'),
			method   : 'POST',
			success  : resolve,
			error    : reject
		});
	}
}

module.exports = _user;