import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import './style.css';

const IndexPage = () => {
  const [apiUrl] = useState('https://pokeapi.co/api/v2');
  const [pokemonList, setPokemonList] = useState([]);
  const [createPokemon, setCreatePokemon] = useState(false);
  const [updateList, setUpdateList] = useState(0);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const { data } = await axios.get(`${apiUrl}/pokemon?limit=151`);
        setPokemonList(data.results);
      } catch (error) {
        console.error('Erro ao carregar lista de Pokémon:', error);
      }
    };

    fetchPokemonList();
  }, [apiUrl, updateList]);

  return (
    <main>
      <h1>Coleção pessoal de Pokémon</h1>
      <button onClick={() => setCreatePokemon(true)}>
        Adicionar Pokémon à sua coleção
      </button>
      {createPokemon && (
        <div className="create-card">
          <PokemonCard
            createPokemon={createPokemon}
            setCreatePokemon={setCreatePokemon}
            updateList={updateList}
            setUpdateList={setUpdateList}
          />
        </div>
      )}
      <div className="pokemon-container">
        {pokemonList.map((pokemon, index) => (
          <PokemonCard
            key={index}
            id={index + 1} // Usando índice + 1 como ID (exemplo, adaptar conforme sua API)
            name={pokemon.name}
            imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
            evolution={Math.floor(Math.random() * 4)} // Exemplo de evolução aleatória
            updateList={updateList}
            setUpdateList={setUpdateList}
          />
        ))}
      </div>
    </main>
  );
};

export default IndexPage;