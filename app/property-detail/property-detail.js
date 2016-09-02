$('.submit').click(processForm);

function processForm() {
	var property = $('input[name=datalabel1]').val();
	if (property == null || property == ""){
 		alert("Please Enter Property Address!")
 		return false;
 	}
 	localStorage.setItem('property', property);
		database.ref('property-address/'+ property).set({
    	Address: property
    });	

	var price = $('input[name=datalabel2]').val();
	if (price == null || price == ""){
 		alert("Please Enter Price!")
 		return false;
 	}
 	localStorage.setItem('price', price);
		database.ref('property-price/'+ [property]).set({
    	[property]: price
    });

	var view = $("#sel1 option:selected").text();
	console.log(view);
		database.ref('property-bedroom/' + [property]).update({
		[property]: view
});

	var view2 = $("#sel2 option:selected").text();
	console.log(view);
		database.ref('property-bathroom/' + [property]).update({
		[property]: view2
});

	var view3 = $("#sel3 option:selected").text();
	console.log(view);
		database.ref('property-reception/' + [property]).update({
		[property]: view3
});

	$(location).attr('href', '/app/overview')
	alert(property + ' added!')	
 	return false; 	
};

$('.submite').click(processResult);

var result = getResult();
$('span').html(result);

function processResult() {
	var result = $('input').val();
	localStorage.setItem('result', result);
}