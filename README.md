# Tic-Tac-Toe AI Implementation

A C++ implementation of Tic-Tac-Toe with an AI opponent using the Minimax algorithm with Alpha-Beta pruning.

## 🧠 AI Concepts Explained

### 1. Minimax Algorithm
The Minimax algorithm is a decision-making algorithm used in two-player games. It:
- Simulates all possible moves
- Evaluates game states
- Chooses the move that maximizes the AI's chances of winning while minimizing the player's chances

### 2. Alpha-Beta Pruning
Alpha-Beta pruning is an optimization technique for the Minimax algorithm that:
- Reduces the number of nodes evaluated
- Maintains the same result as Minimax
- Improves performance by eliminating branches that cannot influence the final decision

### 3. Game State Evaluation
The AI uses a scoring system to evaluate game states:
- WIN: +1000 points
- DRAW: 0 points
- LOSS: -1000 points

## 🎮 How to Play
1. Compile the program using a C++ compiler
2. Run the executable
3. Enter your moves by specifying row and column numbers (0-2)
4. The AI will respond with its move

## 📊 Game Board Representation
```
0,0 | 0,1 | 0,2
---------
1,0 | 1,1 | 1,2
---------
2,0 | 2,1 | 2,2
```

## 🛠️ Technical Implementation

### Key Components
1. **Board State Management**
   - 3x3 grid representation
   - Legal move validation
   - Win condition checking

2. **AI Decision Making**
   - Minimax algorithm implementation
   - Alpha-Beta pruning optimization
   - Depth-limited search

3. **Game Flow**
   - Player move input
   - AI move calculation
   - Game state updates
   - Win/Draw detection

## 📈 Performance Optimization
- Alpha-Beta pruning reduces the search space
- Early termination of unpromising branches
- Efficient board state evaluation

## 🚀 Getting Started

### Prerequisites
- C++ compiler (g++ recommended)
- Standard Template Library (STL)

### Compilation
```bash
g++ Source.cpp -o tic_tac_toe
```

### Running
```bash
./tic_tac_toe
```

## 📚 Learning Resources
- [Minimax Algorithm](https://en.wikipedia.org/wiki/Minimax)
- [Alpha-Beta Pruning](https://en.wikipedia.org/wiki/Alpha%E2%80%93beta_pruning)
- [Game Theory](https://en.wikipedia.org/wiki/Game_theory)

## 👨‍💻 Author
2K22/MC/63

## 📄 License
This project is open source and available under the MIT License.