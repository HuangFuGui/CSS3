define(['jquery'],function($){

	/*构造函数，opts为用户传进来的参数（为对象，可有可无）*/
	function ScrollTo(opts){
		//将opts参数覆盖默认参数去生成新的对象{}返回给this.opts
		this.opts = $.extend({},ScrollTo.DEFAULTS,opts);  
		this.$el = $('html,body');
	}
	//将所有的方法添加在构造函数的原型上
	ScrollTo.prototype.move = function(){
		
		//console.log(this);
		//控制台打出this指向的是向上的按钮，但是实际希望this指向的是构造函数的实例
		
		var opts = this.opts,
			dest = opts.dest;

		if($(window).scrollTop()!=dest){
			if(!this.$el.is(':animated')){	console.log("执行滚动");
				
				this.$el.animate({
					scrollTop:dest,   //scrollTop到指定位置
				},opts.speed);   //滚动时间

			}
		}

	}

	ScrollTo.prototype.go = function(){
		var dest = this.opts.dest;
		if($(window).scrollTop()!=dest){
			this.$el.scrollTop(dest);  //scrollTop到指定位置
		}
		
	};

	/*构造函数默认的参数*/
	ScrollTo.DEFAULTS = {
		dest:0,  //滚动目的地
		speed:800   //滚动速度
	};	

	/*返回一个对象*/
	return {
		ScrollTo:ScrollTo   //对象属性名为ScrollTo,对象值为ScrollTo的构造函数
	};

});