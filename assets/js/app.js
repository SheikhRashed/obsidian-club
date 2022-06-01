"use strict"

// mobile Nav Sidebar

const toggleBtn = document.querySelector(".toggleBtn")

toggleBtn.addEventListener("click", (e) => {
	e.preventDefault()
	toggleBtn.classList.toggle("active")

	document.querySelector(".mobile-menu").classList.toggle("active")
})

// Sticky navbar on scroll
// When the user scrolls the page, execute myFunction
window.onscroll = function () {
	myFunction()
}

// Get the navbar
var navbar = document.querySelector(".header")

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
				spaceBetween: 40,
			},
			1024: {
				slidesPerView: 5,
				spaceBetween: 50,
			},
		},
	})
}
