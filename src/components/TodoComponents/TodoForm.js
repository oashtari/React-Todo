import React from 'react';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            newTodo: ''
        };
    }

    handleChanges = event => {
        this.setState({ ...this.state, newTodo: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addNewTodo(this.state.newTodo);
        this.setState({ ...this.state, newTodo: '' });
    }

    render() {
        console.log('it is rendering', this.state);
        return (
            <form onSubmit={this.handleSubmit} >
                <input
                    type='text'
                    placeholder="enter your todo here"
                    name='newItem'
                    value={this.state.newTodo}
                    onChange={this.handleChanges}
                />
                <button>Add Item</button>
            </form >
        )
    }

}

export default TodoForm;