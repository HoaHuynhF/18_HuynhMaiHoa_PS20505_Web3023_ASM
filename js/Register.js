function fValid() {

    if(!isName()){
        return;
    }

    if(!isPassword()){
        return;
    }

    if(!isRePass()){
        return;
    }

    if(!isEmail()){
        return;
    }

    alert("Welcone to my web");


}
function isName() {
    var user = document.getElementById("txtUser");
    if (user.value == "") {
        document.getElementById("errUser").innerText = "Please enter username";
        user.focus();
        return false;
    }
    document.getElementById("errUser").innerText = "";
        return true;
}

function isPassword() {
    var pass = document.getElementById("txtPass");
    if (pass.value == "") {
        document.getElementById("errPass").innerText = "Please enter password";
        pass.focus();
        return false;
    }
    document.getElementById("errPass").innerText = "";
        return true;

}

function isRePass(){
    var repass = document.getElementById("txtRepass");
    if (repass.value == "") {
        document.getElementById("errRepass").innerText = "Please enter password-repeat";
        repass.focus();
        return false;
    }
    document.getElementById("errRepass").innerText = "";
        return true;
}

function isEmail(){
    var email = document.getElementById("txtEmail");
    if (email.value == "") {
        document.getElementById("errEmail").innerText = "Please enter Email";
        email.focus();
        return false;
    }
    document.getElementById("errEmail").innerText = ""; 


    var ptnEmail = /^\w{3,}@\w{2,}(\.[a-zA-Z]{2,3}){1,1}$/;
    if (!ptnEmail.test(email.value)) {
        document.getElementById("errEmail").innerText = "Incorrect email";
        return false;
    }
    document.getElementById("errEmail").innerText = "";
    return true;
}



