# Tic Tac Toe
## Here is a tic-tac-toe game made with React! 
## To run this game, download the JSX and HTML file. Using a localhost, open the file on your device. 

#### Roadmap of Future Improvements: I want the user to be unable to select squares once a winner has been determined. To implement this feature I will need to disable the button in Square(), so no other selections can be make. First, I will check to see if a winner has been returned and if this is true, the button will become disabled. I also want to have a button that will 'refresh' the board to start the game over. To do this, the entire board will need to unmount and then (re)mount. I will make a new component that controls the gameState, that when changed will re-render all the children and the component itself. 
