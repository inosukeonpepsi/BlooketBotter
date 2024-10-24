document.getElementById('send-bots').addEventListener('click', async () => {
    const gameCode = document.getElementById('game-code').value;
    const botName = document.getElementById('bot-name').value;
    const botAmount = document.getElementById('bot-amount').value;
    const csrfToken = document.getElementById('csrf-token').value;

    try {
        const response = await fetch('https://goldquest.blooket.com/apipb/playservice.v1.PlayService/Me', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-csrf-token': csrfToken,
                'Accept': 'application/proto',
            },
            body: JSON.stringify({ gameCode, botName, botAmount }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Bots sent successfully:', data);
    } catch (error) {
        console.error('Error sending bots:', error);
    }
});
