document.getElementById('send-bots').addEventListener('click', function() {
    const csrfToken = document.getElementById('csrf-token').value;
    const gameCode = document.getElementById('game-code').value;
    const botName = document.getElementById('bot-name').value;
    const botAmount = parseInt(document.getElementById('bot-amount').value);

    if (csrfToken && gameCode && botName && botAmount > 0) {
        for (let i = 0; i < botAmount; i++) {
            sendBot(csrfToken, gameCode, botName);
        }
    } else {
        alert('Please fill in all fields correctly.');
    }
});

function sendBot(csrfToken, gameCode, botName) {
    fetch('https://goldquest.blooket.com/apipb/playservice.v1.PlayService/Join', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-csrf-token': csrfToken
        },
        body: JSON.stringify({
            gameCode: gameCode,
            name: botName
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Bot sent:', data);
    })
    .catch(error => {
        console.error('Error sending bot:', error);
    });
}
