// Original content of scripts.js before changes
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (you can expand this)
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password.');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready!');
    // Add any additional JavaScript functionality here
});

function openForum() {
    alert("Welcome to the community forum! Here you can share your experiences and ask questions.");
    // Redirect to the forum page or open a modal with forum details
    // window.location.href = "forum.html"; // Uncomment to redirect
}
