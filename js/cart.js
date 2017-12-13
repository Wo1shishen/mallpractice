(function() {
	$.ajax({
		type: "json",
		url: "php/cart.php",
		async: true
	}).done(function(d) {
		d = JSON.parse(d)
		var arrsid = null;
		var arrnum = null;
		var html = null;
		var e = null;
		var clone = null;
		var html = null;
		var i=null;
		var num=null;
		var allprice=0;
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
		cookietoarray()
		$('#cart .goods-cart').eq(0).click(function(evt) {
			/*	e=evt||event;
				if(e.target==$(this).children($('.buy .add').eq(0))){
					$(this).children('')
				}*/
		});
		for(i = 0; i < arrsid.length; i++) {
			$url = d[arrsid[i]].url;
			$title = d[arrsid[i]].title;
			$price = d[arrsid[i]].price;
			$num = arrnum[i];

			html='<div class="goods-cart" class="margin">' +
			'<div class="left">' +
			'<div class="bigbox">' +
			'<div class="minbox">' +
			'<img src="' + $url + '" title="' + $title + '" price="' + $price +'" number="'+arrsid[i]+'"/>' +
				'</div>' +
				'</div>' +
				'</div>' +
				'<div class="center">' +
				'<p class="goods-title">' +
				'<a href="#">'+ $title+'</a>' +
				'</p>' +
				'<p class="goods-price"><i>￥</i><span>' + $price + '</span></p>' +
				'<div class="buy">' +
				'<div class="left">' +
				'<span class="add">+</span>' +
				'<span class="num">' + arrnum[i] + '</span>' +
				'<span class="reduce">-</span>' +
				'</div>' +
				'<div class="cart right">移除购物车</div>' +
				'</div>' +
				'</div> '+
				'</div>'
			$('#cart').append(html);
		};
		$('#cart .goods-cart .buy .right').click(function(e){
			$(this).parents('.goods-cart').eq(0).remove();
			for(i=0;i<arrsid.length;i++){
				if(arrsid[i]==$(this).parents('.goods-cart')[0].getElementsByTagName("img")[0].getAttribute('number')){
					if(i>0){
					arrsid.splice(arrsid[i],1);
					arrnum.splice(arrnum[i],1);
					}else{
						arrsid.shift();
						arrnum.shift();
						addCookie('cartsid', arrsid.toString(), 7);
						addCookie('cartnum', arrnum.toString(), 7);
					}
				}
			}	
			money()
		});
		$('#cart .goods-cart .buy .add').click(function(e){
			num=$(this).parents('.buy .left')[0].getElementsByClassName('num')[0].innerHTML;
			num=$(this).parents('.buy .left')[0].getElementsByClassName('num')[0].innerHTML=++num;
		
			for(i=0;i<arrsid.length;i++){
				if(arrsid[i]==$(this).parents('.goods-cart')[0].getElementsByTagName("img")[0].getAttribute('number')){
					if(i>0){
						arrnum.splice(arrnum[i],1,num);
					}else{
						arrnum.shift()
						arrnum.unshift(num)
					}
					addCookie('cartnum', arrnum.toString(), 7);
				}
			}
			money()
		});
		$('#cart .goods-cart .buy .reduce').click(function(e){
			num=$(this).parents('.buy .left')[0].getElementsByClassName('num')[0].innerHTML;
			num=$(this).parents('.buy .left')[0].getElementsByClassName('num')[0].innerHTML=--num;
		
			for(i=0;i<arrsid.length;i++){
				if(arrsid[i]==$(this).parents('.goods-cart')[0].getElementsByTagName("img")[0].getAttribute('number')){
					if(i>0){
						arrnum.splice(arrnum[i],1,num);
					}else{
						arrnum.shift()
						arrnum.unshift(num)
					}
					addCookie('cartnum', arrnum.toString(), 7);
				}
			}
			money()
		});
		function money(){
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
			allprice=0
			for(i=0;i<arrsid.length;i++){
				console.log("a");
				allprice+=d[arrsid[i]].price*arrnum[i];
			}
			$('#money span').text(allprice)
		}
		
		money()
		
	});

})()