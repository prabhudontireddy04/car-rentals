document.addEventListener('DOMContentLoaded', function() {
    const showRegisterLink = document.getElementById('showRegisterLink');
    const showLoginLink = document.getElementById('showLoginLink');
    const loginForm = document.querySelector('.loginform');
    const registerForm = document.querySelector('.valid1');

    showRegisterLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });

    showLoginLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });
    document.getElementById('loginBtn').addEventListener('click', function() {
        const username = document.getElementById('name').value;
        const password = document.getElementById('pass').value;
        const nameError = document.getElementById('nameError');
        const passwordError = document.getElementById('passwordError');
        if (!username.trim()) {
            nameError.textContent = 'Username cannot be empty.';
            return;
        } else {
            nameError.textContent = '';
        }
        if (!password.trim()) {
            passwordError.textContent = 'Password cannot be empty.';
            return;
        } else {
            passwordError.textContent = '';
        }
        document.getElementById('name').value = '';
        document.getElementById('pass').value = '';
    });
    document.getElementById('registerBtn').addEventListener('click', function() {
        const username = document.getElementById('name1').value;
        const password = document.getElementById('pass1').value;
        const confirmPassword = document.getElementById('confirm').value;
        const nameError = document.getElementById('nameError1');
        const passwordError = document.getElementById('passwordError1');
        const confirmPasswordError = document.getElementById('confirmPasswordError');
        if (!username.trim()) {
            nameError.textContent = 'Username cannot be empty.';
            return;
        } else {
            nameError.textContent = '';
        }
        if (!password.trim()) {
            passwordError.textContent = 'Password cannot be empty.';
            return;
        } else {
            passwordError.textContent = '';
        }
        if (!confirmPassword.trim()) {
            confirmPasswordError.textContent = 'Confirm Password cannot be empty.';
            return;
        } else {
            confirmPasswordError.textContent = '';
        }
        document.getElementById('name1').value = '';
        document.getElementById('pass1').value = '';
        document.getElementById('confirm').value = '';
    });
});