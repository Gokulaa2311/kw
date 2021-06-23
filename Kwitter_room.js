var firebaseConfig = {
    apiKey: "AIzaSyAI0wU7igj_7Tb2qINA3L1bLSutgzXBSS8",
    authDomain: "kwitter-f33a7.firebaseapp.com",
    databaseURL: "https://kwitter-f33a7-default-rtdb.firebaseio.com",
    projectId: "kwitter-f33a7",
    storageBucket: "kwitter-f33a7.appspot.com",
    messagingSenderId: "540003977234",
    appId: "1:540003977234:web:58f609909db551813e30cb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"add room name"

    });
    localStorage.setItem("room_name" , room_name);
    window.location="kwitter_page.html";

  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; 
    Room_names = childKey;
    console.log("roomname-" + Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div> <hr>";
    document.getElementById("output").innerHTML +=row;
  });
  });
  }
  
  getData();
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.loaction="kwitter_page.html"; 
  }




