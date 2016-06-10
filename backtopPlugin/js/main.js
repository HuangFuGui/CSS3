requirejs.config({
	paths:{    //记住是paths
		'jquery':'jquery-2.0.0.min'
	}
});


/*
requirejs(['jquery','scrollto'],function($,scrollto){
	
	var scroll = new scrollto.ScrollTo({
		 dest:2000,
		 speed:1000
	});
	
	$(".gotoLearnContainer").on('click',function(){
		scroll.move();
	});

});*/

requirejs(['jquery','backtop'],function($,backtop){

	/*var bt = new backtop.BackTop($(".gotoLearnContainer"),{
		actionMode:'move',
		pos:0,
		dest:0,
		speed:2000
	});*/

	$(".test").backtop({
		actionMode:'move',
		pos:0,
		dest:0,
		speed:1000
	});

})