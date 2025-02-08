var score =1;
var timer = 15;
var hitrn = 0;
function bubblemaker(){
    var clutter = "";
    for(let i =1;i<=152;i++){
        var rn = Math.floor(Math.random()*10)+1;
        clutter += `  <div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}


function runtimer() {
   
    var timerint = setInterval(() => {
    if(timer>0){
        timer--;
        document.querySelector("#time").textContent = timer;

    }
    else{
        clearInterval(timerint);
        document.querySelector("#pbtm").innerHTML = `<h1>Game Over & </h1><h2>Your Score is ${score}</h2>`;
    }
    }, 1000);

}

function hitmaker(){
    hitrn = Math.floor(Math.random()*10)+1;
    document.querySelector("#hitjs").textContent = hitrn;
}


function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}
document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clikcedNum = Number(dets.target.textContent);
    if(clikcedNum === hitrn){
        increaseScore();
        bubblemaker();
        hitmaker();
    }
})
bubblemaker();
hitmaker();
runtimer();

