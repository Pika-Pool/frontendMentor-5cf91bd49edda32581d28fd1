const formElement = document.getElementById('form');
const inputBlocks = document.querySelectorAll('.input-block');

formElement.addEventListener('submit', e => {
	e.preventDefault();

	validateFirstName();
	validateLastName();
	validateEmail();
	validatePassword();
});

inputBlocks.forEach(inputBlock => {
	inputBlock.addEventListener('input', () => {
		inputBlock.classList.remove('error');
	});
});

function validateFirstName() {
	const nameRegex = /^[a-zA-Z0-9]+$/;

	const firstNameElement = document.getElementById('first-name');
	if (firstNameElement.value.length === 0) {
		showError(firstNameElement, 'First name is required');
	} else {
		validateString(
			nameRegex,
			firstNameElement,
			'Use only uppercase and lowercase letters and numbers'
		);
	}
}

function validateLastName() {
	const nameRegex = /^[a-zA-Z0-9]+$/;

	const lastNameElement = document.getElementById('last-name');
	if (lastNameElement.value.length === 0) {
		showError(lastNameElement, 'Last name is required');
	} else {
		validateString(
			nameRegex,
			lastNameElement,
			'Use only uppercase and lowercase letters and numbers'
		);
	}
}

function validateEmail() {
	const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const emailElement = document.getElementById('email');

	if(emailElement.value.length === 0) {
		showError(emailElement, 'Email is required');
	} else {
		validateString(
			emailRegex,
			document.getElementById('email'),
			'Invalid email address'
		);
	}
}

function validatePassword() {
	const passwordElement = document.getElementById('password');
	const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z]).{8,32}$/;

	if (passwordElement.value.length < 8 || passwordElement.value.length > 32) {
		showError(passwordElement, 'Password length should be 8-32');
	} else {
		validateString(
			passwordRegex,
			passwordElement,
			'Password should have atleast 1 digit and 1 letter'
		);
	}
}

function validateString(regex, element, errMsg) {
	if (!regex.test(element.value)) {
		showError(element, errMsg);
	}
}

function showError(element, errMsg) {
	const inputBlock = element.parentNode;
	inputBlock.classList.add('error');
	inputBlock.querySelector('.errorMessage').textContent = errMsg;
}
