var timer = 60;
var score = 0;
var randomHit = 0;

var increaseScore = () => {
    score += 10;
    document.querySelector("#score").textContent = score;
}

var hitBubble = () => {
    randomHit = Math.floor(Math.random() * 10);
    document.querySelector("#hitInt").textContent = randomHit; 
}

var makeBubble = () => {
    var cluster = " ";

    for(var i=1; i<=176; i++) {
        var random = Math.floor(Math.random()*10);
        cluster += `<div class="bubble">${random}</div>`;
    }
    
    document.querySelector(".board-body").innerHTML = cluster;
}

var bubbleTimer = () => {
    var timerInterval = setInterval(() => {
        if(timer > 0) {
            timer--;
            document.querySelector("#timer").textContent = timer;
        } else {
            document.querySelector(".board-body").innerHTML = `<div class="game-over"><h1>Game Over</h1><h2>Your Score: ${score}</h2></div>`;
            clearInterval(timerInterval);
        }
    }, 1000);
}

document.querySelector(".board-body").addEventListener("click", (details) => {

    var bubbleHit = Number(details.target.textContent);
    if(randomHit === bubbleHit) {
        increaseScore();
        makeBubble();
        hitBubble();
    }
})

hitBubble();
bubbleTimer();
makeBubble();