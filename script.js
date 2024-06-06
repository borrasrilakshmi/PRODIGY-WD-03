let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let isGameEnded = false;

function handleMove(index) {
    if (isGameEnded || board[index] !== '') return;

    board[index] = currentPlayer;
    document.getElementById('board').children[index].innerText = currentPlayer;

    if (checkWinner()) {
        document.getElementById('message').innerText = currentPlayer + ' wins!';
        isGameEnded = true;
    } else if (checkDraw()) {
        document.getElementById('message').innerText = 'It\'s a draw!';
        isGameEnded = true;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return !board.includes('');
}

function reset() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    isGameEnded = false;
    document.getElementById('message').innerText = '';
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.innerText = '';
    }
}
