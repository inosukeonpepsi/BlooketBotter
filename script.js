document.getElementById('send-bots').addEventListener('click', async () => {
    const gameCode = document.getElementById('game-code').value;
    const botName = document.getElementById('bot-name').value;
    const botAmount = parseInt(document.getElementById('bot-amount').value);
    const csrfToken = document.getElementById('csrf-token').value; // Get CSRF token from input

    // Check if inputs are valid
    if (!gameCode || !botName || isNaN(botAmount) || botAmount <= 0 || !csrfToken) {
        alert('Please fill in all fields correctly.');
        return;
    }

    try {
        const response = await fetch('https://goldquest.blooket.com/apipb/playservice.v1.PlayService/Me', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/proto',
                'x-csrf-token': csrfToken, // Use the CSRF token here
                'Accept': '*/*',
                'User-Agent': 'Mozilla/5.0',
            },
            body: new Blob([], { type: 'application/proto' }), // Adjust the body if needed
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        
        // Logic to send bots can go here
        alert(`Sending ${botAmount} bots named ${botName} to game ${gameCode}`);
        
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to send bots: ' + error.message);
    }
});
