let buttons = ['clear', 'equals', 'zero','one', 'two', 'three', 'four', 'five',
	 'six', 'seven', 'eight', 'nine', 'plus', 'minus', 'multiple', 'divide']

let equetions = ['+', '-', '*', '/']
let equetionsStr = ['plus', 'minus', 'multiple', 'divide']

var equCount = 0

var answer = document.getElementById('answer')
var valid = true

var size = 50


function sliceAns(equetion) {
	let indexof = (answer.innerHTML).indexOf(equetion)
	let half = Number((answer.innerHTML).slice(0, indexof))
	let secHalf = Number((answer.innerHTML).slice(indexof + 1))
	equCount = 0

	if (equetion === '+') {
		answer.innerHTML = half + secHalf
	}
	else if (equetion === '-') {
		answer.innerHTML = half - secHalf
	}
	else if (equetion === '*') {
		answer.innerHTML = half * secHalf
	} 
	else if (equetion === '/') {
		answer.innerHTML = half / secHalf
	}
}


for (let i = 0; i < buttons.length; i++) {

	let button_id = buttons[i]
	let butt = document.getElementById(button_id)

	butt.onclick = function() {

		if (button_id === 'equals') {
			if ((answer.innerHTML).indexOf('+') != -1) {
				sliceAns('+')
			}
			else if ((answer.innerHTML).indexOf('-') != -1) {
				sliceAns('-')
			}
			else if ((answer.innerHTML).indexOf('*') != -1) {
				sliceAns('*')
			}
			else if ((answer.innerHTML).indexOf('/') != -1) {
				sliceAns('/')
			}
		}
		else if (button_id === 'clear') {
			answer.innerHTML = ''
			equCount = 0
			document.querySelector('.answer_text').style.fontSize = `50px`
		}
		else if (equetions.includes(butt.innerHTML)) {
		 	if (equetions.includes(butt.innerHTML)) {
				equCount += 1
				if (equCount === 1) {
					answer.innerHTML += butt.innerHTML
				}
			} else {
				answer.innerHTML += butt.innerHTML
			}
		} else {
			answer.innerHTML += butt.innerHTML
		}

		if (document.querySelector(".answer_text").clientWidth > 375) {
			document.querySelector('.answer_text').style.fontSize = `${size -= 3}px`
		}
	}
}

document.getElementById('return').onclick = function() {
	location.href = 'main_clasic.html';
}