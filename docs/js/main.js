$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		loop: true,
		nav: true,
		navText: ["<img src='img/icons/arrow-left.png'>", "<img src='img/icons/arrow-right.png'>"],
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 3,
			},
			1000: {
				items: 3,
			},
		},
	});
	
	$(window).scroll(function() {
		var height = $(window).scrollTop();
		if (height > 750) {
			$(".nav").addClass("nav--fixed");
		} else {
			$(".nav").removeClass("nav--fixed");
		}
	});

	$("#burger1").on("click", function() {
		$("#menu").toggleClass("menu--visible");
	});
});
