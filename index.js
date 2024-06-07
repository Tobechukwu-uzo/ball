let score = 0

let homeScoreBtnI = document.getElementById("btn-1")

let homeScoreBtnII = document.getElementById("btn-2")

let homeScoreBtnIIi = document.getElementById("btn-3")

let homeScore = document.getElementById("scorE")

function addOne() {
    score +=1
    homeScore.textContent = score
}

function addTwo() {
    score +=2
    homeScore.textContent = score
}

function addThree() {
    score +=3
    homeScore.textContent = score
}

let Ascore = 0

let awayScoreBtn = document.getElementById("btn-one")

let awayScoreBtnTwo = document.getElementById("btn-two")

let awayScoreBtnThree = document.getElementById("btn-three")

let awayScore = document.getElementById("scoRe")


function addoNe() {
    Ascore +=1
    awayScore.textContent = Ascore
}

function addtWo() {
    Ascore +=2
    awayScore.textContent = Ascore
}

function addtHree() {
    Ascore +=3
    awayScore.textContent = Ascore
}
