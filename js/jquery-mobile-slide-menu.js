/*
 * jQuery Mobile Slide Menu 1.0.0, jQuery Mobile plugin
 * https://github.com/donwalter/jquery-mobile-slide-menu
 *
 * Copyright(c) 2013, Don Walter
 * http://www.don-walter.com/
 *
 * A side aligned sliding menu for jQuery Mobile
 * Licensed under the MIT License
 */

(function($){
	$.fn.slideMenu = function(options) {
		// If options exist, merge them with the default settings
		options = $.extend({
			duration:	500,
			easing:		'swing'
		}, options);
		
		return this.each(function() {
			var obj = $(this);
			
			var menuStatus = false;
		
			$(document).on('click', 'a.showMenu', function(e) {
				if(!menuStatus){
					$('#side-menu').css('visibility','visible');
					$('.ui-page-active').animate({
						marginLeft: '165px',
					}, options.duration, options.easing, function(){menuStatus = true});
					return false;
				} else {
					$('.ui-page-active').animate({
						marginLeft: '0px',
					}, options.duration, options.easing, function(){menuStatus = false});
					return false;
				}
			});
		
			$(document).on('swipeleft', '.pages', function(e) {
				if (menuStatus){
					$('.ui-page-active').animate({
						marginLeft: '0px',
					}, options.duration, options.easing, function(){menuStatus = false; $('#side-menu').css('marginTop', $(window).scrollTop());});
				}
			});
		
			$(document).on('swiperight', '.pages', function(e) {
				if (!menuStatus){
					//alert($(window).scrollTop() + ' - ' + $('#side-menu').offset().top);
					$('#side-menu').css('marginTop', $(window).scrollTop());
					$('#side-menu').css('visibility','visible');
					$('.ui-page-active').animate({
						marginLeft: '165px',
					}, options.duration, options.easing, function(){menuStatus = true});
				}
			});
		
			$('#side-menu li a').click(function(){
				var p = $(this).parent();
				if($(p).hasClass('active')){
					$('#side-menu li').removeClass('active');
				} else {
					$('#side-menu li').removeClass('active');
					$(p).addClass('active');
				}
				menuStatus = false;
			});
		});
	};
})(jQuery);