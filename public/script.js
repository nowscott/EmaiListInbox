document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const statusMessage = document.getElementById('status-message');

    fetch('/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        window.location.href = 'success.html';
    })
    .catch(error => {
        statusMessage.textContent = '订阅失败，请稍后重试，或联系:nowscott@qq.com';
        console.error('Error:', error);
    });
});
