1.demo�ܽ᣺
	��demoģ��Ľ������ҳ��http://www.imooc.com/������coding,��Դ�󲿷�����Ľ����������ȫ����0��ʼ��ͨ����demo�ı�дѧϰ��CSS3���÷�����һ�������˽���ҳԪ�ز�������ơ�����˴����д������

2.demo������ʾ���ӣ�
	http://139.129.47.176/muke/index.html

3.CSS3ѧϰ�ܽ᣺

	(1)transition,transform��CSS3���Ը������ȫ���䣺
		-webkit-transition:opacity 500ms;
		-moz-transition:opacity 500ms;
		-ms-transition:opacity 500ms;
		-o-transition:opacity 500ms;
		transition:opacity 500ms;

	(2)������ɫ���䣺
		background:-webkit-linear-gradient(top left,rgba(0,0,0,0.7),rgba(0,0,0,0));
			webkit�����������
			top left��������ʼλ��
			rgba(0,0,0,0.7)��������ʼ��ɫ
			rgba(0,0,0,0)�����������ɫ

	(3)ƽ������transition:
		transition:all 400ms ease-in;
			all:ƽ���������б仯
			400ms:����ʱ��
			ease-in/ease-out: �ȿ����/�������

	(4)ƽ�������ӳ�transition-delay��
		transition-delay:500ms;   
			����������ӳ�500ms

	(5)transform:
		transform:scale(0.01);
			��СΪԭ����0.01
		transform:scale(1);
			��СΪԭ��һ��
		transform-origin:left top;
			��Ԫ����hover�仯����仯��׼��ΪԪ�ص�left top��
			������Ҫ��transition֮ǰ����,����hover(һ�㶼��hover)�仯�Ļ�׼��
		transform:skewX(-30deg);
			Ԫ������������б30��
		transform:translateY(-50px);
			Ԫ����������ƽ��50px

4.*Ԫ�ض�λ��

	��Ԫ�أ�
		position:relative;  
			// ��Զ�λ(һ������Ҫ��ʱ��ż���)���൱������Ԫ�ؾ��Զ�λ����Ե�
		��Ԫ�أ�
			position:absolute;   // ���Զ�λ
			top:70px;
			left:0px;
	*����Ԫ��������ڸ�Ԫ�صľ��Զ�λ��ֱ�������ڸ�Ԫ�أ�������Ԫ�ص�λ���޹أ�������Ӱ������Ԫ�صĶ�λ��

	ul{
		//ѡ��ul�µĵ�һ��li
		li:nth-of-type(1){
		}

		//ѡ��ul�µĵڶ���li
		li:nth-of-type(2){
		}
	}

	*overflow:hidden;
		��Ԫ��������overflow:hidden;�򳬹�Ԫ�ط�Χ����Ԫ��һ�����أ�

	background-image: url("...");
	background-repeat: no-repeat;
	background-position: 6px -40px;  //���û�ı䱳��ͼƬ���ڵ�λ�÷�Χ

5.��koala�����sassʵʱ����Ϊcss��

	sass֧��Ƕ��,�����ȣ������д
	@mixin  ����CSS3����
	@import "abc"; ����д�õ�abc.scss�ļ�
	@include ����д�õ�(mixin)����
	@extend ...   Ԫ�ؼ̳�...������

	*��sass�ɽ�cssʵ��ģ�黯,�ֿ���ͬģ���д��.scss�ļ�,Ҫ��ʱ��import,����ά����

6.ͼ�����֣�

	https://icomoon.io/app/#/select

	�ɽ�Сͼ�굱������һ������
		background-color:#d0d6d9;
		font-size:30px;
		line-height:$toolbar-size;