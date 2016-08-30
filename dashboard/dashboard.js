$('.sign').click(validateMyForm);

function validateMyForm(){
   var email = $('input[name=email]').val();
    if (email == "" || email == null) {
        alert("Please enter an email!");
        return false;
    };
    localStorage.setItem('email', email);
        database.ref('email-address/'+ email).set({
        Email: email
    });     

    var password = $('input[name=password]').val();
    if (password == "" || password == null) {
    	alert("Please enter a password!");
    	return false;
    };
    localStorage.setItem('password', password);
        database.ref('password/'+ [email]).set({
        [email]: password
    });
    $(location).attr('href', '/dashboard/property/');
}