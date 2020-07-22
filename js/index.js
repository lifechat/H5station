//合作方轮播
var g_bMoveLeft=true;
var g_oTimer=null;
var g_oTimerOut=null;

var g_iSpeed=3;

window.onload=function ()
{
	stm_scroll_to_top();
	var oDiv=document.getElementById('roll');
	var oUl=oDiv.getElementsByTagName('ul')[0];
	var aLi=oUl.getElementsByTagName('li');
	var aA=oDiv.getElementsByTagName('a');
	
	var i=0;
	
	var str=oUl.innerHTML+oUl.innerHTML;
	
	oUl.innerHTML=str;
	
	oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
	
	for(i=0;i<aLi.length;i++)
	{
		aLi[i].onmouseover=function ()
		{
			stopMove();
		};
		
		aLi[i].onmouseout=function ()
		{
			startMove(g_bMoveLeft);
		};
	}
	
	aA[0].onmouseover=function ()
	{
		startMove(true);
	};
	
	aA[1].onmouseover=function ()
	{
		startMove(false);
	};
	
	startMove(true);
};

function startMove(bLeft)
{
	g_bMoveLeft=bLeft;
	
	if(g_oTimer)
	{
		clearInterval(g_oTimer);
	}
	g_oTimer=setInterval(doMove, 30);
}

function stopMove()
{
	clearInterval(g_oTimer);
	g_oTimer=null;
}

function doMove()
{
	var oDiv=document.getElementById('roll');
	var oUl=oDiv.getElementsByTagName('ul')[0];
	var aLi=oUl.getElementsByTagName('li');
	
	var l=oUl.offsetLeft;
	
	if(g_bMoveLeft)
	{
		l-=g_iSpeed;
		if(l<=-oUl.offsetWidth/2)
		{
			l+=oUl.offsetWidth/2;
		}
	}
	else
	{
		l+=g_iSpeed;
		if(l>=0)
		{
			l-=oUl.offsetWidth/2;
		}
	}
	
	oUl.style.left=l+'px';
}
//滚轮事件
$(window).scroll(function () {
	if ($(".pearl_arrow_top").length) {
		var trigger_height = $(window).scrollTop() + $(window).height() + $('.stm-footer').height();
		if (trigger_height > $(document).height()) {
			$(".pearl_arrow_top").addClass("arrowShow");
		}
		if ($(window).scrollTop() === 0) {
			$(".pearl_arrow_top").removeClass("arrowShow");
		}
	}
});
//一键向上
function stm_scroll_to_top() {
	$(".pearl_arrow_top").on("click", function () {
		var scroll_pos = 0;
		$('html, body').animate({ scrollTop: scroll_pos }, '5000', function () {
			$(".arrow_top").removeClass("arrowShow");
		});
	});
}
