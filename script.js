// Function to open a new tab with the specified game code
function openGameTab() {
    const gameCode = document.getElementById('game-code-input').value; // Get the game code from the input field
    if (gameCode) {
        const url = `https://play.blooket.com/play/${gameCode}`; // Create the URL with the game code
        window.open(url, '_blank'); // Open the URL in a new tab
    } else {
        alert('Please enter a game code.'); // Alert if no game code is entered
    }
}

// Event listener for the button to open the game tab
document.getElementById('open-game-tab').addEventListener('click', openGameTab);
