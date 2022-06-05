"use strict"

// mobile Nav Sidebar

const toggleBtn = document.querySelector(".toggleBtn")

if (toggleBtn) {
	toggleBtn.addEventListener("click", (e) => {
		e.preventDefault()
		toggleBtn.classList.toggle("active")

		document.querySelector(".mobile-menu").classList.toggle("active")
	})
}

// Sticky navbar on scroll
// When the user scrolls the page, execute myFunction

if (navbar) {
	var navbar = document.querySelector(".header")

	window.onscroll = function () {
		myFunction()
	}

	// Get the navbar

	// Get the offset position of the navbar
	var sticky = navbar.offsetTop

	// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function myFunction() {
		if (window.pageYOffset >= 120) {
			navbar.classList.add("sticky")
		} else {
			navbar.classList.remove("sticky")
		}
	}
}

// Sliders
if (document.querySelector(".bannerSlide")) {
	var swiper = new Swiper(".bannerSlide", {
		loop: true,
		autoplay: {
			delay: 1800,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
			renderBullet: function (index, className) {
				return '<p class="' + className + '">' + ` 0${index + 1} ` + "</p>"
			},
		},
	})
}

if (document.querySelector(".partnerSlider")) {
	var swiper = new Swiper(".partnerSlider", {
		loop: true,
		freeMode: true,
		slidesPerView: 5,
		spaceBetween: 44,
		slidesPerView: 1,
		spaceBetween: 24,
		autoplay: {
			delay: 1800,
			disableOnInteraction: false,
		},

		breakpoints: {
			575: {
				slidesPerView: 2,
			},
			767: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 6,
			},
		},
	})
}

if (document.querySelector(".upcomingSlider")) {
	var swiper = new Swiper(".upcomingSlider", {
		slidesPerView: 1,
		spaceBetween: 22,
		loop: true,
		autoplay: {
			delay: 1800,
			disableOnInteraction: false,
		},
		centeredSlides: true,
		breakpoints: {
			480: {
				slidesPerView: 2,
				centeredSlides: false,
			},
			640: {
				slidesPerView: 3,
			},

			991: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 6,
			},
		},
	})
}

if (document.querySelector(".obsidianSlider")) {
	var swiper = new Swiper(".obsidianSlider", {
		slidesPerView: 1,
		spaceBetween: 22,
		loop: true,
		autoplay: {
			delay: 1600,
			disableOnInteraction: false,
		},
		centeredSlides: true,
		breakpoints: {
			575: {
				slidesPerView: 2,
			},

			1200: {
				slidesPerView: 3,
			},
		},
	})
}

if (document.querySelector(".packageSlider")) {
	var swiper = new Swiper(".packageSlider", {
		slidesPerView: 1,
		spaceBetween: 22,

		breakpoints: {
			575: {
				slidesPerView: 2,
			},

			992: {
				slidesPerView: 3,
			},

			1200: {
				slidesPerView: 4,
			},
		},
	})
}
