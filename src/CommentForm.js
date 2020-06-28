import React, { Component } from "react";

class CommentForm extends Component {
  state = {
    name: "",
    message: "",
  };

  handleChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleChangeMessage = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addComment(this.state.name, this.state.message);
  };

  render() {
    return (
      <div className="CommentForm">
        <h2 className="title is-h2">Ajouter un commentaire</h2>

        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Name</label>

            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Text input"
                onChange={this.handleChangeName}
                value={this.state.name}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Textarea"
                onChange={this.handleChangeMessage}
                value={this.state.message}
              ></textarea>
            </div>
          </div>

          <button className="button is-primary">Envoyer</button>
        </form>
      </div>
    );
  }
}

export default CommentForm;
