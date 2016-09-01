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

// FirebaseUI config.
      var uiConfig = {
        // Query parameter name for mode.
        'queryParameterForWidgetMode': 'mode',
        // Query parameter name for sign in success url.
        'queryParameterForSignInSuccessUrl': 'signInSuccessUrl',
        'signInSuccessUrl': 'http://app.mlhapp.net/dashboard/property/',
        'signInOptions': [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        'tosUrl': '<your-tos-url>',
        'callbacks': {
          'signInSuccess': function(currentUser, credential, redirectUrl) {
            // Do something.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
          }
        }
      };

      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);