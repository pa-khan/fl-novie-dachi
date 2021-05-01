document.addEventListener('DOMContentLoaded', ()=>{
	var gallerySliser = document.querySelector('.gallery__slider');
	if (gallerySliser) {
		new Swiper(gallerySliser, {
			slidesPerView: 2,
			spaceBetween: 30,
			loop: true,
			speed: 800,
			navigation: {
				nextEl: '.gallery__arrow.swiper-button-next',
				prevEl: '.gallery__arrow.swiper-button-prev',
			},
			breakpoints: {
			// 	320: {
			// 		slidesPerView: 1,
			// 	},
			// 	767: {
			// 		slidesPerView: 2,
			// 		spaceBetween: 15,
			// 	},
				0: {
					slidesPerView: 1,
				},
				992: {
					slidesPerView: 2,
				}
			},
		});
	}
})