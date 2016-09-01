$('.submit').click(processForm);

var result = getResult();
$('span').html(result);

function processForm() {
	var result = $('input').val();
	localStorage.setItem('result', result);
	$(location).attr('href', '/app/search-results/');
}