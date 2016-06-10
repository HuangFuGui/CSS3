define(['jquery'],function($){
	//构造函数
	function ScrollTo(opts){
		this.opts = $.extend({},ScrollTo.DEFAULTS,opts);
	}

	//在构造函数原型中添加函数
	ScrollTo.prototype.move = function(){
		$('html,body').animate({
			scrollTop:this.opts.dest
		},this.opts.speed);
	}

	ScrollTo.prototype.goStraightly = function(){
		$('html,body').scrollTop(0);
	}

	//ScrollTo默认参数（对象）
	ScrollTo.DEFAULTS = {
		dest:0,
		speed:500
	}

	//返回一个对象
	return {
		ScrollTo:ScrollTo
	}
})