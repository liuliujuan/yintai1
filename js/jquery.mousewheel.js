//添加滚轮事件
jQuery.fn.extend({
	mousewheel:function(up,down){
		this.each(function(index,obj){
			if(obj.attachEvent){ 
	obj.attachEvent("onmousewheel",scrollFn);  //IE、 opera 
	}else if(obj.addEventListener){ 
	obj.addEventListener("mousewheel",scrollFn,false);  //chrome,safari    -webkit
		obj.addEventListener("DOMMouseScroll",scrollFn,false);  //firefox     -moz
	} 
	function scrollFn(e){
		var ev=e||window.event;
		if(ev.preventDefault){
			ev.preventDefault();
		}else{
			ev.returnValue=false;
		}
		var val=ev.wheelDelta||ev.detail;
		if(val==3||val==-120){
			if(down){
				down.call(this);
			}
			
		}else if(val==-3||val==120){
			if(up){
				up.call(this);
			}
		}
	}
})
	}
})