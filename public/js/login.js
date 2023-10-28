// public/js/login.js

import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

document.getElementById("register").addEventListener("click", function(e) {
  e.preventDefault();
  const sapid = document.getElementById("sapid").value;
  const password = document.getElementById("password").value;

  localStorage.setItem("sapid",id);

  // Create a reference to the "users" collection in Firebase
  const db = getDatabase();
  const usersRef = ref(db, "users");
  

  // Check if the SAP ID already exists in Firebase
  get(child(usersRef, sapid)).then((snapshot) => {
    if (snapshot.exists()) {
      if (snapshot.val().password == password) {
        alert("Login Successful");
        var inputValue = document.getElementById('sapid').value;

        // Call a function in another script file and pass the value
        // handleFormSubmission(inputValue);
        // console.log(inputValue);
        window.location.href = "dashboard.html";
      } else {
        alert("Incorrect Password");
      }
    } else {
      alert("User does not exist");
      window.location.href = "sign_up.html";
    }
  });
});

function handleFormSubmission(sapid, password) {
  // You can use 'sapid' and 'password' in script2.js
  console.log("SAP ID:", sapid);
  console.log("Password:", password);
  // ... rest of the code in script2.js
  window.location.href = "dashboard.html";
}
// function submitForm(){
//   var inputValue = document.getElementById('sapid').value;
//   handleFormSubmission(inputValue);
// }


// if (user) {
//     // Get a reference to the student's data in the database
//     var studentRef = firebase.database().ref('students/' + user.uid);

//     // Fetch the student's data
//     studentRef.once('value').then(function(snapshot) {
//         // Check if the student has a name stored in the database
//         if (snapshot.child('name').exists()) {
//             var studentName = snapshot.val().name;
//             document.getElementById('userName').innerHTML = 'Welcome, ' + studentName;
//         } else {
//             document.getElementById('userName').innerHTML = 'Welcome, Student';
//         }
//     }).catch(function(error) {
//         console.error("Error fetching student data: ", error);
//     });
// } else {
//     // Handle the case where the user is not logged in
//     document.getElementById('userName').innerHTML = 'Welcome, Guest';
// }

// public/js/login.js
// document.getElementById("register").addEventListener("click", function(e) {
//   e.preventDefault();
//   const sapid = document.getElementById("sapid").value;
//   const password = document.getElementById("password").value;
  
//   fetch('/api/login', {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ sapid, password })
//   })
//   .then(response => {
//       if (response.ok) {
//           alert("Login Successful");
//           window.location.href = "dashboard.html";
//       } else {
//           alert("Error: Login failed");
//       }
//   })
//   .catch(error => {
//       console.error("Error:", error);
//   });
// });
