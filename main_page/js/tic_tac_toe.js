function elementId(name) {
	return document.getElementById(name);
}


let button1 = elementId('button1');
let button2 = elementId('button2');
let button3 = elementId('button3');

let button4 = elementId('button4');
let button5 = elementId('button5');
let button6 = elementId('button6');

let button7 = elementId('button7');
let button8 = elementId('button8');
let button9 = elementId('button9');

var move = true;
var madeMoves = 0;
var gameOver = false;


function tie_check() {
	if (madeMoves > 8 && gameOver === false) {
		document.querySelector('.winner_text').innerHTML = 'Its A Tie';
	}
}


function change_img(button) {
	if (button.innerHTML !== 'X' && button.innerHTML !== 'O')
	{
		button.innerHTML = move ? 'X': 'O';
		madeMoves += 1;
		move = move ? false: true;
	}
}


function winner_checker(a, b, c, num) {
	if (a.innerHTML === b.innerHTML && b.innerHTML === c.innerHTML && c.innerHTML !== ''){
		gameOver = true
		document.querySelector('.winner_text').innerHTML = 'Winner: ' + a.innerHTML;
	}
}


function winner() {
	if (gameOver === false) {

		winner_checker(button1, button4, button7, 1);
		winner_checker(button2, button5, button8, 2);
		winner_checker(button3, button6, button9, 3);

		winner_checker(button1, button2, button3, 4);
		winner_checker(button4, button5, button6, 5);
		winner_checker(button7, button8, button9, 6);

		winner_checker(button1, button5, button9, 7);
		winner_checker(button3, button5, button7, 8);
		tie_check();
	}
}


// main
var buttons = [button1, button2, button3, button4, button5, button6, button7, button8, button9]

for (let i = 0; i <= buttons.length - 1; i++) {
	buttons[i].onclick = function() {
		console.log(buttons[i])
		if (!gameOver) {
			change_img(buttons[i]);
			winner();
		}
	}
}

document.getElementById('reset').onclick = function() {
	location.reload();
}

document.getElementById('return').onclick = function() {
	location.href = 'main_clasic.html';
}