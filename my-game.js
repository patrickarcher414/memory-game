

// var lis = document.getElementsByClassName("tile");
// console.log( lis[0].getAttribute('data-number') );
// console.log( lis[0].dataset.number)



// global vars

var brainEmoji = '🧠'
var numTiles = 20
var startTime = 30
var time = startTime
var interalId

var countdownEl = document.querySelector('#countdown')
var scoreEl = document.querySelector('#score')
var tilesEl = document.querySelector('#tiles')

// functions

function handleTileClick() {
    console.log('tile clicked...')
}

function createTiles() {
    console.log('creating tiles...')
    for (var i=0; i < numTiles; i++) {
        var li = document.createElement('li')
        li.innerText = brainEmoji
        li.setAttribute('data-number', 2)
        li.classList.add('tile')
        li.addEventListener('click', handleTileClick)
        console.log(li)
        tilesEl.append(li)
    }
}

function startTimer() {
    console.log('starting timer...')
}


function startRound() {
    createTiles();
    startTimer();
}

// main process

startRound();
