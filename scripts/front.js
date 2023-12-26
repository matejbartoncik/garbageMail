function generateRandomEmail() {
  var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var email = '';
  for (var i = 0; i < 10; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    email += characters[randomIndex];
  }
  email += '@example.com';
  return email;
}

function outputRandomEmail() {
  var textarea = document.getElementById('emailDisplayTextarea');
  textarea.value = generateRandomEmail();
}