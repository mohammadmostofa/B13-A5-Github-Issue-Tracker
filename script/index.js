
const LoginBtn = document.getElementById("login-btn").addEventListener("click", function(){

const UserName = document.getElementById("name").value;
const LoginPassword = document.getElementById("password").value;


if(UserName === "admin" && LoginPassword === 'admin123'){
     window.location.assign("/home.html");
     return ;
}

else{
  alert("Please Try Again!");
}

});


