import React, { Component } from 'react';

class TodoInput extends Component {
  render() {
    const {item, handleChange, handleSubmit, editItem}= this.props
    return (
      <div className="card card-body my-3">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <div>
                  <input type="text" className="form-control" placeholder="Add a todo item" size="100" value={item} onChange={handleChange} />
              </div>
            </div>
            <div>
                  <button type="submit" className={editItem?"btn btn-success btn-block mt-3":"btn btn-primary btn-block mt-3"}>{editItem?"Edit item":"Add todo"}</button>
            </div>  
          </form>  
      </div>
    );
  }
}

export default TodoInput
