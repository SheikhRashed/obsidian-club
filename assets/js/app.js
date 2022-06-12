"use strict"

// loader
const loader = document.querySelector(".loader")
const main = document.querySelector(".main")

if (main) {
	function init() {
		setTimeout(() => {
			loader.style.opacity = 0
			loader.style.display = "none"

			main.style.display = "block"
			setTimeout(() => (main.style.opacity = 1), 50)
		}, 1600)
	}

	init()
}

// mobile Nav Sidebar

const toggleBtn = document.querySelector(".toggleBtn")

if (toggleBtn) {
	toggleBtn.addEventListener("click", (e) => {
		e.preventDefault()
		toggleBtn.classList.toggle("active")

		document.querySelector(".mobile-menu").classList.toggle("active")
	})
}

// event details show

const eventsWrapper = document.querySelector(".settings-event")
const detailsWrapper = document.querySelector(".settings-event--details")
const backEvent = document.querySelector(".settings-event--details .heading a")

if (document.querySelector(".event-card-title")) {
	const detailsShow = document
		.querySelectorAll(".event-card-title")
		.forEach((event) => {
			event.addEventListener("click", function () {
				eventsWrapper.classList.toggle("d-none")
				detailsWrapper.classList.toggle("d-none")
			})
		})
}

if (backEvent) {
	backEvent.addEventListener("click", function () {
		eventsWrapper.classList.toggle("d-none")
		detailsWrapper.classList.toggle("d-none")
	})
}

// Sticky navbar on scroll
// When the user scrolls the page, execute myFunction

var navbar = document.querySelector(".header")
if (navbar) {
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

// inc-dec counter
// Select increment and decrement buttons
const incrementCount = document.getElementById("plus")
const decrementCount = document.getElementById("minus")

if (document.querySelector(".counter")) {
	// Select total count
	const totalCount = document.getElementById("total-count")

	// Variable to track count
	var count = 0

	// Display initial count value
	totalCount.innerHTML = count

	// Function to increment count
	const handleIncrement = () => {
		count++
		totalCount.innerHTML = count
	}

	// Function to decrement count
	const handleDecrement = () => {
		count--
		totalCount.innerHTML = count
	}

	// Add click event to buttons
	incrementCount.addEventListener("click", handleIncrement)
	decrementCount.addEventListener("click", handleDecrement)
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

if (document.querySelector(".event-slider")) {
	var swiper = new Swiper(".event-slider", {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			// dynamicBullets: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},

		autoplay: {
			delay: 1600,
			disableOnInteraction: false,
		},
	})
}

document.addEventListener("DOMContentLoaded", function () {
	if (document.querySelector("#monthName")) {
		var demo1 = new BVSelect({
			selector: "#monthName",
			width: "100%",
			offset: false,
			breakpoint: 0,
			searchbox: false,
			search_autofocus: false,
			placeholder: "Select Month",
		})
	}
	if (document.querySelector("#yearName")) {
		var demo2 = new BVSelect({
			selector: "#yearName",
			width: "100%",
			offset: false,
			breakpoint: 0,
			searchbox: false,
			search_autofocus: false,
			placeholder: "Select Year",
		})
	}
	if (document.querySelector("#monthNameTwo")) {
		var demo3 = new BVSelect({
			selector: "#monthNameTwo",
			width: "100%",
			offset: false,
			breakpoint: 0,
			searchbox: false,
			search_autofocus: false,
			placeholder: "Select Month",
		})
	}
	if (document.querySelector("#yearNameTwo")) {
		var demo4 = new BVSelect({
			selector: "#yearNameTwo",
			width: "100%",
			offset: false,
			breakpoint: 0,
			searchbox: false,
			search_autofocus: false,
			placeholder: "Select Year",
		})
	}

	if (document.querySelector("#summary")) {
		var demo5 = new BVSelect({
			selector: "#summary",
			width: "100%",
			offset: false,
			breakpoint: 0,
			searchbox: false,
			search_autofocus: false,
			placeholder: "Select Year",
		})
	}
})

// Light Gallery

if (document.getElementById("galleryBox")) {
	lightGallery(document.getElementById("galleryBox"), {
		animateThumb: false,
		zoomFromOrigin: false,
		allowMediaOverlap: true,
		toggleThumb: true,
	})
}
