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
