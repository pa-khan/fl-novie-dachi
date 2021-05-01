var html = document.querySelector('html'),
		body = document.querySelector('body'),
		wrap = document.querySelector('.wrap');

var mailPattern = /^[0-9a-z_-]+@[0-9a-z_-]+.[a-z]{2,5}$/i;


$(document).ready(function(){
	$(".link-a a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1500);
		return false;
	});

	var upBtn = $('.up');
	$(window).on('scroll load', function(event) {
		if ($(window).scrollTop() > 1000) {
			upBtn.addClass('--show');
		} else {
			upBtn.removeClass('--show');
		}
	});
})