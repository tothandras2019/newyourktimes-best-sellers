import { books } from './../DATA/data.js'

window.addEventListener('load', function () {
  const root = document.getElementById('root')

  const { button, logo, cards } = books
  const booksElement = cards.map((card, i) => getCardDetails(card, i, button))
  root.insertAdjacentHTML('beforeend', InitElements(logo))

  const cardContainer = document.querySelector('.card-container')
  cardContainer.insertAdjacentHTML('beforeend', booksElement.join(''))
})

const InitElements = (logo) => {
  return `
  <nav>${logo}<span class="material-icons">menu</span></nav>
  <section class="card-container"></section> `
}

const getCardDetails = ({ title, sub, text }, index, button) => {
  return `   
    <div class='card'>
      <div class="card-content">
        <span>${index + 1}</span>
        <h3>${sub}</h3>
        <h1>${title}</h1>
        <p>${text}</p>    
      </div>
      <button>${button} <span class="material-icons">arrow_forward</span></button>
    </div>`
}
