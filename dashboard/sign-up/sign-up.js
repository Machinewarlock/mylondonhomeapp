$('.sign').click(validateMyForm);

function validateMyForm(){
   var x = $("#inputEmail3").val();
   var y = $("#inputPassword3").val();
    if (x == "" || x == null) {
        alert("Please enter an email!");
        return false;
    };
    if (y == "" || y == null) {
    	alert("Please enter a password!");
    	return false;
    };
    firebase.auth().createUserWithEmailAndPassword(x, y).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
}