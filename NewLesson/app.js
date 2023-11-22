function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex > 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
    
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

let cards = [
    {value: '2', image: './images/card2.png', matched: false},
    {value: '3', image: './images/card3.png', matched: false},
    {value: '4', image: './images/card4.png', matched: false},
    {value: '5', image: './images/card5.png', matched: false},
    {value: '2', image: './images/card2.png', matched: false},
    {value: '3', image: './images/card3.png', matched: false},
    {value: '4', image: './images/card4.png', matched: false},
    {value: '5', image: './images/card5.png', matched: false},
]
let cardEls = document.querySelectorAll('.card')
let firstGuess = null
let canguess = true 
flippedCards = 0

shuffle(cards)

cardEls.forEach(function(el, index){
    el.addEventListener('click', function() {
        if(index === firstGuess || cards[index].matched || !canguess) {
            alert('invalid guess')
            return
        }
        let clickedCard = cards[index]
         el.setAttribute('src', clickedCard.image)
         
        if (firstGuess === null) {
            firstGuess = index    
        } else {
            if (cards[firstGuess].value === cards[index].value) {
                cards[firstGuess].matched = true
                cards[index].matched = true
                firstGuess = null
                flippedCards += 2

                if(flippedCards === cards.length) {
                    resetGame()
                }
       } else {
         canguess = false
        
            setTimeout (function() {
            cardEls[firstGuess].setAttribute('src', './images/card back black.png')
            cardEls[index].setAttribute('src', './images/card back black.png')
            firstGuess = null
            canguess = true
           }, 1000)

       }
        } 
    })
}) 

function resetGame() {
    canguess = false
    setTimeout(function() {
        firstGuess = null
        canguess = true
        flippedCards = 0


        cardEls.forEach(function(el, index){
            el.setAttribute('src', './images/card back black.png')
        })
            
        cards.forEach(function(card, index) {
            card.matched = false
        })
        
        shuffle(cards)
    }, 1500)
    
    
    
}