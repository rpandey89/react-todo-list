let Actions = {
	addTodo : function(text) {
		return {
			type : 'ADD_TODO',
			text : text
		}
	}
}

export default Actions

//store.dispatch(addTodo('some text'))