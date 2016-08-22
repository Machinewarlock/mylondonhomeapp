$('.select').click(processSelect);
$('li').hide();
$('.sl').hide();
$('.sl').click(processSelectList);

function processSelect(){
	var view = $("#sel1 option:selected").text();
	console.log(view);
	alert(view + " Selected!");

	if (view == "Insert property here") {
		$(".panel1").html("Property Data");
		$(".form-group").hide();	
		$(".select").hide();
		$("li").show();
		$('.sl').show();
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
			if (userCount == 12) {
				document.getElementById("result").style.color = "green";
			} else {
				document.getElementById("result").style.color = "#ff0000";
			}

			if (average >= 3.5 ) {
				document.getElementById("result1").style.color = "green";
			} else {
				document.getElementById("result1").style.color = "#ff0000";
			}			
	 		$(".results").html("Number of viewers: " + userCount);	 		
	 		$(".results1").html("Livingroom Scored: " + average.toFixed(1) + " rating");
	 	}, function(mlh){});

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

			if (average2 >= 3.5 ) {
				document.getElementById("result2").style.color = "green";
			} else {
				document.getElementById("result2").style.color = "#ff0000";
			}				 	 		
	 		$(".results2").html("Diningroom Scored: " + average2.toFixed(1) + " rating");
	 	}, function(mlh){});

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
			if (average3 >= 3.5 ) {
				document.getElementById("result3").style.color = "green";
			} else {
				document.getElementById("result3").style.color = "#ff0000";
			}				 	 		
	 		$(".results3").html("Bedroom Scored " + average3.toFixed(1) + " rating");
	 	}, function(mlh){});

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
			if (average4 >= 3.5 ) {
				document.getElementById("result4").style.color = "green";
			} else {
				document.getElementById("result4").style.color = "#ff0000";
			}	 		 		
	 		$(".results4").html("Bathroom Scored: " + average4.toFixed(1) + " rating");
	 	}, function(mlh){});

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
			if (average5 >= 3.5 ) {
				document.getElementById("result5").style.color = "green";
			} else {
				document.getElementById("result5").style.color = "#ff0000";
			}	 		 			 	 		
	 		$(".results5").html("Garden Scored: " + average5.toFixed(1) + " rating");
	 	}, function(mlh){});

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
			if (average6 >= 3.5 ) {
				document.getElementById("result6").style.color = "green";
			} else {
				document.getElementById("result6").style.color = "#ff0000";
			}	 		 			 		 	 			 		
	 		$(".results6").html("Room Sizes of the Property Scored: " + average6.toFixed(1) + " rating");
	 	}, function(mlh){});

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
			if (average7 >= 3.5 ) {
				document.getElementById("result7").style.color = "green";
			} else {
				document.getElementById("result7").style.color = "#ff0000";
			}	 		 			 			 	 		
	 		$(".results7").html("Lighting of the Property Scored: " + average7.toFixed(1) + " rating");
	 	}, function(mlh){});

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
			if (average8 >= 3.5 ) {
				document.getElementById("result8").style.color = "green";
			} else {
				document.getElementById("result8").style.color = "#ff0000";
			}	 	 	 		
	 		$(".results8").html("Condition of the Property Scored: " + average8.toFixed(1) + " rating");
	 	}, function(mlh){});

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
			if (average9 >= 3.5 ) {
				document.getElementById("result9").style.color = "green";
			} else {
				document.getElementById("result9").style.color = "#ff0000";
			}	 	 	 		
	 		$(".results9").html("Price of the Property Scored: " + average9.toFixed(1) + " rating");
	 	}, function(mlh){});

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
			if (average10 >= 3.5 ) {
				document.getElementById("result10").style.color = "green";
			} else {
				document.getElementById("result10").style.color = "#ff0000";
			}	 	 	 		
	 		$(".results10").html("Location of the Property Scored: " + average10.toFixed(1) + " rating");
	 		var total = (average + average2 + average3 + average4 + average5 + average6 + average7 + average8 + average9 + average10).toFixed(1);
			database.ref('Property-Score').update({
			Score: total
		});
			if (total >= 35 ) {
				document.getElementById("result11").style.color = "green";
			} else {
				document.getElementById("result11").style.color = "#ff0000";
			}	 			
			$(".results11").html("Property Score: " + total);
		}, function(mlh){});
	}
	if (view == "Insert property here1") {
		$(".panel1").html("Property Data");
		$(".form-group").hide();	
		$(".select").hide();
		$("li").show();
		$('.sl').show();
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
			if (userCount == 12) {
				document.getElementById("result").style.color = "green";
			} else {
				document.getElementById("result").style.color = "#ff0000";
			}

			if (average >= 3.5 ) {
				document.getElementById("result1").style.color = "green";
			} else {
				document.getElementById("result1").style.color = "#ff0000";
			}			
	 		$(".results").html("Number of viewers: " + userCount);	 		
	 		$(".results1").html("Livingroom Scored: " + average.toFixed(1) + " rating");
	 	}, function(mlh){});

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

			if (average2 >= 3.5 ) {
				document.getElementById("result2").style.color = "green";
			} else {
				document.getElementById("result2").style.color = "#ff0000";
			}				 	 		
	 		$(".results2").html("Diningroom Scored: " + average2.toFixed(1) + " rating");
	 	}, function(mlh){});

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
			if (average3 >= 3.5 ) {
				document.getElementById("result3").style.color = "green";
			} else {
				document.getElementById("result3").style.color = "#ff0000";
			}				 	 		
	 		$(".results3").html("Bedroom Scored " + average3.toFixed(1) + " rating");
	 	}, function(mlh){});

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
			if (average4 >= 3.5 ) {
				document.getElementById("result4").style.color = "green";
			} else {
				document.getElementById("result4").style.color = "#ff0000";
			}	 		 		
	 		$(".results4").html("Bathroom Scored: " + average4.toFixed(1) + " rating");
	 	}, function(mlh){});

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
			if (average5 >= 3.5 ) {
				document.getElementById("result5").style.color = "green";
			} else {
				document.getElementById("result5").style.color = "#ff0000";
			}	 		 			 	 		
	 		$(".results5").html("Garden Scored: " + average5.toFixed(1) + " rating");
	 	}, function(mlh){});

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
			if (average6 >= 3.5 ) {
				document.getElementById("result6").style.color = "green";
			} else {
				document.getElementById("result6").style.color = "#ff0000";
			}	 		 			 		 	 			 		
	 		$(".results6").html("Room Sizes of the Property Scored: " + average6.toFixed(1) + " rating");
	 	}, function(mlh){});

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
			if (average7 >= 3.5 ) {
				document.getElementById("result7").style.color = "green";
			} else {
				document.getElementById("result7").style.color = "#ff0000";
			}	 		 			 			 	 		
	 		$(".results7").html("Lighting of the Property Scored: " + average7.toFixed(1) + " rating");
	 	}, function(mlh){});

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
			if (average8 >= 3.5 ) {
				document.getElementById("result8").style.color = "green";
			} else {
				document.getElementById("result8").style.color = "#ff0000";
			}	 	 	 		
	 		$(".results8").html("Condition of the Property Scored: " + average8.toFixed(1) + " rating");
	 	}, function(mlh){});

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
			if (average9 >= 3.5 ) {
				document.getElementById("result9").style.color = "green";
			} else {
				document.getElementById("result9").style.color = "#ff0000";
			}	 	 	 		
	 		$(".results9").html("Price of the Property Scored: " + average9.toFixed(1) + " rating");
	 	}, function(mlh){});

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
			if (average10 >= 3.5 ) {
				document.getElementById("result10").style.color = "green";
			} else {
				document.getElementById("result10").style.color = "#ff0000";
			}	 	 	 		
	 		$(".results10").html("Location of the Property Scored: " + average10.toFixed(1) + " rating");
	 		var total = (average + average2 + average3 + average4 + average5 + average6 + average7 + average8 + average9 + average10).toFixed(1);
			database.ref('Property-Score').update({
			Score: total
		});
			if (total >= 35 ) {
				document.getElementById("result11").style.color = "green";
			} else {
				document.getElementById("result11").style.color = "#ff0000";
			}	 			
			$(".results11").html("Property Score: " + total);
		}, function(mlh){});
	} 		 		 		 	
}

function processSelectList(){
		$(".form-group").show();	
		$(".select").show();
		$("li").hide();
		$('.sl').hide();	
}