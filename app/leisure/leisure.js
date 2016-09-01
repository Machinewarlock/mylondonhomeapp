$('.submit').click(processResult);

function processResult() {
	var result = $('input').val();
	localStorage.setItem('result', result);
}