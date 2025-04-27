// Chess puzzles for openings, middle game, and endgame for kids
// Each puzzle: { id, name, description, board (8x8 array), solution (array of moves) }

export const openingPuzzles = [
  {
    id: 1,
    name: "King's Pawn and Knight",
    description: "First, move your king's pawn two steps. Next, bring out your knight!",
    board: [
      ['♜','♞','♝','♛','♚','♝','♞','♜'],
      ['♟','♟','♟','♟','♟','♟','♟','♟'],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['♙','♙','♙','♙','♙','♙','♙','♙'],
      ['♖','♘','♗','♕','♔','♗','♘','♖'],
    ],
    solution: [
      {from: [6,4], to: [4,4], piece: '♙'}, // e2 to e4
      {from: [7,6], to: [5,5], piece: '♘'}, // g1 to f3
    ],
  },
  {
    id: 2,
    name: "Queen's Pawn and Bishop",
    description: "First, move your queen's pawn two steps. Then, move your bishop out!",
    board: [
      ['♜','♞','♝','♛','♚','♝','♞','♜'],
      ['♟','♟','♟','♟','♟','♟','♟','♟'],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['♙','♙','♙','♙','♙','♙','♙','♙'],
      ['♖','♘','♗','♕','♔','♗','♘','♖'],
    ],
    solution: [
      {from: [6,3], to: [4,3], piece: '♙'}, // d2 to d4
      {from: [7,2], to: [5,4], piece: '♗'}, // c1 to e3
    ],
  },
  {
    id: 3,
    name: "Double Knights Out!",
    description: "Move both knights out to help control the center!",
    board: [
      ['♜','♞','♝','♛','♚','♝','♞','♜'],
      ['♟','♟','♟','♟','♟','♟','♟','♟'],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['♙','♙','♙','♙','♙','♙','♙','♙'],
      ['♖','♘','♗','♕','♔','♗','♘','♖'],
    ],
    solution: [
      {from: [7,6], to: [5,5], piece: '♘'}, // g1 to f3
      {from: [7,1], to: [5,2], piece: '♘'}, // b1 to c3
    ],
  },
  {
    id: 4,
    name: "Bishop and Pawn",
    description: "First, move your bishop out. Then, move the pawn in front of your bishop!",
    board: [
      ['♜','♞','♝','♛','♚','♝','♞','♜'],
      ['♟','♟','♟','♟','♟','♟','♟','♟'],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['♙','♙','♙','♙','♙','♙','♙','♙'],
      ['♖','♘','♗','♕','♔','♗','♘','♖'],
    ],
    solution: [
      {from: [7,2], to: [5,0], piece: '♗'}, // c1 to a3
      {from: [6,0], to: [4,0], piece: '♙'}, // a2 to a4
    ],
  },
];

export const middleGamePuzzles = [
  {
    id: 1,
    name: "Knight Fork and Capture",
    description: "First, fork the king and rook with your knight. Then, capture the rook!",
    board: [
      ['','','','','♚','','','♖'],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['','','','♘','','','',''],
      ['','','','','','','',''],
      ['','','','','','','',''],
    ],
    solution: [
      {from: [5,3], to: [3,4], piece: '♘'}, // fork
      {from: [3,4], to: [0,7], piece: '♘'}, // capture rook
    ],
  },
  {
    id: 2,
    name: "Double Attack!",
    description: "First, move your queen to attack two pieces. Then, capture one of them!",
    board: [
      ['','','','','♚','','','♖'],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['','','','','','♕','',''],
      ['','','','','','','',''],
    ],
    solution: [
      {from: [6,5], to: [2,5], piece: '♕'}, // Qf2-f6
      {from: [2,5], to: [0,7], piece: '♕'}, // Qf6xh8
    ],
  },
  {
    id: 3,
    name: "Pin and Win!",
    description: "First, pin the black knight to the king. Then, capture the knight!",
    board: [
      ['','','','','♚','','',''],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['','','','','','♝','',''],
      ['','','','','','♖','',''],
    ],
    solution: [
      {from: [7,5], to: [2,5], piece: '♖'}, // Rf1-f6
      {from: [2,5], to: [6,5], piece: '♖'}, // Rf6xf6
    ],
  },
];

export const endGamePuzzles = [
  {
    id: 1,
    name: "Queen and King Mate",
    description: "First, use your queen to put the king on the edge. Then, bring your king to help for checkmate!",
    board: [
      ['','','','','♚','','',''],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['','','','','','♕','♔',''],
    ],
    solution: [
      {from: [7,5], to: [0,5], piece: '♕'}, // Qf1-f8
      {from: [7,6], to: [6,6], piece: '♔'}, // Kg1-g2
    ],
  },
  {
    id: 2,
    name: "Pawn Promotion!",
    description: "First, move your pawn to the last rank. Then, promote it to a queen! (Pretend for now)",
    board: [
      ['','','','','♚','','',''],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['','','','','','♙','',''],
      ['','','','','','♔','',''],
    ],
    solution: [
      {from: [6,5], to: [0,5], piece: '♙'}, // pawn up
      {from: [0,5], to: [0,5], piece: '♕'}, // promote (pretend)
    ],
  },
  {
    id: 3,
    name: "King and Rook Mate",
    description: "First, bring your rook to cut off the king. Then, bring your king closer!",
    board: [
      ['','','','','♚','','',''],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['','','','♔','','','',''],
      ['','','','♖','','','',''],
    ],
    solution: [
      {from: [7,3], to: [0,3], piece: '♖'}, // Rook up
      {from: [6,3], to: [5,3], piece: '♔'}, // King up
    ],
  },
];
