$('.form-set-username').on('submit', processForm);

function processForm() {
	var username = $('input').val();
	if (username == null || username == ""){
 		alert("Please Enter Client's Name!")
 		return false;
 	}
 	localStorage.setItem('username', username);
		database.ref('users/'+ username).set({
    	username: username
    });
	$(location).attr('href', '/app/instruction/')	
 	return false;
};
