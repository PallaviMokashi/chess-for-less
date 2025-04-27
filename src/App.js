import React, { useState } from 'react';
import './App.css';
import { openingPuzzles, middleGamePuzzles, endGamePuzzles } from './puzzles';

function Chessboard({ board, onCellClick, selected, highlight }) {
  // board: 8x8 array of pieces
  if (!board) {
    return <div style={{fontSize: '2rem', color:'#a0522d', marginTop:'3rem'}}>Loading board...</div>;
  }
  return (
    <div style={{ display: 'inline-block', border: '6px solid #a0522d', marginTop: '3rem', background: '#a0522d', borderRadius: '1.5rem', boxShadow: '0 8px 32px rgba(160,82,45,0.18)' }}>
      {board.map((row, i) => (
        <div key={i} style={{ display: 'flex' }}>
          {row.map((piece, j) => {
            const isSelected = selected && selected[0] === i && selected[1] === j;
            const isHighlight = highlight && highlight[0] === i && highlight[1] === j;
            return (
              <div
                key={j}
                onClick={onCellClick ? () => onCellClick(i, j) : undefined}
                style={{
                  width: 64,
                  height: 64,
                  fontSize: '2.7rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: isSelected
                    ? '#ffe082'
                    : isHighlight
                    ? '#81c784'
                    : (i + j) % 2 === 0
                    ? '#f5ecd7'
                    : '#a0522d',
                  color: (i + j) % 2 === 0 ? '#442a1f' : '#fffbe6',
                  border: '2px solid #7c4a1e',
                  cursor: onCellClick ? 'pointer' : 'default',
                  boxShadow: isSelected || isHighlight ? '0 0 8px 2px #ffd54f' : undefined,
                  transition: 'background 0.2s',
                }}
              >
                {piece}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}


function DefaultChessboard() {
  // The default board for the "Learn Pieces" lesson
  const board = [
    ['♜','♞','♝','♛','♚','♝','♞','♜'],
    ['♟','♟','♟','♟','♟','♟','♟','♟'],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['♙','♙','♙','♙','♙','♙','♙','♙'],
    ['♖','♘','♗','♕','♔','♗','♘','♖'],
  ];
  return <Chessboard board={board} />;
}


function App() {
  const [lesson, setLesson] = useState(null);

  const renderContent = () => {
    if (!lesson) {
      return (
        <>
          <h1 style={{ color: '#442a1f', fontSize: '4.5rem', marginBottom: '2rem', letterSpacing: '2px' }}>Chess for Kids!</h1>
          <p style={{ color: '#7c4a1e', fontSize: '2.2rem', marginBottom: '1.5rem' }}>Welcome! Let's have fun learning chess together. Pick a lesson to start:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '3rem', width: '100%', maxWidth: 500 }}>
            <button onClick={() => setLesson('pieces')}>Learn Pieces</button>
            <button onClick={() => setLesson('openings')}>Openings</button>
            <button onClick={() => setLesson('middle')}>Middle Game</button>
            <button onClick={() => setLesson('endgame')}>Endgame</button>
          </div>
          <p style={{ color: '#a0522d', marginTop: '4rem', fontSize: '1.6rem', fontWeight: 'bold' }}>Let's play and learn together!</p>
        </>
      );
    }
    if (lesson === 'pieces') {
      return (
        <>
          <button onClick={() => setLesson(null)} style={{ alignSelf: 'flex-start', marginBottom: '2rem', fontSize: '1.5rem', background: '#a0522d', color: '#fffbe6', border: '3px solid #7c4a1e', borderRadius: '1rem', padding: '0.8rem 2rem' }}>← Back</button>
          <h2 style={{ color: '#442a1f', fontSize: '3rem', marginBottom: '1.5rem' }}>How Chess Pieces Move</h2>
          <p style={{ color: '#7c4a1e', fontSize: '1.6rem', maxWidth: 600, margin: '0 auto 2rem auto', lineHeight: 1.5 }}>
            This is a chessboard! Each piece moves in a special way. Tap on a piece to learn about it (coming soon!).
          </p>
          <Chessboard />
        </>
      );
    }
    if (lesson === 'openings') {
      return <PuzzleLesson lessonName="Openings" puzzles={openingPuzzles} onBack={() => setLesson(null)} />;
    }
    if (lesson === 'middle') {
      return <PuzzleLesson lessonName="Middle Game" puzzles={middleGamePuzzles} onBack={() => setLesson(null)} />;
    }
    if (lesson === 'endgame') {
      return <PuzzleLesson lessonName="Endgame" puzzles={endGamePuzzles} onBack={() => setLesson(null)} />;
    }
    return null;
  };

  return (
    <div className="App">
      <header className="App-header">
        {renderContent()}
      </header>
    </div>
  );
}

function PuzzleLesson({ lessonName, puzzles, onBack }) {
  const [selected, setSelected] = useState(null);
  const [userBoard, setUserBoard] = useState(null);
  const [moveStep, setMoveStep] = useState(0);
  const [from, setFrom] = useState(null); // [i, j]
  const [feedback, setFeedback] = useState("");

  // Reset puzzle state when a new puzzle is selected
  React.useEffect(() => {
    if (selected) {
      setUserBoard(selected.board.map(row => [...row]));
      setMoveStep(0);
      setFrom(null);
      setFeedback("");
    }
  }, [selected]);

  if (!selected) {
    return (
      <>
        <button onClick={onBack} style={{ alignSelf: 'flex-start', marginBottom: '2rem', fontSize: '1.5rem', background: '#a0522d', color: '#fffbe6', border: '3px solid #7c4a1e', borderRadius: '1rem', padding: '0.8rem 2rem' }}>← Back</button>
        <h2 style={{ color: '#442a1f', fontSize: '3rem', marginBottom: '1.5rem' }}>{lessonName} Puzzles</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', alignItems: 'center', marginTop: '2rem', width: '100%' }}>
          {puzzles.map(pz => (
            <button key={pz.id} onClick={() => setSelected(pz)} style={{ fontSize: '2rem', width: '100%', maxWidth: 500 }}>{pz.name}</button>
          ))}
        </div>
      </>
    );
  }
  const solution = selected.solution;
  const correctMove = solution[moveStep];

  function handleCellClick(i, j) {
    if (feedback === 'Puzzle Complete! 🎉') return;
    if (feedback) return; // Don't allow more moves after feedback
    if (!from) {
      // Select a piece
      if (userBoard && userBoard[i][j]) {
        setFrom([i, j]);
      }
    } else {
      // Try to move selected piece to (i, j)
      if (from[0] === i && from[1] === j) {
        setFrom(null); // Deselect
        return;
      }
      // Check if this move matches the current solution step
      if (
        from[0] === correctMove.from[0] &&
        from[1] === correctMove.from[1] &&
        i === correctMove.to[0] &&
        j === correctMove.to[1]
      ) {
        // Move is correct!
        const newBoard = userBoard.map(row => [...row]);
        newBoard[i][j] = newBoard[from[0]][from[1]];
        newBoard[from[0]][from[1]] = '';
        setUserBoard(newBoard);
        setFrom(null);
        if (moveStep + 1 === solution.length) {
          setFeedback('Puzzle Complete! 🎉');
        } else {
          setFeedback('Great job! Next move!');
          setTimeout(() => {
            setFeedback("");
            setMoveStep(moveStep + 1);
          }, 1200);
        }
      } else {
        setFeedback('Oops! Try again.');
        setTimeout(() => setFeedback("") ,1200);
        setFrom(null);
      }
    }
  }

  function handleRetry() {
    setUserBoard(selected.board.map(row => [...row]));
    setMoveStep(0);
    setFrom(null);
    setFeedback("");
  }

  return (
    <>
      <button onClick={() => setSelected(null)} style={{ alignSelf: 'flex-start', marginBottom: '2rem', fontSize: '1.5rem', background: '#a0522d', color: '#fffbe6', border: '3px solid #7c4a1e', borderRadius: '1rem', padding: '0.8rem 2rem' }}>← Back</button>
      <h2 style={{ color: '#442a1f', fontSize: '2.6rem', marginBottom: '1.2rem' }}>{selected.name}</h2>
      <p style={{ color: '#7c4a1e', fontSize: '1.5rem', maxWidth: 700, margin: '0 auto 2rem auto', lineHeight: 1.5 }}>{selected.description}</p>
      {userBoard ? (
        <Chessboard
          board={userBoard}
          onCellClick={feedback === 'Puzzle Complete! 🎉' ? undefined : handleCellClick}
          selected={from}
          highlight={from && correctMove && from[0] === correctMove.from[0] && from[1] === correctMove.from[1] ? correctMove.to : null}
        />
      ) : (
        <div style={{fontSize: '2rem', color:'#a0522d', marginTop:'3rem'}}>Loading board...</div>
      )}
      {feedback && (
        <div style={{ color: feedback.startsWith('Great') || feedback.startsWith('Puzzle Complete') ? '#388e3c' : '#d84315', fontSize: '2rem', marginTop: '2rem', fontWeight: 'bold' }}>{feedback}</div>
      )}
      {feedback === 'Puzzle Complete! 🎉' && (
        <button onClick={handleRetry} style={{ marginTop: '2rem', fontSize: '1.5rem', background: '#a0522d', color: '#fffbe6', border: '3px solid #7c4a1e', borderRadius: '1rem', padding: '0.8rem 2rem' }}>
          Try Again
        </button>
      )}
    </>
  );
}

export default App;
