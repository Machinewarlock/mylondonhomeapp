$('.submit').click(processForm);

function processForm() {
	var result = $('input').val();
	$('.panel1').html("Search results for: " + result);
	return false;
	$(location).attr('href', '/app/search-results');
}