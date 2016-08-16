$('.select').click(processSelect);

function processSelect(){
	var view = $("#sel1 option:selected").text();
	console.log(view);
	alert(view+ "Selected!");
}