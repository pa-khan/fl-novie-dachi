document.addEventListener('DOMContentLoaded', ()=>{
	var attractionsSliser = document.querySelector('.attractions__slider');
	if (attractionsSliser) {
		new Swiper(attractionsSliser, {
			slidesPerView: 4,
			spaceBetween: 30,
			loop: true,
			speed: 800,
			navigation: {
				nextEl: '.attractions__arrow.swiper-button-next',
				prevEl: '.attractions__arrow.swiper-button-prev',
			},
			// breakpoints: {
			// 	320: {
			// 		slidesPerView: 1,
			// 	},
			// 	767: {
			// 		slidesPerView: 2,
			// 		spaceBetween: 15,
			// 	},
			// 	992: {
			// 		slidesPerView: 3,
			// 	}
			// },
		});
	}
})