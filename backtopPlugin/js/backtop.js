//BackTop plugin
define(['jquery','scrollto'],function($,scrollto){

	//构造函数有两个参数，第一个是要使用BackTop插件的元素，第二个是相关参数
	function BackTop(el,opts){

		this.$el = $(el);
		this.opts = $.extend({},BackTop.DEFAULTS,opts);

		this.scroll = new scrollto.ScrollTo({
			dest:this.opts.dest,
			speed:this.opts.speed
		});

		this._checkPosition();   //记住写法,这里有括号

		if(this.opts.actionMode =='move'){
			//console.log(this);
			this.$el.on('click',$.proxy(this._move,this));   //记住写法，这里没括号
			//经调试发现function(){}这种写法一定会错。this一直指向this.$el，永久失效。
		}
		else{
			this.$el.on('click',$.proxy(this._goStraightly,this));
		}

		$(window).on('scroll',$.proxy(this._checkPosition,this));

	}

	
	BackTop.prototype._move = function(){
		this.scroll.move();
	}

	BackTop.prototype._goStraightly = function(){
		this.scroll.goStraightly();
	}

	BackTop.prototype._checkPosition = function(){
		if($(window).scrollTop()>this.opts.pos){
			this.$el.fadeIn();
		}
		else{
			this.$el.fadeOut();
		}
	}

	BackTop.DEFAULTS = {
		actionMode:'move',
		pos:0,
		dest:0,
		speed:500
	}

	//jq注册插件的写法！
	$.fn.extend({
		backtop:function(opts){
			return this.each(function(){
				new BackTop(this,opts);
			});
		}
	});

	return {
		BackTop:BackTop
	}
});