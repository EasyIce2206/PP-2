
    const choices = document.querySelectorAll('.choice');
    const result = document.getElementById('result');
    const playerScoreSpan = document.getElementById('playerScore');
    const computerScoreSpan = document.getElementById('computerScore');
    const resetButton = document.getElementById('reset');
    let playerScore = 0;
    let computerScore = 0;

    // Array of choices for the game
    const choicesArray = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

    choices.forEach(choice => choice.addEventListener('click', playGame));
    resetButton.addEventListener('click', resetGame);

    // Plays the game when a choice is clicked
    function playGame(e) {
        const playerChoice = e.target.id;
        const computerChoice = getComputerChoice();
        const winner = getWinner(playerChoice, computerChoice);
        showResult(winner, playerChoice, computerChoice);
        updateScore(winner);
    }

    // Returns a random choice from the choicesArray
    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * choicesArray.length);
        return choicesArray[randomIndex];
    }

    // Returns the winner of the game based on the choices
    function getWinner(player, computer) {
        if (player === computer) {
            return 'draw';
        }
        if (
            (player === 'rock' && (computer === 'scissors' || computer === 'lizard')) ||
            (player === 'paper' && (computer === 'rock' || computer === 'spock')) ||
            (player === 'scissors' && (computer === 'paper' || computer === 'lizard')) ||
            (player === 'lizard' && (computer === 'spock' || computer === 'paper')) ||
            (player === 'spock' && (computer === 'scissors' || computer === 'rock'))
        ) {
            return 'player';
        } else {
            return 'computer';
        }
    }

    // Displays the result of the game 
    function showResult(winner, playerChoice, computerChoice) {
        if (winner === 'draw') {
            result.textContent = `It's a draw! You both chose ${playerChoice}.`;
        } else if (winner === 'player') {
            result.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
        } else {
            result.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
        }
    }

    // Updates the score based on the winner
    function updateScore(winner) {
        if (winner === 'player') {
            playerScore++;
            playerScoreSpan.textContent = playerScore;
        } else if (winner === 'computer') {
            computerScore++;
            computerScoreSpan.textContent = computerScore;
        }
    }

    // Resets the game when the reset button is clicked
    function resetGame() {
        playerScore = 0;
        computerScore = 0;
        playerScoreSpan.textContent = playerScore;
        computerScoreSpan.textContent = computerScore;
        result.textContent = 'Make your move!';
    }

    // Links the username to the player
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        document.getElementById('playerScore').previousSibling.textContent = username + ': ';
    });

    