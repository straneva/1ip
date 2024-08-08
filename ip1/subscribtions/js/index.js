document.getElementById('subscribeBtn').addEventListener('click', function () {
	const username = document.getElementById('username').value;

	if (!username) {
		alert('Пожалуйста, введите имя пользователя.');
		return;
	}

	fetch('/subscribe', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ username: username }),
	})
		.then(response => response.json())
		.then(data => {
			document.getElementById('message').textContent = data.message;
		})
		.catch((error) => {
			console.error('Ошибка:', error);
			document.getElementById('message').textContent = 'Произошла ошибка. Попробуйте еще раз.';
		});
});