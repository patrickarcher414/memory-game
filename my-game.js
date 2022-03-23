

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
function createShuffledNumbers() {
    // create an array with a blank value
    var nums = []
    // generate an array of random numbers half the total size of tiles
    for (var i=0; i < numTiles / 2; i++) {
        var randNum = Math.ceil(Math.random() * 666)
        // fill the array with duplicate randNums
        nums.push (randNum, randNum)
    }

    // shuffle the array nums
    nums = nums.sort( function() {
        return Math.random() - 0.5
    })
    
    return nums
}

function createTiles() {
    var shuffledNums = createShuffledNumbers()
    for (var i=0; i < shuffledNums.length; i++) {
        var li = document.createElement('li')
        li.innerText = brainEmoji
        li.setAttribute('data-number', shuffledNums[i])
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
