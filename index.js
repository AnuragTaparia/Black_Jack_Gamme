
let cards = []
let sum = 0
let hasBlackJack = false
let isAlvie = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el") // let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let permission = true
let player = {
    name: "player",
    chip: 20
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chip


function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) +1
    if(randomNumber === 1){
        return 11
    } else if( randomNumber > 10){
        return 10
    }else{
        return randomNumber
    }
}

function startGame(){
    if(permission === true){
        cards = []
        cardsEl.textContent = "Cards: "  
        sumEl.textContent = "Sum: " 
        isAlvie = true
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards.push(firstCard)
        cards.push(secondCard)
        sum = firstCard + secondCard
        renderGame()
    }
}

function renderGame(){
    
    cardsEl.textContent = "Cards: " 
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] +" "
    }
    sumEl.textContent = "Sum: " + sum

 if(sum <= 20){
    message = "Do you want to draw another card? "
 } else if (sum === 21){
    message = "Wohoo! You've got Blackjack! "
    hasBlackJack = true
    player.chip += 10
    permission = false
 } else {
    message = "You're out of the game!"
    isAlvie = false
    player.chip -=5
    permission = false
 }
 messageEl.textContent = message

 if(isAlvie === false){
    playerEl.textContent = player.name + ": $" + player.chip
 }else if(hasBlackJack){
    playerEl.textContent = player.name + ": $" + player.chip
 }
 
}

function newCard(){
    if(isAlvie && hasBlackJack === false){

        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        renderGame()
        
    }
}

function newGame(){
    cards = []
    cardsEl.textContent = "Cards: " 
    sumEl.textContent = "Sum: " 
    permission = true
    hasBlackJack = false
 
    if(player.chip === 0){
        message = "Don't have enough money!"
        messageEl.textContent = message
        permission = false
    }
}
