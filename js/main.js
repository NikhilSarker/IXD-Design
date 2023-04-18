window.onload = pageReady;


function pageReady() {
  let formHandle = document.forms.loginForm;
  let Outputmessage = document.getElementById("output");
  let login_main = document.getElementById("login_main");


  formHandle.onsubmit = show;

  function show() {
    let userEmail = formHandle.email.value;
    let userPassword = formHandle.password.value;
    if (userEmail == "") {

      formHandle.email.style.background = "red";
      formHandle.email.focus();
      return false;
    }
    if (userPassword === "") {
      formHandle.password.style.background = "red";
      formHandle.password.focus();
      return false;
    }

    login_main.style.display = "none";
    Outputmessage.style.display = "block";
    return false;
  }; //Show function end


}; //PageReady function end


