// Hi
function title(titl) {
    return `<h1>${titl}</h1>`
}

function desc(dsc) {
    return `<p>${dsc}</p>`
}

function urgent() {
    return '<input type=checkbox> Urgent?</input>'
}

function date() {
    return '<br> To do by: <input type="date"></input>'
}

function card(t, d) {
    const card = document.createElement('div')
    card.className = 'card'
    card.insertAdjacentHTML('beforeend', title(t))
    card.insertAdjacentHTML('beforeend', desc(d))
    card.insertAdjacentHTML('beforeend', urgent())
    card.insertAdjacentHTML('beforeend', date())

    return card
}

function add() {
    // Create new divs (for new card)
    // Get new values for each div
    // Assign values to card 
    const t = document.getElementById('ti').value;
    const d = document.getElementById('de').value;
    const newCard = card(t, d)
    const cardList = document.getElementById('cards')

    cardList.appendChild(newCard)

}

