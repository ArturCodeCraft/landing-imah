/* <swiper-main>======================================================================================================================================================================================================== */
const swiperMain = new Swiper('.swiper-main', {
	// Optional parameters
	loop: true, 						// Set to `true` to enable continuous loop mode
	spaceBetween: 24, 			// Distance between slides in px.


	// Object with autoplay parameters or boolean true to enable with default settings
	autoplay: {
		delay: 3000, 									// Delay between transitions (in ms). If this parameter is not specified, auto play will be disabled
		disableOnInteraction: true, 	// Set to false and autoplay will not be disabled after user interactions (swipes), it will be restarted every time after interaction
	},


	// Classes for wrapper and slides
	wrapperClass: 'swiper-main__wrapper', 	// CSS class name of slides' wrapper
	slideClass: 'swiper-main__slide', 			// CSS class name of slide
	slideActiveClass: '_slide-active', 			// CSS class name of currently active slide


	// Navigation configuration ("Next" and "Prev" buttons)
	navigation: {
		nextEl: '.swiper-main__button-next', 		// String with CSS selector or HTML element of the element that will work like "next" button after click on it
		prevEl: '.swiper-main__button-prev', 		// String with CSS selector or HTML element of the element that will work like "prev" button after click on it
	},
});

/* <swiper-partners>======================================================================================================================================================================================================== */
const swiperPartners = new Swiper('.swiper-partners', {
	// Optional parameters
	slidesPerView: 'auto', 	// Number of slides per view (slides visible at the same time on slider's container).
	loop: true, 						// Set to `true` to enable continuous loop mode
	spaceBetween: 15, 			// Distance between slides in px.


	// Object with autoplay parameters or boolean true to enable with default settings
	autoplay: {
		delay: 0, 									// Delay between transitions (in ms). If this parameter is not specified, auto play will be disabled
		disableOnInteraction: true, 	// Set to false and autoplay will not be disabled after user interactions (swipes), it will be restarted every time after interaction
	},
	speed: 3000,										// Duration of transition between slides (in ms)

	// Classes for wrapper and slides
	wrapperClass: 'swiper-partners__wrapper', 	// CSS class name of slides' wrapper
	slideClass: 'swiper-partners__slide', 			// CSS class name of slide
	slideActiveClass: '_slide-active', 			// CSS class name of currently active slide


	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 576px
		576: {
			spaceBetween: 20,
		},
	}
});


/* <swiper-project>======================================================================================================================================================================================================== */
const swiperProject = new Swiper('.swiper-project', {
	// Optional parameters
	loop: true, 						// Set to `true` to enable continuous loop mode
	spaceBetween: 24, 			// Distance between slides in px.


	// Object with autoplay parameters or boolean true to enable with default settings
	autoplay: {
		delay: 3000, 									// Delay between transitions (in ms). If this parameter is not specified, auto play will be disabled
		disableOnInteraction: true, 	// Set to false and autoplay will not be disabled after user interactions (swipes), it will be restarted every time after interaction
	},


	// Classes for wrapper and slides
	wrapperClass: 'swiper-project__wrapper', 	// CSS class name of slides' wrapper
	slideClass: 'swiper-project__slide', 			// CSS class name of slide
	slideActiveClass: '_slide-active', 			// CSS class name of currently active slide


	// Navigation configuration ("Next" and "Prev" buttons)
	navigation: {
		nextEl: '.swiper-project__button-next', 		// String with CSS selector or HTML element of the element that will work like "next" button after click on it
		prevEl: '.swiper-project__button-prev', 		// String with CSS selector or HTML element of the element that will work like "prev" button after click on it
	},
});

/* <swiper-testimonial>======================================================================================================================================================================================================== */
const swiperTestimonial = new Swiper('.swiper-testimonial', {
	// Optional parameters
	slidesPerView: 'auto', 	// Number of slides per view (slides visible at the same time on slider's container).
	loop: true, 						// Set to `true` to enable continuous loop mode
	spaceBetween: 50, 			// Distance between slides in px.


	// Object with autoplay parameters or boolean true to enable with default settings
	autoplay: {
		delay: 3000, 									// Delay between transitions (in ms). If this parameter is not specified, auto play will be disabled
		disableOnInteraction: true, 	// Set to false and autoplay will not be disabled after user interactions (swipes), it will be restarted every time after interaction
	},


	// Classes for wrapper and slides
	wrapperClass: 'swiper-testimonial__wrapper', 	// CSS class name of slides' wrapper
	slideClass: 'swiper-testimonial__slide', 			// CSS class name of slide
	slideActiveClass: '_slide-active', 			// CSS class name of currently active slide


	// Navigation configuration ("Next" and "Prev" buttons)
	navigation: {
		nextEl: '.swiper-testimonial__button-next', 		// String with CSS selector or HTML element of the element that will work like "next" button after click on it
		prevEl: '.swiper-testimonial__button-prev', 		// String with CSS selector or HTML element of the element that will work like "prev" button after click on it
	},
});

/* <>======================================================================================================================================================================================================== */

/* end */