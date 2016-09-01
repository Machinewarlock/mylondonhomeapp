// This is a function that will allow us to store each decision with the username of each user
//for this we will need to use this line: var username = getUsername(); in each decision function.
function getUsername() {
	var username = localStorage.getItem('username');
	return username;
}
// This is a function that allows us to store search results and by using var result = getResult(); we can retrieve the
// store result
function getResult() {
	var result = localStorage.getItem('result');
	return result;
}