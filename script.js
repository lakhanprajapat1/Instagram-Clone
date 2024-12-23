let toLogin = document.getElementById('to-login-page')
let toSignup = document.getElementById('to-signup-page')

toLogin.addEventListener("click", ()=>{
    document.getElementById('signup-page').style.display = 'none';
    document.getElementById('login-page').style.display = 'block';
})
toSignup.addEventListener("click", ()=>{
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('signup-page').style.display = 'block';
})



let signupForm = document.getElementById('signupForm')
let loginForm=document.getElementById('loginForm')

signupForm.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const username = document.getElementById('sign-username').value;
    const password = document.getElementById('sign-password').value;

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Sign Up Successful! Redirecting to Log In page.');
    document.getElementById('signup-page').style.display = 'none';
    document.getElementById('login-page').style.display = 'block';
});

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Log In Successful!');
        window.location.href = 'home.html';
    } else {
        alert("password and username not vailid")
        document.getElementById('loginError').style.display = 'block';
    }
});


