const username = document.querySelector('.username');
const password = document.querySelector('.password');

function logmeinnow(){
    if(username.value == "admin" && password.value == "admin"){
        window.location.replace("index.html");

    }
    else{
        alert("Wrong Credentials. Try Again");
    }
}