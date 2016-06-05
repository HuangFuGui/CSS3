//定义validate模块，需要引入jquery模块，$表示jquery模块
define(['jquery'],function($){
	return{
		isEmpty:function(){},
		checkLength:function(){},
		isEqual:function(str1,str2){
			return str1 === str2;
		},
	};
});