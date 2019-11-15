//Array of objects of all cards' characters


const cardsArray = [
  {
    name: 'shell',
    img: 'IMG/shell.png'
  },
  {
    name: 'bobomb',
    img: 'IMG/bobomb.png'
  },
  {
    name: 'luigi',
    img: 'IMG/luigi.png'
  },
  {
    name: 'mario',
    img: 'IMG/mario.png'
  },
  {
    name: 'peach',
    img: 'IMG/peach.png'
  },
  {
    name: 'star',
    img: 'IMG/star.png'
  },
  {
    name: '1up',
    img: 'IMG/1up.png'
  },
  {
    name: 'mushroom',
    img: 'IMG/mushroom.png'
  },
  {
    name:'thwomp' ,
    img: 'IMG/thwomp.png'
  },
  {
    name: 'bullet bill' ,
    img: 'IMG/bulletbill.png'
  },
  {
    name: 'coin',
    img: 'IMG/coin.png'
  },
  {
    name: 'goomba' ,
    img: 'IMG/goomba.png'
  }
]

// Duplicate array to create a match for each card
const gameGrid = cardsArray.concat(cardsArray)

/* DON'T UNDERSTAND THIS SORT FUNCTION OR HOW IT WORKS*/
// Randomize game grid on each load
gameGrid.sort(()=> 0.5 - Math.random())


/*How to display cards in browser:*/

//Grab the div with the root ID
const game = document.getElementById('game')

//Create a section with a class of grid
const grid = document.createElement('section')
grid.setAttribute('class', 'grid')

// Append the grid section to the game div
game.appendChild(grid)

// For each item in the gameGrid array...
gameGrid.forEach(item => {
  // Create a div (this will give us 12 divs)
  const card = document.createElement('div')

  // Apply a card class to the div
  card.classList.add('card')

  // Set the data-name attribute of the div to the cardsArray name
  card.dataset.name = item.name

  // Apply the background image of the div to the cardsArray image
  card.style.backgroundImage = `url(${item.img})`

  // Append the div to the grid section
  grid.appendChild(card)
})

let firstGuess = ''
let secondGuess = ''
let count = 0
let previousTarget = null // Assigned this variable to null because it doesn't currently have a value, but it will


// Add event listener to grid
grid.addEventListener('click',function(event) {
  // The event target is our clicked item
  let clicked = event.target

  // Do not allow the grid section itself to be selected; only select divs inside the grid
  // A second click on the same object will be ignored with the addition of if (clicked === previousTarget)
  if (clicked.nodeName === "SECTION" || clicked === previousTarget) {
    return
  }
  // Counts to 2 (since the game only compares two choices) and only adds selected class to two cards
  if (count < 2) {
    count++
    // Assign first guess
    if (count === 1) {
      firstGuess = clicked.dataset.name
      // Add selected class
      clicked.classList.add('selected')
    } else {
      // Assign second guess
      secondGuess = clicked.dataset.name
      clicked.classList.add('selected')
    }
    // If both guesses are both not empty...
    if (firstGuess !== '' && secondGuess !== '') {
      // ...and they match
      if (firstGuess === secondGuess) {
        // Run the match function
        match();
        resetGuesses();
      } else {
        resetGuesses();
      }
    }
    previousTarget = clicked; // Reassigned previousTarget from null to clicked, so the program remembers what card was clicked so that user can't click the same card twice and get a match
  }
})

// Function to loop through all selected elements when called, then add the match class
const match = () => {
  var selected = document.querySelectorAll('.selected')
  selected.forEach(card => {
    card.classList.add('match')
  })
}


// Reset user count after two guesses
const resetGuesses = () => {
  firstGuess = ''
  secondGuess = ''
  count = 0

  var selected = document.querySelectorAll('selected')
  selected.forEach(card => {
    card.classList.remove('selected')
  })
}
