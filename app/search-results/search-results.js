$('.submit').click(processResult);

var result = getResult();
$('span').html(result);

function processResult() {
	var result = $('input').val();
	localStorage.setItem('result', result);
}