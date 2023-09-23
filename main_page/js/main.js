function onedefault(selected_one) {
	document.getElementById(selected_one).style.background = '#121212';
	document.getElementById(selected_one).style.borderBottom = 'none';
}


function allDefault() {
	onedefault('classic_button');
	onedefault('sample_button');
	onedefault('market_button');
	onedefault('news_button');
}


function selected(selected_item) {
	document.getElementById(selected_item).style.background = '#292929';
	document.getElementById(selected_item).style.borderBottom = '3px solid #dea309';
}


function changeButton(item_selected) {
	allDefault();
	selected(item_selected);
}


function pageButtons(button_id, display_style) {
	document.getElementById(button_id).onclick = function() {
		changeButton(button_id);
		document.querySelector('.content').style.display = display_style;
	}
}


function locationHref(button_id, location_id) {
	document.getElementById(button_id).onclick = function() {
		location.href = location_id;
	}
}


let account_name = localStorage.getItem('account_name') || 'nameUndefined'

if (account_name.length > 19) {
	account_name = account_name.slice(0, -4) + '..'
}

document.getElementById('account_name').innerHTML = account_name;


buttons = ['sample_button', 'market_button', 'news_button', 'classic_button']

for (var i = 0; i <= buttons.length -1; i++) {
	if (buttons[i] === 'classic_button') {
		pageButtons(buttons[i], 'grid');
	}
	else {
		pageButtons(buttons[i], 'none');
	}
}

locationHref('exit', '/index.html');
locationHref('rps_play', 'rock_paper_scissors.html');
locationHref('ttt_play', 'tic_tac_toe.html');
locationHref('calc_play', 'calculator.html');