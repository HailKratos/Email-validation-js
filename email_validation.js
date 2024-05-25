var emailField = document.getElementById("email-field");
var emailLabel = document.getElementById("email-label");
var emailError = document.getElementById("email-error");
function validate(){
  emailLabel.style.bottom = "45px" ;
  const regx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailField.value.match(regx)){
    emailError.innerHTML="please enter valid email";
    emailField.style.borderBottomColor="red";
    return false;

  }
  emailError.innerHTML="";
  emailField.style.borderBottomColor="green";
  return true;
}