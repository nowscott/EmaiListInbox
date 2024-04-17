document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    fetch('/api/subscribe', { // 更改这里的路径
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
        // 重定向到订阅成功的页面
        window.location.href = 'success.html';
    })
    .catch(error => {
        alert('订阅失败，请稍后重试，或联系 nowscott@qq.com');
        console.error('Error:', error);
    });
});

