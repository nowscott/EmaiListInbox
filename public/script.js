document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const statusMessage = document.getElementById('status-message');
    const submitButton = document.querySelector('button[type="submit"]');

    // 禁用提交按钮
    submitButton.disabled = true;
    submitButton.textContent = '订阅中...';

    fetch('/api/subscribe', {
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
        statusMessage.style.color = 'red';
        console.error('Error:', error);
    })
    .finally(() => {
        // 重新启用提交按钮
        submitButton.disabled = false;
        submitButton.textContent = '订阅';
    });
});
