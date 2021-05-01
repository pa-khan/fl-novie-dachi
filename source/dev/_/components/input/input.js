var inputs = document.querySelectorAll('.input');
inputs.forEach(input => {
  let area = input.querySelector('input');
  area.addEventListener('focus', ()=>{
  	area.classList.remove('--error');
  })

  if (input.classList.contains('--phone')) {
  	$(area).mask('+7 (000) 000-00-00')
  }
});