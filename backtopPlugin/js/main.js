requirejs.config({
	paths:{    //记住是paths
		'jquery':'jquery-2.0.0.min'
	}
});



requirejs(['jquery','scrollto'],function($,scrollto){
	
	var scroll = new scrollto.ScrollTo({
		 dest:2000,
		 speed:1000
	});
	
	$(".gotoLearnContainer").on('click',function(){
		scroll.move();
	});
});