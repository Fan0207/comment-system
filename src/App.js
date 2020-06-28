import React, { Component } from "react";
import "./App.scss";
import CommentList from "./CommentList";

import AdminMode from "./AdminMode";
import CommentForm from "./CommentForm";

import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    comments: [],
    isAdmin: false,
  };

  changeMode = () => {
    this.setState({
      isAdmin: !this.state.isAdmin,
    });
  };

  addComment = (name, message) => {
    let newComment = {
      id: uuidv4(),
      name: name,
      message: message,
    };
    this.setState({
      comments: [...this.state.comments, newComment],
    });
  };

  deleteComment = (id) => {
    let comments = this.state.comments.filter((comment) => comment.id !== id);
    this.setState({
      comments: comments,
    });
  };

  render() {
    return (
      <div className="App container">
        <AdminMode changeMode={this.changeMode} isAdmin={this.state.isAdmin} />
        <div className="columns">
          <div className="column">
            <CommentForm addComment={this.addComment} />
          </div>
          <div className="column">
            <CommentList
              comments={this.state.comments}
              deleteComment={this.deleteComment}
              isAdmin={this.state.isAdmin}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
