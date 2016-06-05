//config定义别名
requirejs.config({
	paths:{
		jquery:'jquery-2.0.0.min'
	}
});

//['jquery','validate']数组即要引入的模块名（$表示jquery模块），可多个
requirejs(['jquery','validate'],function($,validate){
	$('body').css('background-color','red');  //背景色改变，模块被成功引入
	console.log(validate.isEqual(1,1));
})