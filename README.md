# Tic Tac Toe
## Here is a tic-tac-toe game created with React! 
## To Run: Clone the repository; In command prompt, find the project location; Run npm install http-server; Run http-server -c-1; Open your browser and navigate to localhost:8080.

#### Roadmap of Future Improvements: I want the user to be unable to select squares once a winner has been determined. To implement this feature I will need to disable the button in Square(), so no other selections can be make. First, I will check to see if a winner has been returned and if this is true, the button will become disabled. I also want to have a button that will 'refresh' the board to start the game over. To do this, the entire Game() will need to be updated. I will either utilize forceUpdate() or make a gameState component that could be updated.
