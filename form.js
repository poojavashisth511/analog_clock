const title=document.getElementById("title");
const Name= document.getElementById("nameField");
const loginBtn= document.getElementById("loginBtn");
const signupBtn= document.getElementById("signupBtn");

signupBtn.onclick = function(){
    title.innerHTML= "Sign up";
    nameField.style.display= "none";
}
loginBtn.onclick = function(){
    title.innerHTML= "Login";
    nameField.style.display= "block";
}
