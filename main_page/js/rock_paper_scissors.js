const score = JSON.parse(localStorage.getItem
		('score')) || {
			wins: 0,
			losses: 0,
			ties: 0
		};

function playGame(playerMove) {
	const computerMove = pickComputerMove();

	let result = '';
	let wins = document.getElementById('wins');
	let losses = document.getElementById('losses');
	let ties = document.getElementById('ties');

	if (playerMove === 'Scissors') {
		if (computerMove === 'Rock') {
			result = 'You lose';
		}
		else if (computerMove === 'Paper') {
			result = 'You Win';
		}
		else {
			result = 'Tie';
		}
	}
	else if (playerMove === 'Paper') {
		if (computerMove === 'Rock') {
			result = 'You Win';
		}
		else if (computerMove === 'Paper') {
			result = 'Tie';
		}
		else {
			result = 'You lose';
		}
	}

	else {
		if (computerMove === 'Rock') {
			result = 'Tie';
		}
		else if (computerMove === 'Paper') {
			result = 'You lose';
		}
		else {
			result = 'You Win';
		}
	}

	if (result === 'You Win') {
		score.wins += 1;
	}
	else if (result === 'You lose') {
		score.losses += 1;
	}
	else if (result === 'Tie') {
		score.ties += 1;
	}

	wins.innerHTML = 'Wins: ' + score.wins;
	losses.innerHTML = 'losses: ' + score.losses;
	ties.innerHTML = 'ties: ' + score.ties;


	localStorage.setItem('score', JSON.stringify(score));

	displaycomputerMove(computerMove);
}
	

function pickComputerMove() {
	const radnomNumber = Math.random();

	let computerMove = '';

	if (radnomNumber >= 0 && radnomNumber < 1/3) {
		computerMove = 'Rock';
	}
	else if (radnomNumber >= 1/3 && radnomNumber < 2/3) {
		computerMove = 'Paper';
	}
	else if (radnomNumber > 2/3) {
		computerMove = 'Scissors';
	}

	return computerMove;
}


function displayPlayerMove(source) {
	let player_move = new Image(120, 100);

	player_move.src = source;

	let player_move_src = document.getElementById('player_move');

	player_move_src.appendChild(player_move);
}


function displaycomputerMove(computer_input) {
	let move = computer_input;
	let computer_move = new Image(120, 100);

	if (move === 'Rock') {
		computer_move.src = 'game_pngs/rock.png';
	}
	else if (move === 'Paper') {
		computer_move.src = 'game_pngs/paper.png';
	}
	else if (move === 'Scissors') {
		computer_move.src = 'game_pngs/scissors.png';
	}

	let computer_move_src = document.getElementById('computer_move');

	computer_move_src.appendChild(computer_move);

}


function clearElements() {
	let parentElement = document.getElementById('computer_move');
	let parentElement2 = document.getElementById('player_move');     
	parentElement.innerHTML = "";
	parentElement2.innerHTML = "";
}


function onclickPlay(element_id, player_move_id, png_id) {
	document.getElementById(element_id).onclick = function() {
		clearElements();
		playGame(player_move_id);
		displayPlayerMove('game_pngs/' + png_id);
	}
}

// main
wins.innerHTML = 'Wins: ' + score.wins;
losses.innerHTML = 'losses: ' + score.losses;
ties.innerHTML = 'ties: ' + score.ties;

onclickPlay('rock', 'Rock', 'rock.png');
onclickPlay('paper', 'Paper', 'paper.png');
onclickPlay('scissors', 'Scissors', 'scissors.png');

document.getElementById('reset').onclick = function() {
	score.wins = 0
	score.losses = 0  
	score.ties = 0
	localStorage.removeItem('score');
	clearElements()
	wins.innerHTML = 'Wins: ' + 0
	losses.innerHTML = 'losses: ' + 0
	ties.innerHTML = 'ties: ' + 0
}

document.getElementById('return').onclick = function() {
	location.href = 'main_clasic.html';
}