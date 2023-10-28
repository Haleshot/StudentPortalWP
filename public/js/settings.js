import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
document.getElementById("settings").addEventListener("click", function(e) {
    e.preventDefault();
    window.location.href = "settings.html";
    // Create a reference to the "users" collection in Firebase
    const db = getDatabase();
    const usersRef = ref(db, "users");
    

    // const db = firebase.database();
    // const usersRef = db.ref("users");

    const sapid = localStorage.getItem("sapid");
    
    function updateUserDetails() {
      // Get updated details from the form
      const name = document.getElementById("name").value;
      const password = document.getElementById("password").value;
      const phoneNumber = document.getElementById("phoneNumber").value;
      const email = document.getElementById("email").value;
    
      
      
    
      // Update user details in Firebase
      usersRef.child(sapid).update({
        name: name,
        password: password,
        phoneNumber: phoneNumber,
        email: email
      })
      .then(() => {
        // Display success message
        document.getElementById("message").innerHTML = "Details updated successfully!";
      })
      .catch((error) => {
        // Display error message
        document.getElementById("message").innerHTML = "Error updating details: " + error.message;
      });
    }
    
    
});

// Initialize Firebase (replace with your Firebase config)
// Example config, replace it with your own Firebase project config
// const firebaseConfig = {
//     apiKey: "YOUR_API_KEY",
//     authDomain: "YOUR_AUTH_DOMAIN",
//     databaseURL: "YOUR_DATABASE_URL",
//     projectId: "YOUR_PROJECT_ID",
//     storageBucket: "YOUR_STORAGE_BUCKET",
//     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//     appId: "YOUR_APP_ID"
//   };
  
  
  // Reference to the users collection in Firebase
 