var clutter = "";
for(let i = 1;i<=152;i++){
    let rn = Math.floor(Math.random()*100)+1;
    clutter += `  <div class="bubble">${rn}</div>`
}
document.querySelector("#pbtm").innerHTML = clutter;