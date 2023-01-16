
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCGgxahHjbnhAizGZkORnyUSUDqjGFVwFQ",
      authDomain: "kwitter-a5548.firebaseapp.com",
      databaseURL: "https://kwitter-a5548-default-rtdb.firebaseio.com",
      projectId: "kwitter-a5548",
      storageBucket: "kwitter-a5548.appspot.com",
      messagingSenderId: "343000003352",
      appId: "1:343000003352:web:260ecf35d1362bfdb6e46d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML ="Welcome To Kwitter "+user_name

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "Kwitter_page.html";
} 

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "Kwitter_page.html";
}