document.addEventListener('DOMContentLoaded', ()=>{
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
		text: document.querySelector('.s-data-text'),
		btn: document.querySelector('.s-data__order'),
		input: document.getElementById('input-view'),
		data: {}
	}


	scheme.areas.forEach((area)=>{
		area.addEventListener('click', ()=>{
			scheme.data = {
				name: area.getAttribute('data-name'),
				status: area.getAttribute('data-status'),
				square: area.getAttribute('data-square'),
				price_new: area.getAttribute('data-price-new'),
				price_old: area.getAttribute('data-price-old'),
				text: area.querySelector('.scheme__area-text').innerHTML
			}

			let status;

			switch(scheme.data.status){
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
			scheme.status.setAttribute('data-status', scheme.data.status);

			scheme.name.innerText = scheme.data.name;
			scheme.square.innerText = scheme.data.square;
			scheme.price_new.value.innerText = Number(scheme.data.price_new).toLocaleString('ru');
			scheme.price_old.value.innerText = Number(scheme.data.price_old).toLocaleString('ru');

			scheme.text.innerHTML = scheme.data.text;

			scheme.block.classList.add('--show');
		})
	})

	scheme.blockHide.addEventListener('click', ()=>{
		scheme.block.classList.remove('--show');
	})

	scheme.btn.addEventListener('click', ()=>{
		scheme.input.value = 'Участок № '+ scheme.data.name
	})

})