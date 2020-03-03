// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAqc7t8eLZbd7cXASuEaW9Aoj7s9qFfTIc",
    authDomain: "plogogram.firebaseapp.com",
    databaseURL: "https://plogogram.firebaseio.com",
    projectId: "plogogram",
    storageBucket: "plogogram.appspot.com",
    messagingSenderId: "300673699370",
    appId: "1:300673699370:web:c902ec888c98571dcbbd53",
    measurementId: "G-ZXF12F787S"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
console.log(firebase);

/*
	This is Vandesm14:
	
	It's a really bad idea to store your API key and such in your frontend file. Doing so will allow users to easily modify and delete your database. You should be storing the token in a .env file and using your server for the connections
*/

//make the databaseURL

var database = firebase.database();
var ref = database.ref("/");
var data = {
  username: "Rohil",
  title: "Hello World!",
  context: "Me context"
}

ref.push(data);