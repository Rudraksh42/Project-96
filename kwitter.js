// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBRNDY_8edz2_FXwgU_LIE0ZH27ugvjyf4",
    authDomain: "glitter-1ad75.firebaseapp.com",
    databaseURL: "https://glitter-1ad75-default-rtdb.firebaseio.com",
    projectId: "glitter-1ad75",
    storageBucket: "glitter-1ad75.appspot.com",
    messagingSenderId: "160517487329",
    appId: "1:160517487329:web:72fd821610d069f70715a0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addUser()
{

    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location="kwitter_room.html";

    firebase.database().ref("/").child(user_name).update({
        purpose: "adding username"
      });
}