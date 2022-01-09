"use strict";


let start=document.querySelector("#start")
let stop=document.querySelector("#stop");
let body=document.body.style;


let v1=false;
var interval=0;
function toggle(){
if(v1){
 interval=  setInterval(change, 4000);
}else{
    window.clearInterval(interval);
    body.backgroundColor="rgb(153,157,149)"
}

}

start.addEventListener('click',()=>{
    v1=true
    toggle();
    
})
stop.addEventListener('click',()=>{
    v1=false;
    toggle();
    
})

let i = 0;
function change(){ 
  let color = ["#570530", "#FFAB76", "#B762C1", "#35858B"];  
  body.backgroundColor = color[i];
  i=(i+1)%color.length ;  
} 

