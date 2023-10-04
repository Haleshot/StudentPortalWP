// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXmzpSNIpV6nVvY2mCA8KVAUCTz_srfts",
  authDomain: "studentportal2-2c9d5.firebaseapp.com",
  databaseURL: "https://studentportal2-2c9d5-default-rtdb.firebaseio.com/",
  projectId: "studentportal2-2c9d5",
  storageBucket: "studentportal2-2c9d5.appspot.com",
  messagingSenderId: "285092598579",
  appId: "1:285092598579:web:353b47ac3e0aa44b00e446",
  measurementId: "G-HMJJQ9KBRR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Form validation function
function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const sapid = document.getElementById("sapid").value;
  const password = document.getElementById("password").value;
  
  if (name == "" || name == null) {
    alert("Name must be filled out");
    document.getElementById("name").focus();
    return false;
  }
  if (isNaN(name) == false) {
    alert("Name must not be a number");
    document.getElementById("name").focus();
    return false;
  }
  if (email == "" || email == null) {
    alert("Email must be filled out");
    document.getElementById("email").focus();
    return false;
  }
  if (email.search(" ") > 0) {
    alert("Email must not contain any spaces");
    document.getElementById("email").focus();
    return false;
  }
  if (email.search("@") < 0) {
    alert("Email must contain @");
    document.getElementById("email").focus();
    return false;
  }
  if (email.search(".") < 0) {
    alert("Email must contain .");
    document.getElementById("email").focus();
    return false;
  }

  function isNMIMSEmail(email) {
    var domain = email.split('@')[1];
    return domain === 'nmims.edu.in';
  }
  if (isNMIMSEmail(email) == false) {
    alert("Email must be an NMIMS email");
    document.getElementById("email").focus();
    return false;
  }
  if (phone == "" || phone == null) {
    alert("Phone must be filled out");
    document.getElementById("phone").focus();
    return false;
  }
  if (isNaN(phone)) {
    alert("Phone must be a number");
    document.getElementById("phone").focus();
    return false;
  }
  if (phone.search(" ") > 0) {
    alert("Phone must not contain any spaces");
    document.getElementById("phone").focus();
    return false;
  }
  if (phone.length != 10) {
    alert("Phone must be 10 characters long");
    document.getElementById("phone").focus();
    return false;
  }
  if (sapid == "") {
    alert("SAP ID must be filled out");
    document.getElementById("sapid").focus();
    return false;
  }
  if (isNaN(sapid)) {
    alert("SAP ID must be a number");
    document.getElementById("sapid").focus();
    return false;
  }
  if (sapid.search(" ") > 0) {
    alert("SAP ID must not contain any spaces");
    document.getElementById("sapid").focus();
    return false;
  }
  if (sapid.length != 11) {
    alert("SAP ID must be 11 characters long");
    document.getElementById("sapid").focus();
    return false;
  }
  if (password == "" || password == null) {
    alert("Password must be filled out");
    document.getElementById("password").focus();
    return false;
  }
  if (password.length < 8) {
    alert("Password must be at least 8 characters long");
    document.getElementById("password").focus();
    return false;
  }
  if (password.length > 15) {
    alert("Password must be less than 15 characters long");
    document.getElementById("password").focus();
    return false;
  }
  if (password.search(/[a-z]/i) < 0) {
    alert("Your password must contain at least one letter.");
    document.getElementById("password").focus();
    return false;
  }
  if (password.search(/[0-9]/) < 0) {
    alert("Your password must contain at least one digit.");
    document.getElementById("password").focus();
    return false;
  }
  if (password.search(/[!@#$%^&*]/) < 0) {
    alert("Your password must contain at least one special character.");
    document.getElementById("password").focus();
    return false;
  }
  if (password.search(" ") > 0) {
    alert("Password must not contain any spaces");
    document.getElementById("password").focus();
    return false;
  }
  return true;
}

document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  
  if (validateForm()) {
    const sapid = document.getElementById("sapid").value;
    // Check if the SAP ID already exists in Firebase
    get(child(ref(db, "users"), sapid)).then((snapshot) => {
      if (snapshot.exists()) {
        alert("User already exists with this SAP ID");
      } else {
        // SAP ID is not in use, proceed with registration
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        // Register the user in Firebase
        set(ref(db, "users/" + sapid), {
          name: name,
          phone: phone,
          sapid: sapid,
          email: email,
          password: password,
        }).then(() => {
          alert("Registered Successfully");
          window.location.href = "login.html";
        }).catch((error) => {
          console.error("Error registering user:", error);
        });
      }
    }).catch((error) => {
      console.error("Error checking user existence:", error);
    });
  }
});
