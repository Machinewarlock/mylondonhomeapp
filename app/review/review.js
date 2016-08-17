$('.submit').click(processSubmit)

function processSubmit(){
$("#form1").submit();
$("#form2").submit();
$("#form3").submit();
$("#form4").submit();
$("#form5").submit();
$("#form6").submit();
$("#form7").submit();
$("#form8").submit();
$("#form9").submit();
$("#form10").submit();

var rating = $("#form1").submit();
var rating1 = $("#form2").submit();
var rating2 = $("#form3").submit();
var rating3 = $("#form4").submit();
var rating4 = $("#form5").submit();
var rating5 = $("#form6").submit();
var rating6 = $("#form7").submit();
var rating7 = $("#form8").submit();
var rating8 = $("#form9").submit();
var rating9 = $("#form10").submit();

  if (rating = true){
	var a = parseInt($("input[name=rating]:checked").val());
		console.log("Livingroom scored " + a);
		alert("Livingroom scored " + a);
	}
  if (rating1 = true){
	var b = parseInt($("input[name=ratingtwo]:checked").val());
		console.log("Diningroom scored " + b);
		alert("Diningroom scored " + b);
	}
  if (rating2 = true){
	var c = parseInt($("input[name=ratingthree]:checked").val());
		console.log("Bedroom scored " + c);
		alert("Bedroom scored " + c);
	}
  if (rating3 = true){
	var d = parseInt($("input[name=ratingfour]:checked").val());
		console.log("Bathroom scored " + d);
		alert("Bathroom scored " + d);
	}
  if (rating4 = true){
	var e = parseInt($("input[name=ratingfive]:checked").val());
		console.log("Garden scored " + e);
		alert("Garden scored " + e);
	}
  if (rating5 = true){
	var f = parseInt($("input[name=ratingsix]:checked").val());
		console.log("Room Sizes scored " + f);
		alert("Room Sizes scored " + f);
	}
  if (rating6 = true){
	var g = parseInt($("input[name=ratingseven]:checked").val());
		console.log("Lighting scored " + g);
		alert("Lighting scored " + g);
	}
  if (rating7 = true){
	var h = parseInt($("input[name=ratingeight]:checked").val());
		console.log("Condition scored " + h);
		alert("Condition scored " + h);
	}
  if (rating8 = true){
	var i = parseInt($("input[name=ratingnine]:checked").val());
		console.log("Price scored " + i);
		alert("Price scored " + i);
	}
  if (rating9 = true){
	var j = parseInt($("input[name=ratingten]:checked").val());
		console.log("Location scored " + j);
		alert("Location scored " + j);
	}
};
