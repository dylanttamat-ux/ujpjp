// Hi
function title(titl) {
    return `<input type=text placeholder="Title"></input> `
}

function desc(dsc) {
    return `<p><input type=text placeholder="Description">${dsc}</input></p>`
}


function date() {
    return '<br> To do by: <input type="date"></input>'
}

function confirm_button() {
    return '<button>✓</button>'
}

function edit_button() {
    return '<button>✎</button>'
}

function remove_button() {
    return '<button>X</button>'
}

function title_buttons(t) {
    return `<div class="title-buttons" style="display: flex;">${title(t)} ${confirm_button()} ${edit_button()} ${remove_button()} </div>`
}

function card(t, d) {
    const card = document.createElement('div')
    card.className = 'card'
    card.insertAdjacentHTML('beforeend', title_buttons())
    card.insertAdjacentHTML('beforeend', date())
    card.insertAdjacentHTML('beforeend', desc(d))

    return card
}

function add() {
    // Create new divs (for new card)
    // Get new values for each div
    // Assign values to card 
    const t = " ";
    const d = " ";
    const newCard = card(t, d)
    const cardList = document.getElementById('cards')

    cardList.appendChild(newCard)

}

