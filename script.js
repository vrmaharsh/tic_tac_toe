// Game state
let board = ['', '', '', '', '', '', '', '', ''];
const HUMAN_PLAYER = 'X';
const AI_PLAYER = 'O';
let isGameActive = true;

// DOM elements
const cells = document.querySelectorAll('.cell');
const status = document.getElementById('status');
const restartButton = document.getElementById('restart');

// Winning combinations
const WINNING_COMBINATIONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

// Initialize game
function initGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    cells.forEach(cell => {
        cell.textContent = '';
        cell.addEventListener('click', handleCellClick);
    });
    status.textContent = 'Your turn (X)';
}

// Handle player's move
function handleCellClick(e) {
    const cell = e.target;
    const index = parseInt(cell.getAttribute('data-index'));

    if (board[index] !== '' || !isGameActive) return;

    // Player's move
    makeMove(index, HUMAN_PLAYER);
    
    // Check if game is over after player's move
    if (isGameActive) {
        // AI's move
        status.textContent = "AI is thinking...";
        setTimeout(() => {
            makeAIMove();
        }, 500);
    }
}

// Make a move (player or AI)
function makeMove(index, player) {
    board[index] = player;
    cells[index].textContent = player;
    
    if (checkWin(player)) {
        status.textContent = player === HUMAN_PLAYER ? 'You Win!' : 'AI Wins!';
        isGameActive = false;
        return;
    }
    
    if (checkDraw()) {
        status.textContent = "It's a Draw!";
        isGameActive = false;
        return;
    }
}

// AI move using minimax algorithm
function makeAIMove() {
    const bestMove = findBestMove();
    makeMove(bestMove, AI_PLAYER);
    if (isGameActive) {
        status.textContent = 'Your turn (X)';
    }
}

// Minimax algorithm implementation
function minimax(board, depth, isMaximizing, alpha, beta) {
    // Terminal states
    if (checkWin(AI_PLAYER)) return 10 - depth;
    if (checkWin(HUMAN_PLAYER)) return depth - 10;
    if (checkDraw()) return 0;

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === '') {
                board[i] = AI_PLAYER;
                let score = minimax(board, depth + 1, false, alpha, beta);
                board[i] = '';
                bestScore = Math.max(score, bestScore);
                alpha = Math.max(alpha, bestScore);
                if (beta <= alpha) break;
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === '') {
                board[i] = HUMAN_PLAYER;
                let score = minimax(board, depth + 1, true, alpha, beta);
                board[i] = '';
                bestScore = Math.min(score, bestScore);
                beta = Math.min(beta, bestScore);
                if (beta <= alpha) break;
            }
        }
        return bestScore;
    }
}

// Find the best move for AI
function findBestMove() {
    let bestScore = -Infinity;
    let bestMove = -1;

    for (let i = 0; i < 9; i++) {
        if (board[i] === '') {
            board[i] = AI_PLAYER;
            let score = minimax(board, 0, false, -Infinity, Infinity);
            board[i] = '';
            if (score > bestScore) {
                bestScore = score;
                bestMove = i;
            }
        }
    }
    return bestMove;
}

// Check for win
function checkWin(player) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return board[index] === player;
        });
    });
}

// Check for draw
function checkDraw() {
    return board.every(cell => cell !== '');
}

// Restart game
restartButton.addEventListener('click', initGame);

// Initialize the game when the page loads
initGame(); 