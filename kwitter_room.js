
const firebaseConfig = {
    apiKey: "AIzaSyC5OHk7ggb0GL6qy5Rz7w21zWxBjTFTlAQ",
    authDomain: "project-kwitter-d68e6.firebaseapp.com",
    projectId: "project-kwitter-d68e6",
    storageBucket: "project-kwitter-d68e6.appspot.com",
    messagingSenderId: "1075697597734",
    appId: "1:1075697597734:web:c89b904d58b146f4a915e7"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();

