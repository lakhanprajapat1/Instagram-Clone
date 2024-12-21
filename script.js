let loginbtn=document.querySelector(".loginbtn")
let signupbtn=document.querySelector(".signup")



function home() {
    document.location.href='home.html';
}

// Handle Sign Up
document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    // Save credentials to localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Sign Up Successful! Redirecting to Log In page.');

    // Hide Sign-Up form and show Log-In form
    document.getElementById('signup').style.display = 'none';
    document.getElementById('login').style.display = 'block';
});

// Handle Log In
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Retrieve credentials from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Validate credentials
    if (username === storedUsername && password === storedPassword) {
        alert('Log In Successful! Redirecting to Home page.');
        window.location.href = 'home.html'; // Redirect to Home page
    } else {
        document.getElementById('loginError').style.display = 'block'; // Show error message
    }
});