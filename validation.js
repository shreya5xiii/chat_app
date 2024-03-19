function printError(elemId,hintMsg){
    document.getElementById(elemId).innerHTML=hintMsg;
}
function validateSignUpInputCredentials() {
    var username = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirm_password").value;
    var nameErr = emailErr = passwordErr = confirmPasswordErr = true;

    // for name
    if (username == "") {
        printError("nameErr", "Please enter Name");
        
    } else {
        var regex = /^[A-Za-z]+$/;
        if (regex.test(username) === false) {
            printError("nameErr", "Please enter a valid Name");
           
        } else {
            printError("nameErr", "");
            nameErr=false;
        }
    }

    // for email address
    if (email == "") {
        printError("emailErr", "Please enter email address");
        
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email");
            
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // for password
    if (password === "") {
        printError("passwordErr", "Please enter password");
       
    } 
    else if(password.length<6){
        printError("passwordErr","Please enter strong password");
    }
    else {
        printError("passwordErr", "");
        passwordErr = false;
    }

    // for confirm password
    if (confirmpassword == "") {
        printError("confirmPasswordErr", "Please enter password");
       
    } 
    else if(confirmpassword!=password){
        printError("confirmPasswordErr", "password not matching");
    }
   
    else {
        printError("confirmPasswordErr", "");
        confirmPasswordErr = false;
    }
   if((nameErr || emailErr || passwordErr || confirmPasswordErr)==true){
    return false;
   }
  else{
    return true;
  }
}

function validateLoginInputCredentials(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var  emailErr = passwordErr = true;
    if (email == "") {
        printError("emailErr", "Please enter email address");
        
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email");
            
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }




    
    if (password === "") {
        printError("passwordErr", "Please enter password");
       
    } 
    else if(password.length<6){
        printError("passwordErr","Please enter strong password");
    }
    else {
        printError("passwordErr", "");
        passwordErr = false;
    }
    if((emailErr || passwordErr)==true){
        return false;
       }
      else{
        return true;
      }
    
}
