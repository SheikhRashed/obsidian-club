"use strict"

var swiper = new Swiper(".bannerSlide", {
	loop: true,
	// autoplay: {
	// 	delay: 1800,
	// 	disableOnInteraction: false,
	// },
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		renderBullet: function (index, className) {
			return '<p class="' + className + '">' + ` 0${index + 1} ` + "</p>"
		},
	},
})
