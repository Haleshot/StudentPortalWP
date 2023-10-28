const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');
 

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})


import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

const db = getDatabase();
const usersRef = ref(db, "users");
// const sapid = localStorage.getItem("sapid");



// get(child(usersRef, sapid)).then((snapshot) => {
// if (snapshot.exists()) {
//     if (snapshot.child('name').exists()) {
                
//         var studentName = snapshot.val().name;
//         document.getElementById('username').innerHTML = 'Welcome, ' + studentName;
//     } else {
//         document.getElementById('username').innerHTML = 'Welcome, Student';
//     }
//     } else {
//     alert("user does not exists!!");
//     }
// });   

//   var user = firebaseConfig.auth().currentUser;
// if (user) {
//     // getting reference to students data in database
//     var studentRef = firebaseConfig.database().ref('students/' + sapid);

//     // takinng students data
//     usersRef.once('value').then(function(snapshot) {
//         // To check user data is there or not
//         if (snapshot.child('name').exists()) {
//             var studentName = snapshot.val().name;
//             document.getElementById('username').innerHTML = 'Welcome, ' + studentName;
//         } else {
//             document.getElementById('username').innerHTML = 'Welcome, Student';
//         }
//     }).catch(function(error) {
//         console.error("Error fetching student data: ", error);
//     });
// } else {
//     // when user has not logged in
//     document.getElementById('userName').innerHTML = 'Welcome, Guest';
// }


// Passing Login info from login.js to dashboard.js

// const auth = getAuth();
// auth.onAuthStateChanged(user => {
//   const displayName = document.getElementById('displayName');
//   displayName.innerText = "Currently logged in as: " + user.email;
// });


// // Logout functionality:
// const logoutButton = document.getElementById('logout-button');

// logoutButton.addEventListener('click', () => {
//     firebase.auth().signOut().then(() => {
//         // Sign-out successful.
//         // You can redirect to your login page or perform any other action here.
//         window.location.href = "login.html"; // Redirect to the login page
//     }).catch((error) => {
//         // An error happened.
//         console.error(error);
//     });
// });


// Orders.forEach(order => {
//     const tr = document.createElement('tr');
//     const trContent = `
//         <td>${order.productName}</td>
//         <td>${order.productNumber}</td>
//         <td>${order.paymentStatus}</td>
//         <td class="${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}">${order.status}</td>
//         <td class="primary">Details</td>
//     `;
//     tr.innerHTML = trContent;
//     document.querySelector('table tbody').appendChild(tr);
// });
