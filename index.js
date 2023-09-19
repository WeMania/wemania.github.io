document.getElementById('link').onclick = function() {
	let page = document.querySelector('.login_text').innerHTML;
	
	if (page === 'LOGIN') {
		document.querySelector('.login_text').innerHTML = 'SIGN UP';
		document.querySelector('.login_button').innerHTML = 'SIGN UP';
		document.getElementById('link').innerHTML = 'LOGIN';
		document.title = 'Sign Up';
	}
	if (page === 'SIGN UP') {
		document.querySelector('.login_text').innerHTML = 'LOGIN';
		document.querySelector('.login_button').innerHTML = 'LOGIN';
		document.getElementById('link').innerHTML = 'SIGN UP';
		document.title = 'Login';
	}
}


document.getElementById('login_submit').onclick = function() {
	let page = document.querySelector('.login_text').innerHTML;
	
	const accounts = JSON.parse(localStorage.getItem('accounts')) || {
		'maniaika07@gmail.com': 'password123'
	}

	let valid = true;
	let user_found = false;
	let num = 0;
	let acc = Object.keys(accounts);

	user = document.getElementById('user').value;
	pasw = document.getElementById('pasw').value;

	if (page === 'LOGIN') {

		while (num !== acc.length) {
			if (acc[num] === user) {
				user_found = true;
				console.log('exiting loop');
				break;
			} 
			else {
				num += 1;
			}
		}

		if (user_found) {
			if (accounts[acc[num]] === pasw) {
				localStorage.setItem('account_name', acc[num]);
				location.href = 'main_page/main_clasic.html'; // here
			}
			else {
				document.getElementById('pop_up').innerHTML = 'Wrong Username Or password';
			}
		}
		if (!user_found) {
			document.getElementById('pop_up').innerHTML = 'User Not Found';
		}
	}


	if (page === 'SIGN UP') {

		if (user.length > 3 && pasw.length > 3) {
			while (num !== acc.length) {
				if (acc[num] === user) {
					document.getElementById('pop_up').innerHTML = 'User Taken';
					valid = false;
					break;
				} 
				else {
					num += 1;
				}
			} 
			if (valid) {
					accounts[user] = pasw;
					localStorage.setItem('accounts', JSON.stringify(accounts));
					document.getElementById('pop_up').innerHTML = 'Account Created';
					alert('Account Created');
				}
		}
		else {
			document.getElementById('pop_up').innerHTML = 'More Then 3 Characters';
		}
	}
}

