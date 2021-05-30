jQuery(function($) {

	$('.btn-menu').on("click", function(){

		$('.menu').toggleClass('menu-collapse');
	});


	$('.totop').on("click", function(){
		$('body, html').animate({
			scrollTop: 0
		}, 400);
	});
});

$(window).scroll(function(){
	var scrolledFromTop = $(window).scrollTop() + $(window).height();
	$(".appear").each(function(){
	var distanceFromTop = $(this).offset().top;
	if(scrolledFromTop >= distanceFromTop+100){
		console.log("hello");
		var delaiAnim = $(this).data("delai");
		$(this).delay(delaiAnim).animate({
		top:0,
		opacity:1
		});
	}
	});
});

$(document).ready(function() {
	$(".ctct").click(function() {
		$("html, .contact").animate({
			scrollTop: $(
			  'html, .contact').get(0).scrollHeight
		}, 2000);
	});
});

$(document).ready(function() {
	$(".about").click(function() {
		$("html, .about").animate({
			scrollTop: $(
			  'html, .about').get(0).scrollHeight
		}, 2000);
	});
});