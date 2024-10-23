window.onload= function(){
    var loginModal =document.getElementById("login-modal");
    var registerModal =document.getElementById("register-modal");

    loginModal.style.display = "none"
    registerModal.style.display = "none";
}
function openLoginModal(){
    var loginModal = document.getElementById("login-modal")
    var registerModal = document.getElementById("register-modal")
    loginModal.style.display = "block";
    registerModal.style.display = "none";
}
function closeLoginModal(){
    var loginModal = document.getElementById("login-modal");
    loginModal.style.display = "none";
}
function openRegisterModal(){
    var registerModal = document.getElementById("register-modal");
    var loginModal = document.getElementById("login-modal")
    registerModal.style.display = "block";
    loginModal.style.display = "none";
}
function closeRegisternModal(){
    var  registernModal= document.getElementById("register-modal");
    registernModal.style.display = "none";
}