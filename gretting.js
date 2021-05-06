const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting=document.querySelector(".js-greetings");

const USER_LS = "currentUser",
SHOWING_CN="showing";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
event.preventDefault();
const currentVale = input.value;
paintGreeting(currentVale);
saveName(currentVale);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit)
}

function paintGreeting(text){
form.classList.remove(SHOWING_CN);
greeting.classList.add(SHOWING_CN);
greeting.innerText=`Hello ${text}`;

}

function loadname(){
const  currentUser = localStorage.getItem(USER_LS);
if(currentUser === null){
 askForName();
} else{
paintGreeting(cureentUser);
}
}



function init(){
loadname();

}
init();