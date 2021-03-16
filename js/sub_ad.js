$(function(){
	var sub_ad_1_click=$('.sub_ad_wrap').find('.sub_ad_t_box').find('li').eq(0),
			sub_ad_2_click=$('.sub_ad_wrap').find('.sub_ad_t_box').find('li').eq(1),
			sub_ad_3_click=$('.sub_ad_wrap').find('.sub_ad_t_box').find('li').eq(2),
			sub_ad_4_click=$('.sub_ad_wrap').find('.sub_ad_t_box').find('li').eq(3),
			sub_ad_5_click=$('.sub_ad_wrap').find('.sub_ad_t_box').find('li').eq(4),
			sub_ad_t=$('.sub_ad').find('div'),
			addClick=$('.sub_ad_wrap').find('.sub_ad_t_box').find('li').find('h4');

			sub_ad_1_click.click(function(){
				var $click=$(this).find('h4').hasClass('on');
				if($click!=true){
					addClick.removeClass('on')
					addClick.eq(0).addClass('on')
					sub_ad_t.fadeOut(500)
					sub_ad_t.eq(0).fadeIn(500)
				}
			})
			sub_ad_2_click.click(function(){
				var $click=$(this).find('h4').hasClass('on');
				if($click!=true){
					addClick.removeClass('on')
					addClick.eq(1).addClass('on')
					sub_ad_t.fadeOut(500)
					sub_ad_t.eq(1).fadeIn(500)
				}
			})
			sub_ad_3_click.click(function(){
				var $click=$(this).find('h4').hasClass('on');
				if($click!=true){
					addClick.removeClass('on')
					addClick.eq(2).addClass('on')
					sub_ad_t.fadeOut(500)
					sub_ad_t.eq(2).fadeIn(500)
				}
			})
			sub_ad_4_click.click(function(){
				var $click=$(this).find('h4').hasClass('on');
				if($click!=true){
					addClick.removeClass('on')
					addClick.eq(3).addClass('on')
					sub_ad_t.fadeOut(500)
					sub_ad_t.eq(3).fadeIn(500)
				}
			})
			sub_ad_5_click.click(function(){
				var $click=$(this).find('h4').hasClass('on');
				if($click!=true){
					addClick.removeClass('on')
					addClick.eq(4).addClass('on')
					sub_ad_t.fadeOut(500)
					sub_ad_t.eq(4).fadeIn(500)
				}
			})
})