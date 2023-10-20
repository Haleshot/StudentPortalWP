// public/js/login.js

import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

document.getElementById("register").addEventListener("click", function(e) {
  e.preventDefault();
  const sapid = document.getElementById("sapid").value;
  const password = document.getElementById("password").value;

  // Create a reference to the "users" collection in Firebase
  const db = getDatabase();
  const usersRef = ref(db, "users");

  // Check if the SAP ID already exists in Firebase
  get(child(usersRef, sapid)).then((snapshot) => {
    if (snapshot.exists()) {
      if (snapshot.val().password == password) {
        alert("Login Successful");
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
