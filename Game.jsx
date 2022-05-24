const Square = ({id, newState, end}) => {
    const [status, setStatus] = React.useState(null);
    const [fill, setFill] = React.useState(false);
    const xo = ["O", "X"]; 
    
    return(
        <button disabled= {end === true} className={status ? 'orange' : 'purple'}
        onClick={(e) => {
          let nextplayer = newState(id);
          setFill(true);
          if (fill == true) {
            onClick == null; 
          }
          setStatus(nextplayer);
        }}> 
            <h1 className="status">{xo[status]}</h1>  
        </button>
    )
}

const Board = () => {
  const [player, setPlayer] = React.useState(1);
  const [state, setState] = React.useState(Array(9).fill(null));
  let end = false;
  let status = `Player ${player}`;
  let winner = checkWinner(state);
  if(winner != null) {
    end = true;
    status = `Player ${winner} wins!`;
  }

  const newState = idOfSquare => {
    let thePlayer = player;
    state[idOfSquare] = player;
    setState(state);
    let nextPlayer = (1 - player);
    setPlayer(nextPlayer);
    return thePlayer;
  };

  function renderSquare (i) {
      return <Square id={i} player={player} newState={newState}></Square>;
  }

  function checkWinner(state) {

    const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  
  for (let i=0; i<win.length; i++){
    const [a, b, c] = win[i];
    if (state[a] == state[b] && state[a] == state[c] && state[a] != null)
    return state[a];
    }
    return null;
  }

  return (
    <div
      className="game-board"
      onClick={(e) => {
        setPlayer(1 - player);
        status = `Player ${player}`;
      }}
    >
      <div className="grid-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
      </div>
      <div className="grid-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
      </div>
      <div className="grid-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
      </div>
      <div id="info">
        <h1>{status}</h1>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
