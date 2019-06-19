import React, { Component } from "react";
import PokemonCard from "./PokemonCard";

class PokemonList extends Component {
  state = {
    url: 'https://pokeapi.co/api/v2/pokemon/',
    pokemon:null
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
        </div>
      </React.Fragment>
    );
  }
}

export default PokemonList;
