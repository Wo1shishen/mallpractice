(function() {
	$('#nav .sign').eq(0).mouseover(function() {
		$('#nav .sign .detail').eq(0).stop(true).animate({
			height: 150,
			width: 180,
			right: -20
		})
	});
	$('#nav .sign').eq(0).mouseout(function() {

		$('#nav .sign .detail').eq(0).stop(true).animate({
			height: 0,
			width: 110,
			right: 0
		})
	})
})();

(function() {
	var e = null;
	var x = null;
	var y = null;
	var X = null;
	var Y = null;
	$('#goods-detail .bigbox').eq(0).mouseover(function(e) {
		$('#goods-detail .bigbox .minbox').eq(0).show();
		$('#goods-detail .bigglass').eq(0).show();
		$(this).mousemove(function(e) {
			e = e || window.event;
			X = $('#goods-detail .bigbox').offset().left - $('html').scrollLeft();
			Y = $('#goods-detail .bigbox').offset().top - $('html').scrollTop();
			x = parseInt(e.clientX - X - 50);
			y = e.clientY - Y - 50;
			if(x < 0) {
				x = 0
			} else if(x > 200) {
				x = 200
			};
			if(y < 0) {
				y = 0
			} else if(y > 200) {
				y = 200
			};

			$('#goods-detail .bigbox .minbox').eq(0).css({
				left: x,
				top: y
			});
			$('#goods-detail .bigglass img').eq(0).css({
				left: -3 * x,
				top: -3 * y
			})
		})
	});
	$('#goods-detail .bigbox').eq(0).mouseout(function() {
		$('#goods-detail .bigbox .minbox').eq(0).hide();
		$('#goods-detail .bigglass').eq(0).hide()
	});
})();

(function() {
	$.ajax({
		type: "json",
		url: "php/detail.php",
		/*async:true*/
	}).done(function(d) {
		var x = null;
		var d = JSON.parse(d);
		for(var i = 0; i < d.length; i++) {
			var $urls = d[i].url;
			var $title = d[i].title;
			var $price = d[i].price;
			html = ('<li><img ' +
				'number="' + i + '"' +
				'src="' + d[i].url + '"' +
				'title="' + d[i].title + '"' +
				'price="' + d[i].price + '"' +
				'></li>');
			$('#goods-detail .goods-list ul').eq(0).append(html)
		}
		$urls = d[0].url;
		$price = d[0].price;
		$title = d[0].title;

		$('#goods-detail .bigbox img').eq(0).attr({
			src: $urls,
			number: 0
		});
		$('#goods-detail .bigglass img').eq(0).attr({
			src: $urls
		});
		$('#goods-detail .center .goods-title a').eq(0).text($title);
		$('#goods-detail .center .goods-price span').eq(0).text($price);
		$('#goods-detail .center .num').eq(0).text(1);

		$('#goods-detail .goods-list ul li img').click(function() {
			$('#goods-detail .bigbox img').eq(0).attr({
				src: $(this).attr("src"),
				number: $(this).attr("number")
			});
			$('#goods-detail .bigglass img').eq(0).attr({
				src: $(this).attr("src")
			});
			$('#goods-detail .center .goods-title a').eq(0).text($(this).attr("title"));
			$('#goods-detail .center .goods-price span').eq(0).text($(this).attr("price"));
			$('#goods-detail .center .num').eq(0).text(1);
		});
		$('#goods-detail .goods-list .first').eq(0).click(function() {
			x = $('#goods-detail .goods-list .list-center').position().left;
			if(x >= 20) {
				return
			} else {
				x += 268;
			}
			$('#goods-detail .goods-list .list-center').css({
				left: x
			})
		});
		$('#goods-detail .goods-list .last').eq(0).click(function() {
			console.log($('#goods-detail .goods-list .list-center').position().left);
			if(x <= -2124) {
				return
			} else {
				x -= 268
			}
			x = $('#goods-detail .goods-list .list-center').position().left;
			x -= 268;
			$('#goods-detail .goods-list .list-center').css({
				left: x
			})
		});

		function cookietoarray() {
			if(getCookie('cartsid')) {
				arrsid = getCookie('cartsid').split(',');
			} else {
				arrsid = [];
			}

			if(getCookie('cartnum')) {
				arrnum = getCookie('cartnum').split(',');
			} else {
				arrnum = [];
			}
		}
		var arrsid = [];
		var arrnum = [];
		var sid = null;
		$('#goods-detail .center').eq(0).on('click', '.buy .cart', function() {
			sid = $(this).parents('#goods-detail').find('.bigbox img').attr('number')
			cookietoarray();

			if($.inArray(sid, arrsid) != -1) { 
				return
			} else {
				arrsid.push(sid);
				addCookie('cartsid', arrsid.toString(), 7);
				arrnum.push(1);
				addCookie('cartnum', arrnum.toString(), 7);
			}

		})

	});
})();