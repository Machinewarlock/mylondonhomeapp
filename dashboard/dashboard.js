$('.sign').click(validateMyForm);

function validateMyForm(){
    var x;
    x = $("#inputEmail3").value;
    var y;
    y = $("#inputPassword3").value;
    if (x == "") {
        alert("Please enter an email!");
        return false;
    };
    if (y == "") {
    	alert("Please enter a password!");
    	return false;
    };
}