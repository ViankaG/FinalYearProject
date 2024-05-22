//Source: https://www.youtube.com/watch?v=DABkhfsBAWw - I changed all variable names, function names and the names of the 
//classes called.

const individualCards = document.querySelectorAll('.individual_card');

let matchAllCards = 0;

let firstCard;
let secondCard;

//Variable to disable other cards from being turned over
let disableOtherCards = false;

//Function stores the first and second selected cards if various if statement conditions hold. 
function turnCard(e) {
    let selectedCard = e.target;
    
    if (firstCard !== selectedCard && !disableOtherCards) {
        selectedCard.classList.add('flip');

        
        if (!firstCard) {
            return firstCard = selectedCard;
        }
        secondCard = selectedCard;
        disableOtherCards = true;

        //Getting links to images on the selected cards
        let firstCardImg = firstCard.querySelector('img').src;
        let secondCardImg = secondCard.querySelector('img').src;
        cardsMatched(firstCardImg, secondCardImg);
    }
}

//Function calls shuffleAllCards and winner functions if images on cards are the same and all cards are matched. If not all 
//cards are matched function removes click event listener and makes values of both cards equal to empty string.
//If images on both cards selected are different, both cards will shake and flip back over.
function cardsMatched(imgFirst, imgSecond) {
    if (imgFirst === imgSecond) {
        matchAllCards++;
        if (matchAllCards == 8) {
            setTimeout(function() {
                winner();
            }, 700);
            
            setTimeout(function() {
                shuffleAllCards();
            }, 1000);
        } else {
            firstCard.removeEventListener('click', turnCard);
            secondCard.removeEventListener('click', turnCard);
            
            firstCard = "";
            secondCard = "";
            
            disableOtherCards = false;
        }
    } else {
        setTimeout(function() {
            firstCard.classList.add('shake');
            secondCard.classList.add('shake');
        }, 400);

        setTimeout(function() {
            firstCard.classList.remove('shake', 'flip');
            secondCard.classList.remove('shake', 'flip');
            
            firstCard = "";
            secondCard = "";
            
            disableOtherCards = false;
        }, 1200);
    }
}

//Function creates an array for the number of images, sorts the array elements randomly and randomly changes images on cards
function shuffleAllCards() {
    matchAllCards = 0;
    firstCard = "";
    secondCard = "";
    disableOtherCards = false;

    let arrayImg = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8,];
    arrayImg.sort(() => Math.random() > 0.5 ? 1 : -1);
    
    individualCards.forEach((eachCard, arrIndex) => {
        eachCard.classList.remove('flip');
        let imgLink = eachCard.querySelector('img');
        //Each card has a new image link with an image that corresponds to a random image number from the arrayImg array
        imgLink.src = `MemoryMatchImages/img-${arrayImg[arrIndex]}.png`;
        eachCard.addEventListener('click', turnCard);
    });
}

//Shuffles cards when browser is refreshed
shuffleAllCards();

//Function calls turnCard function when card is clicked
individualCards.forEach(eachCard => {
    eachCard.addEventListener('click', turnCard);
});

//Source: https://www.youtube.com/watch?v=jXTfoKkPtYY - I changed the names of the classes called and variable names
//Function toggles (adds or removes) the class "instruct_button--active" if button that has the class "instruct_button" is 
//clicked
document.querySelectorAll('.instruct_button').forEach(instructButton => {
    instructButton.addEventListener('click', function () {
        instructButton.classList.toggle('instruct_button--active');
    });
});


//Adds i_button_open to the list of CSS classes
function openInstruct() {
    document.body.classList.toggle('instruct_button_open');
}


function winner() {
    alert("You won! Congratulations!");
  }