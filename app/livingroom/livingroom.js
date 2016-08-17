$('.submit').click(processSubmit)

function processSubmit(){
$("#form1").submit();
$("#form2").submit();
var rating = $("#form1").submit();
var rating1 = $("#form2").submit();

  if (rating = true){
	var x = parseInt($("input[name=rating]:checked").val());
		console.log("Livingroom scored " + x);
		alert("Livingroom scored " + x);
	}
  if (rating1 = true){
	var y = parseInt($("input[name=ratingtwo]:checked").val());
		console.log("Diningroom scored " + y);
		alert("Diningroom scored " + y);
	}
	return false;
};
