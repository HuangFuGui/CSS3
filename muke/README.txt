1.demo总结：
	本demo模仿慕课网主页（http://www.imooc.com/）进行coding,资源大部分来自慕课网，代码全部从0开始，通过该demo的编写学习了CSS3的用法，进一步深入了解网页元素布局与设计。提高了代码编写能力。

2.demo在线演示链接：
	http://139.129.47.176/muke/index.html

3.CSS3学习总结：

	(1)transition,transform等CSS3属性各浏览器全适配：
		-webkit-transition:opacity 500ms;
		-moz-transition:opacity 500ms;
		-ms-transition:opacity 500ms;
		-o-transition:opacity 500ms;
		transition:opacity 500ms;

	(2)背景颜色渐变：
		background:-webkit-linear-gradient(top left,rgba(0,0,0,0.7),rgba(0,0,0,0));
			webkit：适配浏览器
			top left：渐变起始位置
			rgba(0,0,0,0.7)：渐变起始颜色
			rgba(0,0,0,0)：渐变结束颜色

	(3)平滑过渡transition:
		transition:all 400ms ease-in;
			all:平滑过渡所有变化
			400ms:过渡时间
			ease-in/ease-out: 先快后慢/先慢后快

	(4)平滑过渡延迟transition-delay：
		transition-delay:500ms;   
			比正常情况延迟500ms

	(5)transform:
		transform:scale(0.01);
			大小为原来的0.01
		transform:scale(1);
			大小为原来一样
		transform-origin:left top;
			若元素有hover变化，则变化基准点为元素的left top点
			该属性要在transition之前引用,点明hover(一般都是hover)变化的基准点
		transform:skewX(-30deg);
			元素整体向右倾斜30度
		transform:translateY(-50px);
			元素整体向上平移50px

4.*元素定位：

	父元素：
		position:relative;  
			// 相对定位(一般在需要的时候才加上)，相当于其子元素绝对定位的相对点
		子元素：
			position:absolute;   // 绝对定位
			top:70px;
			left:0px;
	*则子元素是相对于父元素的绝对定位，直接依赖于父元素，与其他元素的位置无关，更不会影响其他元素的定位。

	ul{
		//选中ul下的第一个li
		li:nth-of-type(1){
		}

		//选中ul下的第二个li
		li:nth-of-type(2){
		}
	}

	*overflow:hidden;
		若元素设置了overflow:hidden;则超过元素范围的子元素一律隐藏！

	background-image: url("...");
	background-repeat: no-repeat;
	background-position: 6px -40px;  //设置或改变背景图片所在的位置范围

5.用koala软件将sass实时编译为css：

	sass支持嵌套,变量等，方便编写
	@mixin  定义CSS3函数
	@import "abc"; 引用写好的abc.scss文件
	@include 引用写好的(mixin)函数
	@extend ...   元素继承...的属性

	*用sass可将css实现模块化,分开不同模块编写其.scss文件,要用时再import,方便维护。

6.图标文字：

	https://icomoon.io/app/#/select

	可将小图标当作文字一样处理：
		background-color:#d0d6d9;
		font-size:30px;
		line-height:$toolbar-size;