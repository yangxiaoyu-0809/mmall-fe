/*
* @Author: dell
* @Date:   2017-09-23 22:04:54
* @Last Modified by:   dell
* @Last Modified time: 2017-09-29 15:26:37
*/
'use strict';

require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');


$(function(){
	var type        = _mm.getUrlParam('type') || 'default',
	    $element    = $('.' + type + '-success');
	if(type === 'payment'){
		var orderNumber = getUrlParam('orderNumber'),
			$orderNumber = $element.find('.order-number');
		$orderNumber.attr('href', $orderNumber.attr('href') + orderNumber);
	}
	//显示对应的提示元素
	$element.show();
})