$('.submit').click(processSubmit);

var username = getUsername();
$('.username').html(username);

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
var rating2 = $("#form2").submit();
var rating3 = $("#form3").submit();
var rating4 = $("#form4").submit();
var rating5 = $("#form5").submit();
var rating6 = $("#form6").submit();
var rating7 = $("#form7").submit();
var rating8 = $("#form8").submit();
var rating9 = $("#form9").submit();
var rating10 = $("#form10").submit();

	  if (rating = true){
		var a = parseInt($("input[name=rating]:checked").val());
			database.ref('Livingroom').update({
	  		[username]: a
	 	});
		$(".panel1").html("MLH thanks you for your data on the Livingroom.");
	 	$("#form1").remove();	
		database.ref('Livingroom').on('value', function(snapshot){
	 		var userCount = 0;
	 		var ratingSum = 0;
	 		snapshot.forEach(function(data){
	 			userCount += 1;
	 			ratingSum += data.val();
	 		});
	 		var average = ratingSum / userCount;
	 		$(".results").html(userCount + " votes recorded (" + average.toFixed(1) + " rating)");
	 	}, function(err){});

	};
	  if (rating2 = true){
		var b = parseInt($("input[name=ratingtwo]:checked").val());
			database.ref('Diningroom').update({
	  		[username]: b
	 	});
		$(".panel2").html("MLH thanks you for your data on the Diningroom.");
	 	$("#form2").remove();	
		database.ref('Diningroom').on('value', function(snapshot){
	 		var userCount2 = 0;
	 		var ratingSum2 = 0;
	 		snapshot.forEach(function(data){
	 			userCount2 += 1;
	 			ratingSum2 += data.val();
	 		});
	 		var average2 = ratingSum2 / userCount2;
	 		$(".results2").html(userCount2 + " votes recorded (" + average2.toFixed(1) + " rating)");
	 	}, function(err){});

	}
	  if (rating3 = true){
		var c = parseInt($("input[name=ratingthree]:checked").val());
			database.ref('Bedroom').update({
	  		[username]: c
	 	});
		$(".panel3").html("MLH thanks you for your data on the Bedroom.");
	 	$("#form3").remove();	
		database.ref('Bedroom').on('value', function(snapshot){
	 		var userCount3 = 0;
	 		var ratingSum3 = 0;
	 		snapshot.forEach(function(data){
	 			userCount3 += 1;
	 			ratingSum3 += data.val();
	 		});
	 		var average3 = ratingSum3 / userCount3;
	 		$(".results3").html(userCount3 + " votes recorded (" + average3.toFixed(1) + " rating)");
	 	}, function(err){});
			
	}
	  if (rating4 = true){
		var d = parseInt($("input[name=ratingfour]:checked").val());
			database.ref('Bathroom').update({
	  		[username]: d
	 	});
		$(".panel4").html("MLH thanks you for your data on the Bathroom.");
	 	$("#form4").remove();	
		database.ref('Bathroom').on('value', function(snapshot){
	 		var userCount4 = 0;
	 		var ratingSum4 = 0;
	 		snapshot.forEach(function(data){
	 			userCount4 += 1;
	 			ratingSum4 += data.val();
	 		});
	 		var average4 = ratingSum4 / userCount4;
	 		$(".results4").html(userCount4 + " votes recorded (" + average4.toFixed(1) + " rating)");
	 	}, function(err){});
			
	}
	  if (rating5 = true){
		var e = parseInt($("input[name=ratingfive]:checked").val());
			database.ref('Garden').update({
	  		[username]: e
	 	});
		$(".panel5").html("MLH thanks you for your data on the Garden.");
	 	$("#form5").remove();	
		database.ref('Garden').on('value', function(snapshot){
	 		var userCount5 = 0;
	 		var ratingSum5 = 0;
	 		snapshot.forEach(function(data){
	 			userCount5 += 1;
	 			ratingSum5 += data.val();
	 		});
	 		var average5 = ratingSum5 / userCount5;
	 		$(".results5").html(userCount5 + " votes recorded (" + average5.toFixed(1) + " rating)");
	 	}, function(err){});
			
	}
	  if (rating6 = true){
		var f = parseInt($("input[name=ratingsix]:checked").val());
			database.ref('Room-Sizes').update({
	  		[username]: f
	 	});
		$(".panel6").html("MLH thanks you for your data on the Room Sizes.");
	 	$("#form6").remove();	
		database.ref('Room-Sizes').on('value', function(snapshot){
	 		var userCount6 = 0;
	 		var ratingSum6 = 0;
	 		snapshot.forEach(function(data){
	 			userCount6 += 1;
	 			ratingSum6 += data.val();
	 		});
	 		var average6 = ratingSum6 / userCount6;
	 		$(".results6").html(userCount6 + " votes recorded (" + average6.toFixed(1) + " rating)");
	 	}, function(err){});
			
	}
	  if (rating7 = true){
		var g = parseInt($("input[name=ratingseven]:checked").val());
			database.ref('Lighting').update({
	  		[username]: g
	 	});
		$(".panel7").html("MLH thanks you for your data on the Lighting of the Property.");
	 	$("#form7").remove();	
		database.ref('Lighting').on('value', function(snapshot){
	 		var userCount7 = 0;
	 		var ratingSum7 = 0;
	 		snapshot.forEach(function(data){
	 			userCount7 += 1;
	 			ratingSum7 += data.val();
	 		});
	 		var average7 = ratingSum7 / userCount7;
	 		$(".results7").html(userCount7 + " votes recorded (" + average7.toFixed(1) + " rating)");
	 	}, function(err){});
			
	}
	  if (rating8 = true){
		var h = parseInt($("input[name=ratingeight]:checked").val());
			database.ref('Condition').update({
	  		[username]: h
	 	});
		$(".panel8").html("MLH thanks you for your data on the Condition of the Property.");
	 	$("#form8").remove();	
		database.ref('Condition').on('value', function(snapshot){
	 		var userCount8 = 0;
	 		var ratingSum8 = 0;
	 		snapshot.forEach(function(data){
	 			userCount8 += 1;
	 			ratingSum8 += data.val();
	 		});
	 		var average8 = ratingSum8 / userCount8;
	 		$(".results8").html(userCount8 + " votes recorded (" + average8.toFixed(1) + " rating)");
	 	}, function(err){});
			
	}
	  if (rating9 = true){
		var i = parseInt($("input[name=ratingnine]:checked").val());
			database.ref('Price').update({
	  		[username]: i
	 	});
		$(".panel9").html("MLH thanks you for your data on the Price of the Property.");
	 	$("#form9").remove();	
		database.ref('Price').on('value', function(snapshot){
	 		var userCount9 = 0;
	 		var ratingSum9 = 0;
	 		snapshot.forEach(function(data){
	 			userCount9 += 1;
	 			ratingSum9 += data.val();
	 		});
	 		var average9 = ratingSum9 / userCount9;
	 		$(".results9").html(userCount9 + " votes recorded (" + average9.toFixed(1) + " rating)");
	 	}, function(err){});
			
	}
	  if (rating10 = true){
		var j = parseInt($("input[name=ratingten]:checked").val());
			database.ref('Location').update({
	  		[username]: j
	 	});
		$(".panel10").html("MLH thanks you for your data on the Location of the Property.");
	 	$("#form10").remove();	
		database.ref('Location').on('value', function(snapshot){
	 		var userCount10 = 0;
	 		var ratingSum10 = 0;
	 		snapshot.forEach(function(data){
	 			userCount10 += 1;
	 			ratingSum10 += data.val();
	 		});
	 		var average10 = ratingSum10 / userCount10;
	 		$(".results10").html(userCount10 + " votes recorded (" + average10.toFixed(1) + " rating)");
	 	}, function(err){});
			
	}
	return false;
};
