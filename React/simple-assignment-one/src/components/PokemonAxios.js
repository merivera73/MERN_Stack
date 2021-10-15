import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonAxios = props => {
    const [pokemon, setPokemon] = useState([]);
    const clickHandler = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response=>{setPokemon(response.data.results)})
    
    }
    return (
        <div>
            <button onClick={clickHandler}>Fetch Some Pokemon with Axios</button>
            
                {pokemon.map((pokem, i) => (
                    <div key={i}>
                        {pokem.name}
                    </div>
                ))}
            
        </div>
    )
}

export default PokemonAxios