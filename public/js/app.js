(function (window) {

	const theList = document.querySelector('.todo-list');
	const newTodoTextBox = document.querySelector('.new-todo');

	newTodoTextBox.addEventListener('keydown', (e) => {
		if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
			console.log(newTodoTextBox.value)

			let todoObjectToSend = JSON.stringify({
				todo: newTodoTextBox.value
			})

			fetch('/api/todos', {
				method: 'POST',
				body: todoObjectToSend,
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				  }
			})
				.then(res => res.json())
				.then(data => {
					console.log(data)
					//todo: Check for errors
					displayTodo(data)
				})


		}
	})

	fetch('/api/todos')
	.then(res => res.json())
	.then(data => {
		console.log(data)
		data.forEach(todo => displayTodo(todo));
	})

	function displayTodo(todo) {
	
		var todoTemplate = `
		<li class="view">
			<div class="view">
				<input class="toggle" type="checkbox">
				<label>${todo.todo}</label>
				<button class="destroy"></button>
			</div>
			<input class="edit" value="Create a TodoMVC template">
		</li>
		`

		theList.insertAdjacentHTML('beforeend', todoTemplate)
		
	}


})(window);


