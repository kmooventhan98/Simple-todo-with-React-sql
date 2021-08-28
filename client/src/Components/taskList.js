import React, { Component } from "react";
import axios from "axios";

class TaskList extends Component {
  state = {
    task: "",
  };
  onDeleteClick = () => {
    console.log("Delte");
  };

  onSubmitClick = () => {
    axios.post("http://localhost:4000/addTask", {
      task: this.state.task,
    });
  };
  render() {
    return (
      <div>
        <h3>Task List</h3>
        <div className='ui input'>
          <input
            type='text'
            value={this.state.task}
            placeholder='Your Tasks'
            onChange={(e) => {
              this.setState({ task: e.target.value });
            }}
          />
        </div>
        <button
          className='ui primary button basic'
          onClick={this.onSubmitClick()}
        >
          Submit
        </button>
        <hr />
        <div className='ui cards'>
          <div className='card'>
            <div className='content'>
              <div className='meta'>Friends of Veronika</div>
            </div>

            <div className='extra content'>
              <div className='ui two buttons'>
                <div
                  className='ui basic green button'
                  onClick={this.onSubmitClick()}
                >
                  Done
                </div>
                <div
                  className='ui basic red button'
                  onClick={this.onDeleteClick()}
                >
                  Delete
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskList;
