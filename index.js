//sms-app
let maxcount=100;
let smstypfun =()=>{
   //get the value of text entered by user with length
  let textEnteredLength=document.querySelector("#text-area").value.length;
 let spanTag=document.querySelector("#chars");
 let reminingCount=maxcount-textEnteredLength;
   //selec the span tag
 spanTag.innerHTML=reminingCount;
}

//Showpassword onchange event
let passBox=document.querySelector("#pass-box");
passBox.addEventListener("change",function(){
let password=document.querySelector("#password");
let attribute=password.getAttribute("type")
if(attribute=="password"){
  password.setAttribute("type", "text");
}
else{
  password.setAttribute("type", "password");
}
});

//LIKES and DISLIKES onchange event

let likescount=0;
let lovecount=0;
let dislikescount=0;
let total=0;
let liked=()=>{  
  likescount++;
  total++;
  document.querySelector("#like-count").innerHTML=likescount;
document.querySelector("#total").innerHTML=total;
}
let disliked=()=>{
  dislikescount++;
  total++;
  document.querySelector("#dislike-count").innerHTML=dislikescount;
  document.querySelector("#total").innerHTML=total;
}

let loved=()=>{
  lovecount++;
  total++;
  document.querySelector("#love-count").innerHTML=lovecount;
document.querySelector("#total").innerHTML=total;
}