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

	var bedroom = $('input[name=datalabel3]').val();
	if (bedroom == null || bedroom == ""){
 		alert("Please Enter No. of Bedrooms!")
 		return false;
 	}
 	localStorage.setItem('bedroom', bedroom);
		database.ref('property-bedroom/'+ [property]).set({
    	[property]: bedroom
    });

	var bathroom = $('input[name=datalabel4]').val();
	if (bathroom == null || bathroom == ""){
 		alert("Please Enter No. of Bathrooms!")
 		return false;
 	}
 	localStorage.setItem('bathroom', bathroom);
		database.ref('property-bathroom/'+ [property]).set({
    	[property]: bathroom
    });

	var reception = $('input[name=datalabel5]').val();
	if (reception == null || reception == ""){
 		alert("Please Enter No. of Receptions!")
 		return false;
 	}
 	localStorage.setItem('reception', reception);
		database.ref('property-reception/'+ [property]).set({
    	[property]: reception
    });
	//$(location).attr('href', '/app/instruction/')
	alert(property + ' added!')	
 	return false; 	
};
