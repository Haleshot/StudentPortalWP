// // logout.js

// import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";


// const logoutButton = document.getElementById('logout-button');

// // Add a click event listener to the logout button
// logoutButton.addEventListener('click', () => {
//     firebase.auth().signOut().then(() => {
//         // Sign-out successful, redirect to the login page
//         window.location.href = 'login.html';
//     }).catch((error) => {
//         // An error happened
//         console.error(error);
//     });
// });


import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

document.getElementById("logout-button").addEventListener("click", function(e) {
    e.preventDefault();
    // Create a reference to the "users" collection in Firebase
    const db = getDatabase();
    const usersRef = ref(db, "users");
    // const sapid = document.getElementById("sapid").value;

    
    // Check if the SAP ID already exists in Firebase
    // get(child(usersRef, sapid)).then((snapshot) => {
    //     if (snapshot.exists()) {
            alert("Logout Successful");
            window.location.href = "login.html";
    //     });
});