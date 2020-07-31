import React, { Component } from 'react';

class Default extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                         <h1> 404</h1>
                         <h1> error </h1>
                         <h2>Page Not Found</h2>
                         <h3> 
                             The request URL <span className="text-danger">
                             {this.props.location.pathname}</span>{""} Pokemon não encontrado
                         </h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Default;