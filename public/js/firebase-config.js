// public/js/firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";

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
export { app }; // Export the initialized Firebase app