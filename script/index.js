
const LoginBtn = document.getElementById("login-btn").addEventListener("click", function(event){
const UserName = document.getElementById("name").value;
const LoginPassword = document.getElementById("password").value;


if(UserName === "admin" && LoginPassword === 'admin123'){

  
  setTimeout((ms) => {
    
         window.location.assign("/home.html");

  } , 100);

     return ;
}

else{
  alert("Please Try Again!");
}

});







