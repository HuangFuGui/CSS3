1.Sass的基础知识:
	将sass编译成css   koala工具的使用
	koala下载：http://koala-app.com/index-zh.html
	新建filename.scss的文件并将其拖拽到koala软件中，实时将sass编译为css
	@extend  ----->  Sass继承属性

2.requirejs:
	js模块化管理！
	<script src="js/require.js" data-main="js/main"></script>:
		data-main="js/main"为入口文件，即require.js加载完毕后立刻调用的文件

3.使用背景图片的方式
	开发简单，但是维护起来不方便。

4.使用图表字体的方式
	https://icomoon.io/app/#/select
	Sublime注释键已修改为：ctrl+d
	a标签内的**所有子元素**都是绝对定位的，所以a标签本身应为相对定位成为一个相对点。
	图标字体可以像文字一样处理：
		background-color:#d0d6d9;
		font-size:30px;
		line-height:$toolbar-size;

5.返回顶部js插件：
