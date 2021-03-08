
import { createSize } from './core/pure';
import './style/style.scss'
import { tamplate } from './template/templates';

const $el = document.querySelector('.tamplate__print')
let out = document.querySelectorAll('[data-size]')
const drops = document.querySelectorAll('.toolbar__size-drop')
const toolbar_drop = document.querySelector('.toolbar__drop')
let drop_btn = document.querySelector('[data-drop="input"]')
const dropInput = document.querySelectorAll('[data-type="input"]')
let id = 0

const print = document.querySelector('[data-type="print"]')



document.onclick = (event) => {
	const btns = ['oneBlank', 'twoBlanks', 'threeBlanks', 'forBlanks']
	const btn = event.target.dataset.btn
	if (btns.includes(btn)) {
		$el.innerHTML = ''
		$el.insertAdjacentHTML('afterbegin', tamplate[btn])

		toolbar_drop.classList.add('drop')
		for (let i = 0; i < event.target.id; i++) {
			id = event.target.id
			drops[i + 1].style = 'display: block;'
		}

	}
	return out = document.querySelectorAll('[data-size]')
}

drop_btn.onclick = () => {
	const value = {}
	dropInput.forEach(el => {
		value[el.dataset.drop] = el.value
		el.value = ''
	})
	toolbar_drop.classList.remove('drop')
	const sizes = createSize(value)

	setTimeout(() => {
		for (let i = 0; i < id; i++) {
			drops[i + 1].style = 'display: none;'
		}
	}, 500);

	out.forEach(el => {
		const dataset = el.dataset.size
		if (Object.keys(dataset)) {
			el.textContent = sizes[dataset]
		}
	})
}


print.onclick = () => {
	const html = document.querySelector('body').innerHTML
	const el = document.querySelector('.tamplate').innerHTML

	document.querySelector('body').innerHTML = el
	window.print()
	document.querySelector('body').innerHTML = html
}
