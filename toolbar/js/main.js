//config定义别名
requirejs.config({
	paths:{
		jquery:'jquery-2.0.0.min'
	}
});

// //['jquery','validate']数组即要引入的模块名（$表示jquery模块），可多个
// requirejs(['jquery','validate'],function($,validate){
// 	$('body').css('background-color','red');  //背景色改变，模块被成功引入
// 	console.log(validate.isEqual(1,1));
// })
// 

requirejs(['jquery','backtop'],function($,backtop){

	// new backtop.BackTop($("#backTop"),{
	// 	mode:'go',
	// 	pos:0,
	// 	speed:8000
	// });

	/*jquery插件模式*/
	$("#backTop").backtop({
		mode:'move',
		pos:0,
		speed:2000
	});

	// //实例化一个对象调用模块
	// var scroll = new scrollto.ScrollTo({   /*对象参数*/
	// 	dest:200,
	// 	speed:5000
	// });

	// //$('body').css('background-color','red');  //页面背景变红，jquery模块别成功调用
	// //$("#backTop").on('click',scroll.move); //这样this指向$("#backTop")
	// $("#backTop").on('click',$.proxy(scroll.move,scroll));  //让this指向scroll这个实例化的对象
	// $(window).on('scroll',function(){
	// 	checkPosition($(window).height());
	// });

	// checkPosition($(window).height());

	// function move(){
	// 	$('html,body').animate({
	// 		scrollTop:0,
	// 	},800);
	// }

	// function go(){
	// 	$('html,body').scrollTop(0);
	// }

	// function checkPosition(pos){
	// 	if($(window).scrollTop() > pos){
	// 		$("#backTop").fadeIn();
	// 	}
	// 	else{
	// 		$("#backTop").fadeOut();
	// 	}
	// }
});