document.addEventListener('DOMContentLoaded', () => {
	const commentInput = document.getElementById('comment-input');
	const commentsContainer = document.getElementById('comments');
	const submitButton = document.getElementById('submit-comment');

	submitButton.addEventListener('click', () => {
		const commentText = commentInput.value.trim();
		if (commentText) {
			addComment(commentText);
			commentInput.value = '';
		}
	});

	function addComment(text) {
		const commentDiv = document.createElement('div');
		commentDiv.classList.add('comment');
		commentDiv.textContent = text;
		commentsContainer.appendChild(commentDiv);
	}
});

function editPost() {
	const newTitle = prompt('Введите новый заголовок:', document.getElementById('post-title').innerText);
	const newContent = prompt('Введите новое содержимое поста:', document.getElementById('post-content').innerText);

	if (newTitle !== null) {
		document.getElementById('post-title').innerText = newTitle;
	}
	if (newContent !== null) {
		document.getElementById('post-content').innerText = newContent;
	}
}

function editPost() {
	const newTitle = prompt("Введите новый заголовок:", document.getElementById('postTitle').innerText);
	const newContent = prompt("Введите новое содержимое поста:", document.getElementById('postContent').innerText);

	if (newTitle !== null) {
		document.getElementById('postTitle').innerText = newTitle;
	}
	if (newContent !== null) {
		document.getElementById('postContent').innerText = newContent;
	}
}

function addComment() {
	const commentInput = document.getElementById('commentInput');
	const commentText = commentInput.value;

	if (commentText) {
		const commentDiv = document.createElement('div');
		commentDiv.classList.add('comment');
		commentDiv.innerText = commentText;

		document.getElementById('commentList').appendChild(commentDiv);
		commentInput.value = ''; // Очищаем поле ввода комментария
	} else {
		alert("Пожалуйста, введите комментарий.");
	}
}