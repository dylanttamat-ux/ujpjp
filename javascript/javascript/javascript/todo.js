

function title(titl) {
    return `<h1>${titl}</h1>`
}

function desc() {
    return '<p>shdispd</p>'
}

function urgent() {
    return '<input type=checkbox> Urgent?</input>'
}

function date() {
    return '<br> To do by: <input type="date"></input>'
}

function card() {
    const card = document.getElementById('card');

    card.insertAdjacentHTML('beforeend', title("hlhbkljhkj"))
    card.insertAdjacentHTML('beforeend', desc())
    card.insertAdjacentHTML('beforeend', urgent())
    card.insertAdjacentHTML('beforeend', date())
}

function add() {
    // Create new divs (for new card)
    // Get new values for each div
    // Assign values to card 
    const dv = document.createElement('div')
    dv.className = 'card'
    return dv;
}

card()
card()
add()
