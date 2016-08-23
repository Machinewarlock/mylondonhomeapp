// File for firebase related variables and functions//


//----------VARIABLES------//
//function call to set up databse
setupFirebase();
//variable with path to database
var database = firebase.database();
// variable that will be updated with the current view in firebase field

//----FUNCTIONS---------------//
function setupFirebase(){
  var config = {
    apiKey: "AIzaSyDP7EhnmEjTxoDbXjPD6wRsGHVzFN1IPM0",
    authDomain: "mylondonhomeapp-test.firebaseapp.com",
    databaseURL: "https://mylondonhomeapp-test.firebaseio.com",
    storageBucket: "mylondonhomeapp-test.appspot.com",
  };
  firebase.initializeApp(config);
}

    