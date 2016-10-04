$(function(){
	$.ajax({
		type: "GET",
		url: "ajax/message.json",
		dataType: "json",
		success: function(data){
			for(var i in data.about_info){
				$("#about_info").append("<p>"+data.about_info[i]+"</p>");
			}
			$("#exp_info").append("<p>"+data.exp_info+"</p>");
			for(var i in data.contact_info){
				$("#contact_info").append("<p>"+data.contact_info[i]+"</p>");
			}
		}
	});
    $('#dowebok').fullpage({
		scrollingSpeed: 400,
		css3: true,
		resize: true,
		anchors: ["page1","page2","page3","page4","page5","page6","page7"],
		verticalCentered: false,
		afterRender: function(){
			$("#home").css({"display":"inline-block"}).addClass("home_zoom");
			$("aside").css({"top":($(".active").height()-$("aside").height())/2});
			$("header").before("<div id='header' style='opacity:0'></div>");	
			$("#home_head").css({"margin-top":"70px"});
			$("header").animate({opacity:"1"},1000,function(){
				$("#header").css({"opacity":"0.9"});
				$("#home_info1").fadeIn(700,function(){
					$(this).next().animate({width:"800px"},700,function(){
						$("#home_info2").fadeIn(450,function(){
							$(this).next().fadeIn(450,function(){
								$(this).next().fadeIn(450,function(){
									$(this).next().fadeIn(450,function(){
										$("aside").fadeIn(300);
									});
								});
							});
						});
					});
				});
			});
		},
		afterLoad: function(anchorLink,index){
			if(index==1){
				$("aside a").eq(0).addClass("selected").siblings().removeClass("selected");
			}
			if(index==7){
				$("aside a").eq(6).addClass("selected").siblings().removeClass("selected");
			}
			if(index==2){
				$("aside a").eq(1).addClass("selected").siblings().removeClass("selected");
				$("#about_content h1").after("<div class='title_en'><h2>· About me ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});
				$("#about_info").animate({width:"800px",marginTop:"0",marginBottom:"0"},700,'easeOutElastic',function(){
					$("#about_info p").eq(0).animate({bottom:"0"},700,function(){
						$("#about_info p").eq(1).animate({bottom:"0"},700,function(){
							$("#about_info p").eq(2).animate({bottom:"0"},700,function(){
								$("#about_info p").eq(3).animate({bottom:"0"},700);
							});
						});
					});
				});
			}
			if(index==3){
				$("aside a").eq(2).addClass("selected").siblings().removeClass("selected");
				$("#skill_content h1").after("<div class='title_en'><h2>· Skill ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});	
				$(".skill_list_content").addClass("skill_scale");
			}
			if(index==4){
				$("aside a").eq(3).addClass("selected").siblings().removeClass("selected");
				$("#exp_content h1").after("<div class='title_en'><h2>· The Road Skill ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});	
				var i=-1;
				$(".exp_scale").each(function() {
					var $this=$(this);
					if(!$this.hasClass("b_to_t")){
						i++;
						setTimeout(function(){
					   $this.addClass("b_to_t");
					   },200*i);
					}
                });
				$("#exp_list_to").fadeIn(800).delay(500).fadeTo(300,0.3);
			}
			if(index==5){
				$("aside a").eq(4).addClass("selected").siblings().removeClass("selected");
				$("#demo_content h1").after("<div class='title_en'><h2>· Demo ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});	
				var i=-1;
				$(".demo_scale").each(function() {
					var $this=$(this);
					if(!$this.hasClass("b_to_t")){
						i++;
						setTimeout(function(){
					   $this.addClass("b_to_t");
					   },200*i);
					}
				})
			}
			if(index==6){
				$("aside a").eq(5).addClass("selected").siblings().removeClass("selected");
				$("#contact_content h1").after("<div class='title_en'><h2>· Contact me ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});
				var j=-1;
				setTimeout(function(){
						$(".contact_scale").each(function(){
							var $this=$(this);
							if(!$this.hasClass("fade_in")){
								j++;
								setTimeout(function(){
					   				$this.addClass("fade_in");
					   			},350*j);
							}
						});
				},70);
			}
		}, onLeave:function(index , nextIndex, direction){
			if(index==2||index==3||index==4||index==5||index==6){
				$(".title_en").remove();	
			}
		}
	});
});
//顶部标题文字切换
	$("#header_p").mouseover(function(){
		$("#header_p1").html("Resume");
		$("#header_p2").html("前端工程师");
	}).mouseout(function(){
		$("#header_p1").html("James");
		$("#header_p2").html("Personal Resume");
	})
//侧边导航文字切换
	$("aside a").hover(function(){
		$(this).find("b").fadeToggle(200,"easeInOutCubic");
	})
// 头像切换
	$("#home_photo2").hover(function(){
		$(this).fadeTo(800,1);
		},function(){
			$(this).stop(true,false).fadeTo(800,0);
	});
// 技能明细切换
	$(".skill_icon").click(function(){
		$(".skill_int").each(function(){
			if($(this).is(":visible")){
				$(this).slideUp(200);
				$(this).prev().removeClass("skill_flag_scale");
			}
		});
		if($(this).siblings(".skill_int").is(":hidden")){
			$(this).siblings(".skill_int").slideDown(400);
			$(this).siblings(".skill_flag").addClass("skill_flag_scale");
		}else{
			$(this).siblings(".skill_int").slideUp(200);
			$(this).siblings(".skill_flag").removeClass("skill_flag_scale");
		}
	})
// 图片轮播
	$("#exp_list_slider").width($(".exp_list").width());
	$("#exp_list_content").width($(".exp_list").width()*3);
	$("#exp_list_slider_content").mouseenter(function(){
		$("#exp_list_to").stop(true,false).fadeTo(700,1);
	}).mouseleave(function(){
		$("#exp_list_to").stop(true,false).fadeTo(700,0.1);
	})
	var page=1;
	$("#exp_timeline a").click(function(){
		$("#exp_list_content").stop(true,false).animate({left:-$(".exp_list").width()*$(this).index()},2000,"easeInOutCubic");
		page=$(this).index()+1;
		});
	$("#exp_list_toleft").click(function()
    {
		if(!$("#exp_list_content").is(":animated")){
			if(page==1){
				$("#exp_list_content").animate({left:"+=50"},200,function(){
					$(this).animate({left:"-=50"},200);
				});
				return false;
			}	
			$("#exp_list_content").animate({left:"+="+$(".exp_list").width()});
			page--;
		}
	});
	$("#exp_list_toright").click(function(){
		if(!$("#exp_list_content").is(":animated")){
			if(page==3){
				$("#exp_list_content").animate({left:"-=50"},200,function(){
					$(this).animate({left:"+=50"},200);
				});
				return;
			}
			$("#exp_list_content").animate({left:"-="+$(".exp_list").width()});
			page++;
		}
	});
// 时光轴
	var x=10;
	var y=20;
	$("#exp_timeline a").mouseover(function(e){
		this.aa=this.title;
		this.title="";
		$("body").append("<div class='exp_timeline_title'>"+this.aa+"</div>");	
		$(".exp_timeline_title").css({
			"top":e.pageY+y+"px",
			"left":e.pageX+x+"px"
		}).show("fast");
	}).mouseout(function(){
		this.title=this.aa;
		$(".exp_timeline_title").remove();
	}).mousemove(function(e){
		$(".exp_timeline_title").css({
			"top":e.pageY+y+"px",
			"left":e.pageX+x+"px"
		});
	}).click(function(){
		return false;
	});

//访客输入时input获取焦点
$('.input_name>input').focus(function () {
	//console.log($('.input_name>span'));
	$('.input_name>span').css('webkitTransform','translateX(-55px)');
});
//判断内容是否为空，空的话不位移
$('.input_name>input').mouseleave(function () {
	if($('.input_name>input').val()==""){
		$('.input_name>span').css('webkitTransform','translateX(0px)');
	}
});

//访客输入时input获取焦点
$('.input_email>input').focus(function () {
	//console.log($('.input_email>span'));
	$('.input_email>span').css('webkitTransform','translateX(-55px)');
});
//判断内容是否为空，空的话不位移
$('.input_email>input').mouseleave(function () {
	if($('.input_email>input').val()==""){
		$('.input_email>span').css('webkitTransform','translateX(0px)');
	}
});


$(".major-icons li").mouseenter(function () {
	$(".major-icons li").siblings().find(".des").hide();
	$(this).find(".des").toggle();
});
$(".major-icons li").mouseleave(function () {
	$(".major-icons li .des").hide();
});

$(".conimg").mouseenter(function () {
	$(".mask").hide();
	$(this).find(".mask").fadeIn(800);
})
$(".conimg").mouseleave(function () {
	$(".mask").fadeOut(500);
});

//更多作品墙
$(function() {
	var timer = null;
	$(".morebox").mouseenter(function() {
		clearTimeout(timer);
		var that = $(this);
		timer = setTimeout(function() {
			that.find("a").each(function(index,ele){
				setTimeout(function(){
					$(ele).stop().animate({right:0},200);
				},50*index);
			})

		},200)
	}).mouseleave(function() {
		if(timer) {
			clearTimeout(timer);
		}
		$(this).find("a").each(function(index,ele) {
			setTimeout(function(){
				$(ele).stop().animate({right:-110},200);
			},50*index);
		})
	})

})

//内容适应居中
		var size=function() {
			$("aside").css({"top": ($(".active").height() - $("aside").height()) / 2});
			$("#home_content").css({"padding-top": ($(".active").height() - $("#home_content").height()) / 6});
			$("#about_content").css({"padding-top": ($(".active").height() - $("#about_content").height()) / 6});
			$("#skill_content").css({"padding-top": ($(".active").height() - $("#skill_content").height()) / 10});
			$("#exp_content").css({"padding-top": ($(".active").height() - $("#exp_content").height()) / 10});
			$("#demo_content").css({"padding-top": ($(".active").height() - $("#demo_content").height()) / 10});
			;
		};
		size();


$(function(){
	var index=-1;

	var timer=null;
	$(".breath_light>li").eq(4).addClass("current");
	timer=setInterval(function(){
		if(index>=4){
			index=0;
			$(".breath_light>li").eq(index).addClass("current").siblings().removeClass("current");
			$(".breath_light>li").eq(index).css("zIndex",100).siblings().css("zIndex",0);
		}
			index++;
			$(".breath_light>li").eq(index).addClass("current").siblings().removeClass("current");
			$(".breath_light>li").eq(index).css("zIndex",100).siblings().css("zIndex",0);

	},6000);
	$(".sbt").click(function () {
		var clientname=$('.clientname').val();
		var clientemail=$('.clientemail').val();
		var clientmsg=$('.clientmsg').val();
		if(clientname!=""){
			$(".thank").html("Thanks for your coming , "+clientname);
			$(".thank").show(800);
		}
		$.ajax({
			type:'POST',
			url:"myphp.php",
			success: function (data) {
				console.log(data);
			}
		})
	});
});


