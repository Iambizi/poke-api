import React, { Component } from "react";

class PokemonCard extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="col-md-3 col-sm-6 mb-5">
          <div className="card">
            <div className="card-header">
              <h1>Scyther</h1>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PokemonCard;
