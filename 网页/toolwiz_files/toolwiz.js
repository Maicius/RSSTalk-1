$(function(){
	$(document).on('click','body',function(){
		if(!$('.navbar-toggle').hasClass(".collapsed")){		
			$('#navbar').removeClass('in');
		}	
	})
})

