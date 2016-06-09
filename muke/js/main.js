requirejs.config({
	paths:{
		jquery:'jquery-2.0.0.min'
	}
});

requirejs(['jquery','backtop'],function($,backtop){
	
	/*jquery插件模式*/
	$("#backTop").backtop({
		mode:'go',
		pos:0,
		speed:2000
	});

	$("#search_icon").on('click',function(){
		$("#search_input").css('transform','scale(1)');
	});

	var carouselArray = new Array(4);
	carouselArray[0] = "http://www.imooc.com/static/img/index/banner2.jpg";
	carouselArray[1] = "http://img.imooc.com/5756436e00017dbb20000600.jpg";
	carouselArray[2] = "http://img.imooc.com/574ebd970001e21b20000600.jpg";
	carouselArray[3] = "http://img.imooc.com/570668da0001874d20000600.jpg";
	var i = 1;
	var setInterval1 = null;
	setInterval1 = setInterval(function(){
		$("#carouselImg").fadeOut(300,function(){
			$("#carouselImg").attr('src',carouselArray[i++]);
		});
		$("#carouselImg").fadeIn(300);
		if(i===4){
			i=0;
		}
	},6500);

	$("#carouselChangeImg").on('click',function(){
		//TODO
	});
	$("#carouselChangeImg2").on('click',function(){
		//TODO
	});
	if($(window).scrollTop() > 100){
			$(".threeIconImg").css('transform','scale(1)');
			$(".threeIconImg").css('opacity','1');
	}
	if($(window).scrollTop()>500){
		$(".interactive_tableLamp").css('transform','scale(1)');
		$(".interactive_tableLamp").css('opacity','1');
		setTimeout(function(){
			$(".interactive_tableLamp img").attr('src','http://static.mukewang.com/static/img/02-computer2.png');
		},800);
	}
	if($(window).scrollTop()>900){
		$(".aboutRocket").css('opacity','1');
		$(".aboutRocket").css('transform','translateY(-60px)');
	}
	$(window).on('scroll',function(){
		if($(window).scrollTop() > 100){
			$(".threeIconImg").css('transform','scale(1)');
			$(".threeIconImg").css('opacity','1');
		}
		if($(window).scrollTop()>500){
			$(".interactive_tableLamp").css('transform','scale(1)');
			$(".interactive_tableLamp").css('opacity','1');
			setTimeout(function(){
				$(".interactive_tableLamp img").attr('src','http://static.mukewang.com/static/img/02-computer2.png');
			},800);
		}
		if($(window).scrollTop()>900){
			$(".aboutRocket").css('opacity','1');
			$(".aboutRocket").css('transform','translateY(-60px)');
		}
	});
	
});

