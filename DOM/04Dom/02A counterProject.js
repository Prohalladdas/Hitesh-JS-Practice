var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

// counter.innerHTML = 2000;

let count = 1;
setInterval(() =>{
    if (count<1000){
        count++;
        counter.innerText = count;
    }
},1);

setTimeout(()=>{
    followers.innerText ="Followes on Facebook"
},7000);