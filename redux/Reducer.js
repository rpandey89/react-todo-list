function getId(state) {
	return state.todos.reduce((maxId, todo) => {
		return Math.max(todo.id, maxId);
	}, -1) + 1;
}

let Reducer = function(state, action) {

	switch(action.type) {

		case 'ADD_TODO' : 
			//Object.assign({a : 3}, {b : 2}) => {a : 3, b : 2}
			return Object.assign({}, state, {
				todos : [
					{
						text : action.text,
						completed : false,
						id : getId(state)
					},
					...state.todos
				]
			});
		default : 
			return state;
	}
}

export default Reducer