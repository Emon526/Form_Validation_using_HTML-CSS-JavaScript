const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {

    const fullnameValue = fullname.value.trim();
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	var specialcharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if(fullnameValue === '' ) {
		setErrorFor(fullname, 'Full Name can\'t be blank');
	}
	
	else {
		if(!specialcharacter.test(fullnameValue)){

		var arr = fullnameValue.match(/\S+/g);
		var newstr = arr.join();
		// console.log(arr.length);
		// console.log(newstr);
		if(arr.length >= 2){
			setSuccessFor(fullname);
		}
		else{
			setErrorFor(fullname,'Please Input Your Full Name')
		}
		  } else {
			setErrorFor(fullname,'Not a Valid Name')
		  }
		
	
	}


	if(usernameValue === '') {
		setErrorFor(username, 'User Name can\'t be blank');
	}
	else {

		if(usernameValue.includes('.')){

			if(!(usernameValue.indexOf('.')+1 == usernameValue.length)){
				// console.log(usernameValue.indexOf('.'));
				// console.log(usernameValue.indexOf('.')+1 );
				// console.log(usernameValue.length);
				setSuccessFor(username);	
			}else{
				setErrorFor(username,'Invalid Username');
			}
		}else{
			setErrorFor(username,'Must Include . in username');
		}
		
		
	
	
	}

	
	if(emailValue === '') {
		setErrorFor(email, 'Email can\'t be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password can\'t be blank');
	} else if(passwordValue.length < 6){
		setErrorFor(password,'Password Should be 6 Character Long');
	}
	else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Confirm Password can\'t be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Confirm Password does not match');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
