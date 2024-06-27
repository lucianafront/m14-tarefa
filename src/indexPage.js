import React, { useEffect, useState } from 'react'
import { PokemonCard } from './PokemonCard'
import axios from 'axios'
import './style.css'

const IndexPage = () => {
  const [pokemonList, setPokemonList] = useState([])
  const [createPokemon, setCreatePokemon] = useState(false)
  const [updateList, setUpdateList] = useState(0)
  const[url] = useState('http://localhost:3400/pokemons')

  useEffect(() => {
    const request = async () => {
      const { data } = await axios.get(url)
      .catch((error) => {
        console.log('error', error)
      })
      setPokemonList(data)
    }
    setTimeout(request, 1500)
  }, [updateList, url])

  return (
    <main>
      <h1>Coleção pessoal de POKÉMONS</h1>
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
        {pokemonList.map(({ id, name, imageUrl, evolution }) => (
          <PokemonCard
            key={id}
            id={id}
            name={name}
            image={imageUrl}
            evolution={evolution}
            updateList={updateList}
            setUpdateList={setUpdateList}
          />
        ))}
      </div>
    </main>
  )
}

export default IndexPage
