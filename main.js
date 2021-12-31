var firebaseConfig = {
    apiKey: "AIzaSyA89X1mh6TGuoC-8j-30AHwk2zgRzOo6UA",
    authDomain: "project-94-a92ad.firebaseapp.com",
    databaseURL: "https://project-94-a92ad-default-rtdb.firebaseio.com",
    projectId: "project-94-a92ad",
    storageBucket: "project-94-a92ad.appspot.com",
    messagingSenderId: "350494944418",
    appId: "1:350494944418:web:73a67fa675637f04247bfb",
    measurementId: "G-DR7RX22QRS"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}