const formbutton = document.getElementById('form-button');
const Email = document.getElementById('email');
const Errormessage = document.getElementById('form-error');
Errormessage.textContent = 'Message not sent! Please use lower case letters only for the email. Thank you.';

function validationForm(e) {
  if (Email.value !== Email.value.toLowerCase()) {
    Errormessage.style.display = 'block';
    e.preventDefault();
  } else {
    Errormessage.style.display = 'none';
  }
}
formbutton.addEventListener('click', validationForm);
