$(function(){
	var cedao=$('#positionFixed>a').not('#positionFixed>a:last');
	//fixed出现和消失和楼层挑转
	$("#positionFixed").hide();
	$("#positionFixed>a").css({background:"",lineHeight:'999px'});
	var flag=true;
	var flag1=false;
	var now=0;
	$(window).scroll(function(){
		cedao.click(function(){
			var num=$(this).index();
	        var cc=document.body.scrollTop?document.body:document.documentElement;
			cedao.css({background:"",lineHeight:'999px'}).eq(num).css({background:"#e5004f",lineHeight:'20px',color:"white"});
			animate(cc,{scrollTop:$(".main-contentRepeat")[num].offsetTop},300,Tween.Linear);
		})
		//返回顶部
		$('#positionFixed>a:last').click(function(){
			$(this).css({background:"#e5004f",lineHeight:'20px',color:"white"});
			var cc=document.body.scrollTop?document.body:document.documentElement;
			animate(cc,{scrollTop:0},300,Tween.Linear);
	   });
		//图片按需加载
		$('.anxujiazai').each(function(i){
		if($(this).position().top<=($(window).height()+$(window).scrollTop())){
			$(this).find("img").each(function(index){
				$(this).attr("src",$(this).attr('data-src'));
			 })
		   }
	    })
	    //
		if($(".main-contentRepeat").eq(0).position().top>=$(window).scrollTop()+80){
			$("#positionFixed>a").css({background:"",lineHeight:'999px'});
		}
		if($(window).scrollTop()>=$(window).height()){
			/*if(flag1){*/
				$("#positionFixed").show();
				  /* flag1=false;
			       flag=true;
			    }*/
			
		}else{
			/*if(flag){*/
				$("#positionFixed").hide();
				/*flag=false;
				flag1=true;
			}*/
		}
		//alert($("#positionFixed>a").length)
		/*$("#positionFixed>a").click(function(){
			var index=$(this).index("#positionFixed>a");
			if(index==$("#positionFixed>a").length-1){
				var obj={tops:$(window).scrollTop()};
			   $(obj).animate({tops:1},{
 				speed:100,
 				step:function(){
			       $(window).scrollTop(obj.tops);
			     }
 			   });
			}else{
			   var obj={tops:$(".main-contentRepeat").eq(0).position().top}; 
 			   $(obj).animate({tops:$(".main-contentRepeat").eq(index).position().top},{
 				speed:100,
 				step:function(){
			       $(window).scrollTop(obj.tops);
			     }
 			    });
 			    now=index;
			}
			$("#positionFixed>a").css({background:"",lineHeight:'999px'}).eq(index+1).css({background:"#e5004f",lineHeight:'20px',color:"white"});*/
			//alert(index)
 	
 			
 			
 			//$(window).scrollTop($(".main-contentRepeat").eq(index).position().top);
 			
		//});
		$(".main-contentRepeat").each(function(i){
			if($(window).scrollTop()+60>=$(this).position().top){
				/*$(window).scrollTop($this.position().top);*/
				$("#positionFixed>a").css({background:"",lineHeight:'999px'}).eq(i).css({background:"#e5004f",lineHeight:'20px',color:"white"});
				now=i;
			}
		})
		//

	});
	//fixed
	$("#positionFixed>a").hover(function(){	
		$(this).css({background:"#e5004f",lineHeight:'20px',color:"white"});
	},function(){
		var index=$(this).index("#positionFixed>a");
		if(index!=now){
			$(this).css({background:"",lineHeight:'999px'});
		}
	})
	//input焦点
	$(".logoSouText").focus(function(){
		if($(this).val()=="塑形丝袜满赠推荐"){
			$(this).val("");
		}
	}).blur(function(){
		if($(this).val()==""){
			$(this).val("塑形丝袜满赠推荐");
		}
	})

	//我的银泰
	$('.myyin').hover(function(){
		$(".myyinnav").show();
		$(this).css({background:"#fff"})
		$(this).find('i').css({display:"block",zIndex:22});
	},function(){
		$(".myyinnav").hide();
		$(this).css({background:""})
		$(this).find('i').css({display:"none",zIndex:22});

	})
	//
	$(".logoBoxRightSon2A").hover(function(){
		$(".gouwuche").show();
	},function(){
		$(".gouwuche").hide();
	})
	//
	$(".topNavLeftSon1").hover(function(){
		$(this).css({backgroundPosition:"-224px -21px"});
	},function(){
		$(this).css({backgroundPosition:"-224px 7px"});
	})
	$(".topNavLeftsum").hover(function(){
		$(this).css({width:"124px",background:"#fff",zIndex:10})
		$(this).find('i').css({display:"block",zIndex:10});
		$(this).find('a').css({backgroundPosition:"-224px -81px"});
		$(".caomiaoweix").show();
	},function(){
		$(this).css({width:"",background:""})
		$(this).find('a').css({backgroundPosition:"-224px -51px"});
		$(".caomiaoweix").hide();
		$(this).find('i').css({display:"none",zIndex:""});
	})
	$(".topNavLeftsum1").hover(function(){
		$(this).css({width:"158px",background:"#fff",zIndex:1})
		$(this).find('i').css({display:"block",zIndex:1});
		$(this).find('.topNavLeftSon3').css({backgroundPosition:"0px -20px"});
		$(".caomiaoweix1").show();
	},function(){
		$(this).css({width:"",background:""})
		$(this).find('.topNavLeftSon3').css({backgroundPosition:" 0px 0px"});
		$(".caomiaoweix1").hide();
		$(this).find('i').css({display:"none",zIndex:""});
	})
	//
	$(".logo_prev").click(function(){
		var index=$(this).index(".logo_prev");
		$(".main-contentRepeatLf_logoSum").stop(true,true);
		$(".main-contentRepeatLf_logoSum").eq(index).animate({left:"-170px"},function(){
			$(".main-contentRepeatLf_logoSum").eq(index).find(".main-contentRepeatLf_logo1:first").insertAfter(
				$(".main-contentRepeatLf_logoSum").eq(index).find(".main-contentRepeatLf_logo1:last"))
			$(".main-contentRepeatLf_logoSum").eq(index).css({left:"0px"})
		})
		
	})
	$(".logo_next").click(function(){
		var index=$(this).index(".logo_next");
		$(".main-contentRepeatLf_logoSum").stop(true,true);
		$(".main-contentRepeatLf_logoSum").eq(index).find(".main-contentRepeatLf_logo1:last").insertBefore($(".main-contentRepeatLf_logoSum").eq(index).find(".main-contentRepeatLf_logo1:first"));
   	    $(".main-contentRepeatLf_logoSum").eq(index).css({left:"-170px"})
   	    $('.main-contentRepeatLf_logoSum').eq(index).animate({left:0})
		
	})
	//
	/*$(".main-CtbannerNext").hide()
	$(".main-CtbannerPrev").hide()*/
	/*alert($(".main-circle>li",".main-contentRepeatCt1").length);*/
	$(".main-CtbannerPrev",".main-contentRepeatCt1").click(function(){
		$(".main-circle>li",".main-contentRepeatCt1").removeClass("main-circleActive").eq(0).addClass("main-circleActive");
		$(".main-CtbannerBox",".main-contentRepeatCt1").animate({left:"0px"})
	})
	$(".main-CtbannerNext",".main-contentRepeatCt1").click(function(){
		$(".main-circle>li",".main-contentRepeatCt1").removeClass("main-circleActive").eq(1).addClass("main-circleActive");
		$(".main-CtbannerBox",".main-contentRepeatCt1").animate({left:"-390px"})
	})

	$(".main-circle>li",".main-contentRepeatCt1").eq(0).click(function(){
		$(".main-circle>li",".main-contentRepeatCt1").removeClass("main-circleActive").eq(0).addClass("main-circleActive");
		$(".main-CtbannerBox",".main-contentRepeatCt1").animate({left:"0px"})
	})
	$(".main-circle>li",".main-contentRepeatCt1").eq(1).click(function(){
		$(".main-circle>li",".main-contentRepeatCt1").removeClass("main-circleActive").eq(1).addClass("main-circleActive");
		$(".main-CtbannerBox",".main-contentRepeatCt1").animate({left:"-390px"})
	})
	$(".main-CtbannerPrev",".main-contentRepeatCt2").click(function(){
		$(".main-circle>li",".main-contentRepeatCt2").removeClass("main-circleActive").eq(0).addClass("main-circleActive");
		$(".main-CtbannerBox",".main-contentRepeatCt2").animate({left:"0px"})
	})
	$(".main-CtbannerNext",".main-contentRepeatCt2").click(function(){
		$(".main-circle>li",".main-contentRepeatCt2").removeClass("main-circleActive").eq(1).addClass("main-circleActive");
		$(".main-CtbannerBox",".main-contentRepeatCt2").animate({left:"-390px"})
	})

	$(".main-circle>li",".main-contentRepeatCt2").eq(0).click(function(){
		$(".main-circle>li",".main-contentRepeatCt2").removeClass("main-circleActive").eq(0).addClass("main-circleActive");
		$(".main-CtbannerBox",".main-contentRepeatCt2").animate({left:"0px"})
	})
	$(".main-circle>li",".main-contentRepeatCt2").eq(1).click(function(){
		$(".main-circle>li",".main-contentRepeatCt2").removeClass("main-circleActive").eq(1).addClass("main-circleActive");
		$(".main-CtbannerBox",".main-contentRepeatCt2").animate({left:"-390px"})
	})
	//
	$(".main-CtbannerPrev",".main-contentRepeatCt3").click(function(){
		$(".main-circle>li",".main-contentRepeatCt3").removeClass("main-circleActive").eq(0).addClass("main-circleActive");
		$(".main-CtbannerBox",".main-contentRepeatCt3").animate({left:"0px"})
	})
	$(".main-CtbannerNext",".main-contentRepeatCt3").click(function(){
		$(".main-circle>li",".main-contentRepeatCt3").removeClass("main-circleActive").eq(1).addClass("main-circleActive");
		$(".main-CtbannerBox",".main-contentRepeatCt3").animate({left:"-390px"})
	})

	$(".main-circle>li",".main-contentRepeatCt3").eq(0).click(function(){
		$(".main-circle>li",".main-contentRepeatCt3").removeClass("main-circleActive").eq(0).addClass("main-circleActive");
		$(".main-CtbannerBox",".main-contentRepeatCt3").animate({left:"0px"})
	})
	$(".main-circle>li",".main-contentRepeatCt3").eq(1).click(function(){
		$(".main-circle>li",".main-contentRepeatCt3").removeClass("main-circleActive").eq(1).addClass("main-circleActive");
		$(".main-CtbannerBox",".main-contentRepeatCt3").animate({left:"-390px"})
	})
	//
	$(".main-CtbannerPrev",".main-contentRepeatCt4").click(function(){
		$(".main-circle>li",".main-contentRepeatCt4").removeClass("main-circleActive").eq(0).addClass("main-circleActive");
		$(".main-CtbannerBox",".main-contentRepeatCt4").animate({left:"0px"})
	})
	$(".main-CtbannerNext",".main-contentRepeatCt4").click(function(){
		$(".main-circle>li",".main-contentRepeatCt4").removeClass("main-circleActive").eq(1).addClass("main-circleActive");
		$(".main-CtbannerBox",".main-contentRepeatCt4").animate({left:"-390px"})
	})

	$(".main-circle>li",".main-contentRepeatCt4").eq(0).click(function(){
		$(".main-circle>li",".main-contentRepeatCt4").removeClass("main-circleActive").eq(0).addClass("main-circleActive");
		$(".main-CtbannerBox",".main-contentRepeatCt4").animate({left:"0px"})
	})
	$(".main-circle>li",".main-contentRepeatCt4").eq(1).click(function(){
		$(".main-circle>li",".main-contentRepeatCt4").removeClass("main-circleActive").eq(1).addClass("main-circleActive");
		$(".main-CtbannerBox",".main-contentRepeatCt4").animate({left:"-390px"})
	})
	//
	$(".main-CtbannerPrev",".main-contentRepeatCt5").click(function(){
		$(".main-circle>li",".main-contentRepeatCt5").removeClass("main-circleActive").eq(0).addClass("main-circleActive");
		$(".main-CtbannerBox",".main-contentRepeatCt5").animate({left:"0px"})
	})
	$(".main-CtbannerNext",".main-contentRepeatCt5").click(function(){
		$(".main-circle>li",".main-contentRepeatCt5").removeClass("main-circleActive").eq(1).addClass("main-circleActive");
		$(".main-CtbannerBox",".main-contentRepeatCt5").animate({left:"-390px"})
	})

	$(".main-circle>li",".main-contentRepeatCt5").eq(0).click(function(){
		$(".main-circle>li",".main-contentRepeatCt5").removeClass("main-circleActive").eq(0).addClass("main-circleActive");
		$(".main-CtbannerBox",".main-contentRepeatCt5").animate({left:"0px"})
	})
	$(".main-circle>li",".main-contentRepeatCt5").eq(1).click(function(){
		$(".main-circle>li",".main-contentRepeatCt5").removeClass("main-circleActive").eq(1).addClass("main-circleActive");
		$(".main-CtbannerBox",".main-contentRepeatCt5").animate({left:"-390px"})
	})
	//
	$(".main-CtbannerPrev",".main-contentRepeatCt6").click(function(){
		$(".main-circle>li",".main-contentRepeatCt6").removeClass("main-circleActive").eq(0).addClass("main-circleActive");
		$(".main-CtbannerBox",".main-contentRepeatCt6").animate({left:"0px"})
	})
	$(".main-CtbannerNext",".main-contentRepeatCt6").click(function(){
		$(".main-circle>li",".main-contentRepeatCt6").removeClass("main-circleActive").eq(1).addClass("main-circleActive");
		$(".main-CtbannerBox",".main-contentRepeatCt6").animate({left:"-390px"})
	})

	$(".main-circle>li",".main-contentRepeatCt6").eq(0).click(function(){
		$(".main-circle>li",".main-contentRepeatCt6").removeClass("main-circleActive").eq(0).addClass("main-circleActive");
		$(".main-CtbannerBox",".main-contentRepeatCt6").animate({left:"0px"})
	})
	$(".main-circle>li",".main-contentRepeatCt6").eq(1).click(function(){
		$(".main-circle>li",".main-contentRepeatCt6").removeClass("main-circleActive").eq(1).addClass("main-circleActive");
		$(".main-CtbannerBox",".main-contentRepeatCt6").animate({left:"-390px"})
	})
	/*$(".main-circle>li").eq(1).click(function(){
		/*var index=$(this).index(".main-circle>li");
		$(".main-circle>li").removeClass("main-circleActive").eq(1).addClass("main-circleActive");
		$(".main-CtbannerBox").animate({left:"-390px"})
	})*/
	$(".main-CtbannerPrev").hover(function(){
		$(this).css({backgroundPosition:"left -60px"})
	},function(){
		$(this).css({backgroundPosition:"left top"})
	})
	$(".main-CtbannerNext").hover(function(){
		$(this).css({backgroundPosition:"right -60px"})
	},function(){
		$(this).css({backgroundPosition:"right top"})
	})
	$(".main-contentRepeatCt").hover(function(){
		$(this).find('.main-CtbannerPrev').animate({left:"0"})
		$(this).find('.main-CtbannerNext').animate({right:"0"})
	},function(){
		$(this).find('.main-CtbannerPrev').animate({left:"-30px"});
		$(this).find('.main-CtbannerNext').animate({right:"-30px"});
	})
	//
	$(".zhuangguiRight-titleUl>li").css({borderBottomColor:"#333"}).eq(0).css({borderBottomColor:"#e5004f"});
	$(".zhuangguiRight-titleUl>li>span").hide().eq(0).show();
	$(".zhuangguiRight-contentSon").hide().eq(0).show();
	$(".zhuangguiRight-titleUl>li").hover(function(){
		var index=$(this).index(".zhuangguiRight-titleUl>li");
		$(".zhuangguiRight-titleUl>li").css({borderBottomColor:"#333"}).eq(index).css({borderBottomColor:"#e5004f"});
		$(".zhuangguiRight-titleUl>li>a").css({fontWeight:"normal"}).eq(index).css({fontWeight:"bold"});
		$(".zhuangguiRight-titleUl>li>span").hide().eq(index).show();
		$(".zhuangguiRight-contentSon").hide().eq(index).show();
	},function(){})
	//特卖专区
	$(".chaozhitemaiLeft_content1").hide().eq(0).show();
	$(".chaozhitemaiLeft_titile>li>span").hide().eq(0).show();
	$(".chaozhitemaiLeft_titile>li").css({borderBottomColor:"#333"}).eq(0).css({borderBottomColor:"#e5004f"});
	$(".chaozhitemaiLeft_titile>li").hover(function(){
		/*alert($("this"))*/
		var index=$(this).index(".chaozhitemaiLeft_titile>li");
		$(".chaozhitemaiLeft_titile>li").css({borderBottomColor:"#333"}).eq(index).css({borderBottomColor:"#e5004f"});
		$(".chaozhitemaiLeft_titile>li>a").css({fontWeight:"normal"}).eq(index).css({fontWeight:"bold"});
		$(".chaozhitemaiLeft_titile>li>span").hide().eq(index).show();
		$(".chaozhitemaiLeft_content1").hide().eq(index).show();
	},function(){})
	//下拉菜单
	$('.sidenavErji').css({display:"none"});
	$('.sidenav>dl').hover(function(){
		clearInterval(timer1);
		var index=$(this).index('.sidenav>dl');
		$(this).find("dt").css({background:"#e5004f"})
		$(this).find("em").css({backgroundPosition:index*-17+"px  -130px"})
		$(this).find(".sidenavLeft>span").css({color:"#fff"})
		$(this).find(".sidenavRight>span").hide();
		$('.sidenavErji').eq(index).show();
	
	},function(){
		var index=$(this).index('.sidenav>dl');
		$(this).find("dt").css({background:"#333"})
		$(this).find("em").css({backgroundPosition:index*-17+"px  -112px"})
		$(this).find(".sidenavLeft>span").css({color:"#999"})
		$(this).find(".sidenavRight>span").show();
		$('.sidenavErji').eq(index).hide();
	})
	//banner
	$(".banner_pannels").fadeOut().eq(0).fadeIn();
	var num=0;
	function bannerMove(){
		num++;
		if(num==$(".banner_pannels").length){
			num=0;
		}
		$(".banner_pannels").fadeOut(500).eq(num).fadeIn(500);
		$(".banner_square>li").removeClass('banner_active').eq(num).addClass("banner_active");
	}
	var timer1=setInterval(bannerMove,2000)
	$("#bannerBox").hover(function(){
		clearInterval(timer1);
		$(".banner_prev").show();
		$(".banner_next").show();
	},function(){
		timer1=setInterval(bannerMove,2000)
		$(".banner_prev").hide();
		$(".banner_next").hide();
	})
	$(".banner_prev").hover(function(){
		$(this).css({backgroundPosition:"left -60px"})
	},function(){
		$(this).css({backgroundPosition:"left top"})
	})
	$(".banner_next").hover(function(){
		$(this).css({backgroundPosition:"right -60px"})
	},function(){
		$(this).css({backgroundPosition:"right top"})
	})
	$(".banner_square>li").hover(function(){
		var index=$(this).index(".banner_square>li");
		$(".banner_square>li").removeClass('banner_active').eq(index).addClass("banner_active");
		$(".banner_pannels").fadeOut(500).eq(index).fadeIn(500);
		num=index;
	},function(){

	})
	$(".banner_next").click(function(){
		bannerMove();
	})
	$(".banner_prev").click(function(){
		num--;
		if(num==-1){
			num=$(".banner_pannels").length-1;
		}
		$(".banner_pannels").fadeOut(500).eq(num).fadeIn(500);
		$(".banner_square>li").removeClass('banner_active').eq(num).addClass("banner_active");
	})
})