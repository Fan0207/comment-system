import React, { Component } from 'react';

class AdminMode extends Component {
    state = { 
       
     }

    render() { 

        let button = this.props.isAdmin ? 
        <button className="button is-danger" onClick={this.props.changeMode}>Désactiver le mode d'administration</button>
        : <button className="button is-info" onClick={this.props.changeMode}>Activer le mode d'administration</button>;

        let classMessage = this.props.isAdmin ? "message is-danger" : "message is-info";
       
        return (         
        <article className={classMessage}>
            <div className="message-body">
                {button}
            </div>
        </article>
       );
    }
}
 
export default AdminMode;