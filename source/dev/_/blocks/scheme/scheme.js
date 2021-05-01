var scheme = {
	areas: document.querySelectorAll('.scheme__area'),
	block: document.querySelector('.scheme__data'),
	blockHide: document.querySelector('.s-data__close'),
	status: document.querySelector('.s-data .s-data__status'),
	name: document.querySelector('.s-data-name var'),
	square: document.querySelector('.s-data-square var'),
	price_new: {
		block: document.querySelector('.s-data-price-new'),
		value: document.querySelector('.s-data-price-new var'),
	},
	price_old: {
		block: document.querySelector('.s-data-price-old'),
		value: document.querySelector('.s-data-price-old var'),
	},
	text: document.querySelector('.s-data-text')
}


scheme.areas.forEach((area)=>{
	area.addEventListener('click', ()=>{
		var data = {
			name: area.getAttribute('data-name'),
			status: area.getAttribute('data-status'),
			square: area.getAttribute('data-square'),
			price_new: area.getAttribute('data-price-new'),
			price_old: area.getAttribute('data-price-old'),
			text: area.querySelector('.scheme__area-text').innerHTML
		}

		let status;

		switch(data.status){
			case 'free':
				status = 'СВОБОДНЫЙ'
				break;
			case 'ordered':
				status = 'ЗАБРОНИРОВАН'
				break;
			case 'sealed':
				status = 'ПРОДАН'
				break;
			case 'cheap':
				status = 'ДЕШЕВО'
				break;
		}

		scheme.status.innerText = status;
		scheme.status.setAttribute('data-status', data.status);

		scheme.name.innerText = data.name;
		scheme.square.innerText = data.square;
		scheme.price_new.value.innerText = Number(data.price_new).toLocaleString('ru');
		scheme.price_old.value.innerText = Number(data.price_old).toLocaleString('ru');

		scheme.text.innerHTML = data.text;

		scheme.block.classList.add('--show');
	})
})

scheme.blockHide.addEventListener('click', ()=>{
	scheme.block.classList.remove('--show');
})