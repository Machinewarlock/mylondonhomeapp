$('.submit').click(processSubmit);
$('.prop').hide();
var username = getUsername();
$('.username').html(username);

var average = 0;
var average2 = 0;
var average3 = 0;
var average4 = 0;
var average5 = 0;
var average6 = 0;
var average7 = 0;
var average8 = 0;
var average9 = 0;
var average10 = 0;

function processSubmit(){

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
	 		average = ratingSum / userCount;
			database.ref('Livingroom-average').update({
	  		Score: average
	 	});	 		
	 		$(".results").html(userCount + " votes recorded (" + average.toFixed(1) + " rating)");
	 	}, function(mlh){});


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
	 		average2 = ratingSum2 / userCount2;
			database.ref('Diningroom-average').update({
	  		Score: average2
	 	});	 		
	 		$(".results2").html(userCount2 + " votes recorded (" + average2.toFixed(1) + " rating)");
	 	}, function(mlh){});


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
	 		average3 = ratingSum3 / userCount3;
			database.ref('Bedroom-average').update({
	  		Score: average3
	 	});	 		
	 		$(".results3").html(userCount3 + " votes recorded (" + average3.toFixed(1) + " rating)");
	 	}, function(mlh){});
			

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
	 		average4 = ratingSum4 / userCount4;
			database.ref('Bathroom-average').update({
	  		Score: average4
	 	});	 		
	 		$(".results4").html(userCount4 + " votes recorded (" + average4.toFixed(1) + " rating)");
	 	}, function(mlh){});
			

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
	 		average5 = ratingSum5 / userCount5;
			database.ref('Garden-average').update({
	  		Score: average5
	 	});	 		
	 		$(".results5").html(userCount5 + " votes recorded (" + average5.toFixed(1) + " rating)");
	 	}, function(mlh){});
			

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
	 		average6 = ratingSum6 / userCount6;
			database.ref('Room-Sizes-average').update({
	  		Score: average6
	 	});	 			 		
	 		$(".results6").html(userCount6 + " votes recorded (" + average6.toFixed(1) + " rating)");
	 	}, function(mlh){});
			

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
	 		average7 = ratingSum7 / userCount7;
			database.ref('Lighting-average').update({
	  		Score: average7
	 	});	 		
	 		$(".results7").html(userCount7 + " votes recorded (" + average7.toFixed(1) + " rating)");
	 	}, function(mlh){});
			

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
	 		average8 = ratingSum8 / userCount8;
			database.ref('Condition-average').update({
	  		Score: average8
	 	});	 		
	 		$(".results8").html(userCount8 + " votes recorded (" + average8.toFixed(1) + " rating)");
	 	}, function(mlh){});
			

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
	 		average9 = ratingSum9 / userCount9;
	 		database.ref('Price-average').update({
	  		Score: average9
	 	});	 		
	 		$(".results9").html(userCount9 + " votes recorded (" + average9.toFixed(1) + " rating)");
	 	}, function(mlh){});


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
	 		average10 = ratingSum10 / userCount10;
			database.ref('Location-average').update({
	  		Score: average10
	 	});	 		
	 		$(".results10").html(userCount10 + " votes recorded (" + average10.toFixed(1) + " rating)");
	 		var total = (average + average2 + average3 + average4 + average5 + average6 + average7 + average8 + average9 + average10).toFixed(1);
			database.ref('Property-Score').update({
			Score: total
		});	
			$('.prop').show();
			$('#avg').html("Total Property Score " + total);
	 	}, function(mlh){});
	$(location).attr('href', '/app/thank-you/')   
	return false;
};
