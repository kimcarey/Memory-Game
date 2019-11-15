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
