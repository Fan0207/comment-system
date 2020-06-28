import React, { Component } from "react";

class CommentList extends Component {
  render() {
    let commentsList = this.props.comments.map((comment) => {
      if (this.props.isAdmin) {
        return (
          <li key={comment.id}>
            {comment.name}: {comment.message}
            <button
              onClick={() => {
                this.props.deleteComment(comment.id);
              }}
              className="delete"
            >
              X
            </button>
          </li>
        );
      } else {
        return (
          <li key={comment.id}>
            {comment.name}: {comment.message}
          </li>
        );
      }
    });

    return (
      <>
        <h2 className="title is-h2">
          Liste des commentaires ({this.props.comments.length})
        </h2>
        <ul className="comment-list">{commentsList}</ul>
      </>
    );
  }
}

export default CommentList;
