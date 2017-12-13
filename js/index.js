define(['jquery'], function() {
	return {
		ajax: (function() {
			$.ajax({
				type: "json",
				url: "php/index.php",
				/*async:true*/
			}).done(function(d) {
				var d = JSON.parse(d);
				var url = null;
				var price = null;
				var title = null;
				var html = null;
				for(var i = 0; i < d.length; i++) {
					url = d[i].url;
					price = d[i].price;
					title = d[i].title;
					html = ('<li>' +
						'<div class="image">' +
						'<a href="detalis.html"><img '+
						'number="'+i+'"'+
						'src="'+d[i].url+'"'+
						'title="'+d[i].title+'"'+
						'price="'+d[i].price+'"'+
						'></a>' +
						'</div>' +
						'<div class="explain">' +
						'<i>[包邮]</i>' +
						'<a class="title" href="detali.html">' + title + '</a>' +
						'<span>已售：XXX</span>' +
						'</div>' +
						'<div class="pirce">' +
						'<i>￥</i>' +
						'<b>' + price + '</b>' +
						'<a href="detail.html" class="cart">加入购物车</a>' +
						'</div>' +
						'</li>');
					$('#goods ul').eq(0).append(html)

				}
			});
		})(),

		/*定时器*/
		timer: (function() {
			var date1 = new Date(2017,12,28,00,00,00);
			var date2 = null;
			var timer = null;
			var day = null
			var hours = null;
			var minutes = null;
			var seconds = null;
			var time = null;
			timer = setInterval(function() {
				date2 = new Date();
				time = date1.getTime() - date2.getTime();
				seconds = parseInt(time / 1000 % 60);
				minutes = parseInt(time / 60000 % 60);
				hours = parseInt(time / 3600000 % 24);
				day = parseInt(time / 86400000);
				document.getElementsByClassName('update-timer')[0].getElementsByClassName('day')[0].innerHTML = day;
				document.getElementsByClassName('update-timer')[0].getElementsByClassName('hours')[0].innerHTML = hours;
				document.getElementsByClassName('update-timer')[0].getElementsByClassName('minutes')[0].innerHTML = minutes;
				document.getElementsByClassName('update-timer')[0].getElementsByClassName('seconds')[0].innerHTML = seconds;
			}, 500)
		})(),

		/*下拉框在nav的最右边签到的的地方*/
		list_show: (function() {
			$('#nav .sign').eq(0).mouseover(function(){
				$('#nav .sign .detail').eq(0).stop(true).animate({height:150,width:180,right:-20})
			});
			$('#nav .sign').eq(0).mouseout(function(){
				
				$('#nav .sign .detail').eq(0).stop(true).animate({height:0,width:110,right:0})
			})
		})(),
		
		
		/*轮播图 +tab切换*/
		lunbo:(function(){
			var i=null;
			var $timer=null;
			var length=null;
			$('#banner .banner-main').eq(0).mouseover(function(){
				clearInterval($timer);
				$('#banner .black').show()
			});
			$('#banner .banner-main').eq(0).mouseout(function(){
				clearInterval($timer);
				$timer=setInterval(function(){
				if($('#banner .banner-tab li.active').index()==$('#banner .banner-tab li').length-1){
				$('#banner .banner-lists li').stop(true,true).animate({opacity:0},500);
				$('#banner .banner-lists li').eq(0).stop(true,true).animate({opacity:1},500);
				$('#banner .banner-tab li').removeClass('active');
				$('#banner .banner-tab li').eq(0).addClass('active')
				}else{
					length=$('#banner .banner-tab li.active').index()+1;
				$('#banner .banner-lists li').stop(true,true).animate({opacity:0},500);
				$('#banner .banner-lists li').eq(length).stop(true,true).animate({opacity:1},500);
				$('#banner .banner-tab li').removeClass('active');
				$('#banner .banner-tab li').eq(length).addClass('active')					
				}
				},2000);
				$('#banner .black').hide()
			});
			/*for(i=0;i<$('#banner .banner-lists li').length;i++){
				$('#banner .banner-lists li').eq(i).click(function(){
					$('#banner .banner-lists li')
				})
			}*/
			$('#banner .banner-tab li').click(function(){
				$('#banner .banner-lists li').stop(true,true).animate({opacity:0},500);
				$('#banner .banner-lists li').eq($(this).index()).stop(true,true).animate({opacity:1},500);
				$('#banner .banner-tab li').removeClass('active');
				$('#banner .banner-tab li').eq($(this).index()).addClass('active')
			});
			
			$('#banner .banner-move .black-1').click(function(){
				if($('#banner .banner-tab li.active').index()==0){
				$('#banner .banner-lists li').stop(true,true).animate({opacity:0},500);
				$('#banner .banner-lists li').eq($('#banner .banner-tab li').length-1).stop(true,true).animate({opacity:1},500);
				$('#banner .banner-tab li').removeClass('active');
				$('#banner .banner-tab li').eq($('#banner .banner-tab li').length-1).addClass('active')
				}else{
					$('#banner .banner-lists li').stop(true,true).animate({opacity:0},500);
				$('#banner .banner-lists li').eq($('#banner .banner-tab li.active').index()-1).stop(true,true).animate({opacity:1},500);
				$('#banner .banner-tab li').removeClass('active');
				$('#banner .banner-tab li').eq($('#banner .banner-tab li.active').index()-1).addClass('active')					
				}
			});
			$('#banner .banner-move .black-2').click(function(){
				if($('#banner .banner-tab li.active').index()==$('#banner .banner-tab li').length-1){
				$('#banner .banner-lists li').stop(true,true).animate({opacity:0},500);
				$('#banner .banner-lists li').eq(0).stop(true,true).animate({opacity:1},500);
				$('#banner .banner-tab li').removeClass('active');
				$('#banner .banner-tab li').eq(0).addClass('active')
				}else{
					length=$('#banner .banner-tab li.active').index()+1;
				$('#banner .banner-lists li').stop(true,true).animate({opacity:0},500);
				$('#banner .banner-lists li').eq(length).stop(true,true).animate({opacity:1},500);
				$('#banner .banner-tab li').removeClass('active');
				$('#banner .banner-tab li').eq(length).addClass('active')					
				}
			});
			
			$timer=setInterval(function(){
				if($('#banner .banner-tab li.active').index()==$('#banner .banner-tab li').length-1){
				$('#banner .banner-lists li').stop(true,true).animate({opacity:0},500);
				$('#banner .banner-lists li').eq(0).stop(true,true).animate({opacity:1},500);
				$('#banner .banner-tab li').removeClass('active');
				$('#banner .banner-tab li').eq(0).addClass('active')
				}else{
					length=$('#banner .banner-tab li.active').index()+1;
				$('#banner .banner-lists li').stop(true,true).animate({opacity:0},500);
				$('#banner .banner-lists li').eq(length).stop(true,true).animate({opacity:1},500);
				$('#banner .banner-tab li').removeClass('active');
				$('#banner .banner-tab li').eq(length).addClass('active')					
				}
				},3000)				
		})(),
		
		/*吸顶效果*/
		scroll:(function(){
			$(window).scroll(function(){
				if($(window).scrollTop()>200){
					$('#move-nav').show()
				}else{
					$('#move-nav').hide()
				}
			})
		})(),
		
		
		/*侧边栏分享*/
		left_list:(function(){
			$('#left-list').eq(0).mouseover(function(){
				$('#left-list .list').eq(0).stop(true).animate({left:0},0)
			});
			$('#left-list').eq(0).mouseout(function(){
				$(this).show()
				$('#left-list .list').eq(0).stop(true).animate({left:-50},0)
			})
		})(),
		
		
	}
})

/**/