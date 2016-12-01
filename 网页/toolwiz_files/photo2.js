$(function(){
	$(".page5 li").hover(function(){
		$(this).find("div").show();
		},function(){
		$(this).find("div").hide();	
		})
	$(".top").click(function(){
		$("#fp-nav li").eq(0).find("a").click();
		})	
	$('#main').fullpage({
		'navigation': true,
		afterRender:function(){
			$('#main').css('transform','none');
			},
		afterLoad: function(anchorLink, index){
			if(index == 1){
				$('#main').css('transform','none');
			}
			if(index == 2){
				$('.page2_pos3').addClass("fadeInLeft");
				$('.page2_pos2').addClass("fadeInLeft");
				$('.page2_pos1').addClass("fadeInLeft");
				$('.page2_pos0').addClass("fadeInLeft");
			}
			if(index == 3){
				$('.page3_rate_img').addClass('fadeInRight');
				$('.page3_pos1').addClass('fadeInRight2');	
				$('.page3_pos0').addClass('fadeInRight3');					
			}
			if(index == 4){
				$('.page4_pos3').addClass('fadeInLeft');
				$('.page4_pos2').addClass('fadeInLeft');
				$('.page4_pos1').addClass('fadeInLeft');
				$('.page4_pos0').addClass('fadeInLeft');
			}
			if(index == 5){
				$('.page5_Decorate').addClass('fadeInRight');
				$('.page5_pos1').addClass('fadeInRight2');
				$('.page5_pos0').addClass('fadeInRight3');
			}
			if(index == 6){
				$('.page6_pos3').addClass('fadeInLeft');
				$('.page6_pos1').addClass('fadeInLeft');
				$('.page6_pos0').addClass('fadeInLeft');
			}
			if(index == 7){
				$('.page7_Decorate').addClass('fadeInRight');
				$('.page7_pos1').addClass('fadeInRight2');
				$('.page7_pos0').addClass('fadeInRight3');
			}
			if(index == 8){
				$('.page8_pos3').addClass('fadeInLeft');
				$('.page8_pos1').addClass('fadeInLeft');
				$('.page8_pos0').addClass('fadeInLeft');
			}
			if(index == 9){
				$('.page9_Decorate').addClass('fadeInRight');
				$('.page9_pos1').addClass('fadeInRight2');
				$('.page9_pos0').addClass('fadeInRight3');
			}
			if(index == 10){
				$('.page10_pos3').addClass('fadeInLeft');
				$('.page10_pos1').addClass('fadeInLeft');
				$('.page10_pos0').addClass('fadeInLeft');
			}
			if(index == 11){
				$('.page11_Decorate').addClass('fadeInRight');
				$('.page11_pos1').addClass('fadeInRight2');
				$('.page11_pos0').addClass('fadeInRight3');
			}
			
		},
		onLeave: function(index, direction){
			if(index == 1){
				$('#main').css('transform','none');
			}
			if(index == '2'){
				$('.page2_pos3').stop().removeClass("fadeInLeft");
				$('.page2_pos2').stop().removeClass("fadeInLeft");
				$('.page2_pos1').stop().removeClass("fadeInLeft");
				$('.page2_pos0').stop().removeClass("fadeInLeft");
			}
			if(index == '3'){
				$('.page3_rate_img').stop().removeClass('fadeInRight');
				$('.page3_pos1').stop().removeClass('fadeInRight2');	
				$('.page3_pos0').stop().removeClass('fadeInRight3');
			}
			if(index == '4'){
				$('.page4_pos3').stop().removeClass('fadeInLeft');
				$('.page4_pos2').stop().removeClass('fadeInLeft');
				$('.page4_pos1').stop().removeClass('fadeInLeft');
				$('.page4_pos0').stop().removeClass('fadeInLeft');
			}
			if(index == '5'){
				$('.page5_Decorate').stop().removeClass('fadeInRight');
				$('.page5_pos1').stop().removeClass('fadeInRight2');
				$('.page5_pos0').stop().removeClass('fadeInRight3');
			}
			if(index == '6'){
				$('.page6_pos3').stop().removeClass('fadeInLeft');
				$('.page6_pos1').stop().removeClass('fadeInLeft');
				$('.page6_pos0').stop().removeClass('fadeInLeft');
			}
			if(index == '7'){
				$('.page7_Decorate').stop().removeClass('fadeInRight');
				$('.page7_pos1').stop().removeClass('fadeInRight2');
				$('.page7_pos0').stop().removeClass('fadeInRight3');
			}
			if(index == '8'){
				$('.page8_pos3').stop().removeClass('fadeInLeft');
				$('.page8_pos1').stop().removeClass('fadeInLeft');
				$('.page8_pos0').stop().removeClass('fadeInLeft');
			}
			if(index == '9'){
				$('.page9_Decorate').stop().removeClass('fadeInRight');
				$('.page9_pos1').stop().removeClass('fadeInRight2');
				$('.page9_pos0').stop().removeClass('fadeInRight3');
			}
			if(index == '10'){
				$('.page10_pos3').stop().removeClass('fadeInLeft');
				$('.page10_pos1').stop().removeClass('fadeInLeft');
				$('.page10_pos0').stop().removeClass('fadeInLeft');
			}
			if(index == '11'){
				$('.page11_Decorate').stop().removeClass('fadeInRight');
				$('.page11_pos1').stop().removeClass('fadeInRight2');
				$('.page11_pos0').stop().removeClass('fadeInRight3');
			}
			
		}
	});
});