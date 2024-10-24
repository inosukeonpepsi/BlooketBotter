document.getElementById('send-bots').addEventListener('click', sendBots);

function sendBots() {
    const gameCode = document.getElementById('game-code').value;
    const csrfToken = document.getElementById('csrf-token').value;
    const botName = document.getElementById('bot-name').value;
    const botAmount = parseInt(document.getElementById('bot-amount').value, 10);
    const lagSwitch = document.getElementById('lag-switch').checked;

    if (!gameCode || !csrfToken || !botName || isNaN(botAmount) || botAmount <= 0) {
        alert('Please fill in all fields correctly.');
        return;
    }

    // Prepare the request body
    const requestBody = {
        gameCode: gameCode,
        botName: botName,
        botAmount: botAmount,
        lagSwitch: lagSwitch,
    };

    // Make the fetch call
    fetch('https://goldquest.blooket.com/apipb/playservice.v1.PlayService/Me', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-csrf-token': csrfToken, // Use the CSRF token from the input
        },
        body: JSON.stringify(requestBody),
    })
    .then(response => {
        if (response.ok) {
            alert('Bots sent successfully!');
        } else {
            alert('Error sending bots. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please check the console for details.');
    });
}
