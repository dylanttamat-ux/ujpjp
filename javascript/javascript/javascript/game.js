const grid = [
 ["1", "2", "3"],
 ["4", "5", "6"],
 ["7", "8", "9"]
]

class Player {
    constructor(name, symbol) {
        this.name = name
        this.symbol = symbol
    }

    input() {
        const board = grid.map(row => row.join(" ")).join("\n")

        let col = prompt(board + `\n${this.name}, enter a column (1-3):`)
        let row = prompt(board + `\n${this.name}, enter a row (1-3):`)
        return [col, row]
    }
}

const playerA = new Player("Player A", "X")
const playerB = new Player("Player B", "O")

let currentPlayer = true

// Num
function placeSymbol(col, row, symbol) {
    const c = Number(col) - 1 
    const r = Number(row) - 1

    if (grid[r][c] === "X" || grid[r][c] === "O") {
        alert("That spot is already taken!")
        return false
    }

    grid[r][c] = symbol
    return true
}

function checkWin(symbol) {
    // Rows
    for (let r = 0; r < 3; r++) {
        if (grid[r][0] === symbol && grid[r][1] === symbol && grid[r][2] === symbol) {
            return true
        }
    }

    // Columns
    for (let c = 0; c < 3; c++) {
        if (grid[0][c] === symbol && grid[1][c] === symbol && grid[2][c] === symbol) {
            return true
        }
    }

    // Diagonals
    if (grid[0][0] === symbol && grid[1][1] === symbol && grid[2][2] === symbol) {
        return true
    }

    if (grid[0][2] === symbol && grid[1][1] === symbol && grid[2][0] === symbol) {
        return true
    }

    return false
}


// This is the actual game loop.
// it grabs everything the player input has and uses it to validate in game rules and check win conditions.
function game() {
    for (let i = 0; i < 9; i++) {
        const player = currentPlayer ? playerA : playerB
        const [col, row] = player.input() // This is shorthand for storing our return into 2 different variables.

        const placed = placeSymbol(col, row, player.symbol)
        if (placed == false) { // placed == false checks if the places symbol is invalid 
            i-- // if the input is invalid then retry the same turn
            continue // Takes you to the top of the loop.
        }

        if (checkWin(player.symbol)) { // Checks a win every iteration and if the win is true then selects the player who wins.
            alert(`${player.name} wins!`)
            return
        }

        currentPlayer = !currentPlayer // After every iteration the boolean becomes false
    }

    alert("It's a draw!") // This runs when the loop is over because remembert that code reads from the top to the bottom.
}

game()
