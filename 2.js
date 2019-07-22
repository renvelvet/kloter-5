function is_username_valid(username) {
// Format username : merupakan kombinasi dari huruf kecil,
// huruf besar dan angka dengan panjang 5-9 karakter. Username
// tidak boleh diawali dengan angka / karakter special.
	const validation = /[^0-9\+\*\?\^\$\\\.\[\]\{\}\(\)\|\/][\w\W\d]{5,9}/;
	return validation.test(username);
}

// Test case
console.log(is_username_valid('Xrutaf888'));
console.log(is_username_valid('1Diana'));

function is_password_valid(password) {
// Format password : merupakan kombinasi dari huruf kecil,
// huruf besar minimal satu karakter, angka minimal satu karakter,
// dan karakter spesial minimal satu karakter dan harus memiliki
// karakter simbol “=” dan panjang minimal 8 karakter.
	const validation = /(?=.*[=])[\w\W\d\!\@\#\$\%\^\&]{8,}/;
	return validation.test(password);
}

// Test case 
console.log(is_password_valid('passW0rd='));
console.log(is_password_valid('C0d3YourFuture!#'));
