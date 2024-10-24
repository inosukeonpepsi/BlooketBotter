document.getElementById('lookup-btn').addEventListener('click', async () => {
    const csrfToken = document.getElementById('csrf-token').value;
    const idToken = document.getElementById('id-token').value;

    if (!csrfToken || !idToken) {
        alert('Please enter both CSRF Token and ID Token');
        return;
    }

    await lookupAccount(idToken);
});

async function lookupAccount(idToken) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ idToken }),
        });

        if (!response.ok) {
            throw new Error('Failed to lookup account');
        }

        const data = await response.json();
        console.log('Account lookup successful:', data);

        // Display output
        document.getElementById('output').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error looking up account:', error);
        document.getElementById('output').innerText = 'Error looking up account: ' + error.message;
    }
}
