const messageElement = document.getElementById('message');

// Check if the user has visited before
if (localStorage.getItem('visited')) {
  messageElement.textContent = 'World';
} else {
  messageElement.textContent = 'Hello';
  localStorage.setItem('visited', 'true');
}
