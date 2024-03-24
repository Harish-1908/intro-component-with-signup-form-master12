var claim=document.querySelector(".claim")
var firstname=document.querySelector(".firstname")
var lastname=document.querySelector(".lastname")
var emailadd=document.querySelector(".emailadd")
var passwor=document.querySelector(".passwor")
var firstnameerr=document.querySelector(".firstnameerr")
var lastnameerr=document.querySelector(".lastnameerr")
var emailerr=document.querySelector(".emailerr")
var passworderr=document.querySelector(".passworderr")

function claimfree(){
    if(firstname.value==""){
        firstname.style.border="2px solid hsl(0, 100%, 74%)";
        firstnameerr.textContent="First Name cannot be empty";
        firstname.setAttribute("placeholder", ""); 
        firstname.classList.add("icon-placeholder");
    }  else {
        firstname.style.border = ""; 
        firstname.setAttribute("placeholder", "First Name"); 
        firstname.classList.remove("icon-placeholder"); 
        firstnameerr.textContent="";
    }
    if(lastname.value=="" ){
        console.log("Enter lastname");
        lastname.style.border="2px solid hsl(0, 100%, 74%) " ;
        lastnameerr.textContent="Last Name cannot be empty";
        lastname.setAttribute("placeholder","")
        lastname.classList.add("icon-placeholder")

    }else {
        lastname.style.border = ""; 
        lastname.setAttribute("placeholder", "Last Name"); 
        lastname.classList.remove("icon-placeholder"); 
        lastnameerr.textContent="";
    }
    if(emailadd.value==""){
        console.log("Enter email");
        emailadd.style.border="2px solid hsl(0, 100%, 74%) " ;
        emailerr.textContent="Looks like this is not an email";
        emailadd.setAttribute("placeholder", "email@example/com"); 
        emailadd.classList.add("red-placeholder");
        emailadd.classList.add("icon-placeholder");
    }  else {
    emailadd.style.border = ""; 
    emailadd.setAttribute("placeholder", "Email Address"); 
    emailadd.classList.remove("icon-placeholder");
    emailadd.classList.remove("red-placeholder");
    emailerr.textContent="";
    }
    if(passwor.value==""){
        console.log("Enter password");
        passwor.style.border="2px solid hsl(0, 100%, 74%) " ;
        passworderr.textContent="Password cannot be empty";
        passwor.setAttribute("placeholder", ""); 
        passwor.classList.add("icon-placeholder");
    }  else {
    passwor.style.border = ""; 
    passwor.setAttribute("placeholder", "Password");
    passwor.classList.remove("icon-placeholder"); 
    passworderr.textContent="";
    }
}