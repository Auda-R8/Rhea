$(document).ready(function(){

	setTimeout(function(){

		new WOW().init();
	}, 1000);

	// Slider
	let position = 0;
	let movePosition = 412;
	const btnPrev = $('#slider-prev');
	const btnNext = $('#slider-next');
	const sliderItem = document.getElementsByClassName('slider-item__var');
	const sliderContainer = $('.slider-container');
	const itemsCount = sliderItem.length;

	btnNext.click(function(event){
		event.preventDefault();
		if(position > -(itemsCount * movePosition) + movePosition * 2)	position -= movePosition;
		setPosition();
	});

	btnPrev.click(function(event){
		event.preventDefault();
		if(position != 0)position += movePosition;
		setPosition();	
	});

	function setPosition(){
		sliderContainer.css({
			transform: `translateX(${position}px)`
		});
	}

	let width = window.screen.width;

	if(width < 1000) movePosition = 372;
	if(width < 400) movePosition = 270;

	$('.travel-slider').slick({
		slideaToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		variableWidth: true
	});

	$('.testimonials-slider').slick({
		dots: true
	});

	$("[data-scroll]").on("click", function(event){
		event.preventDefault();

		let element = $(this).data('scroll');
		let elementTop = $(element).offset().top;

		$('html, body').animate({
			scrollTop: elementTop
		}, 500);
	})

	let burger = document.getElementById("burger");
	let headerNav = document.getElementById("header-nav");

	burger.onclick = function(){
		headerNav.classList.toggle('active');
	}
});