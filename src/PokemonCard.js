import axios from 'axios'
import React, { useState } from 'react'

export const PokemonCard = ({
  id,
  name,
  image,
  evolution,
  createPokemon,
  setCreatePokemon,
  updateList,
  setUpdateList
}) => {
  const [editPokemon, setEditPokemon] = useState(createPokemon ?? false)
  const [nameInput, setNameInput] = useState(name ?? '')
  const [imageUrlInput, setImageUrlInput] = useState(image ?? '')
  const [evolutionInput, setEvolutionInput] = useState(evolution?.toString() ?? '')
  const [apiUrl] = useState('http://localhost:3400/pokemons')
  const [apiImagem] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon')

  const handleChangePokemon = () => {
    if (createPokemon) {
      axios.post(apiUrl, {
        name: nameInput,
        imageUrl: `${apiImagem}/${imageUrlInput}.png`,
        evolution: Number(evolutionInput)
      })
      setCreatePokemon(false)
    } else {
      axios.put(`${apiUrl}/${id}`, {
        name: nameInput,
        imageUrl: `${apiImagem}/${imageUrlInput}.png`,
        evolution: Number(evolutionInput)
      })
      setEditPokemon(false)
    }
    setUpdateList(updateList + 1)
  }

  const handleDeletePokemon = () => {
    axios.delete(`${apiUrl}/${id}`)
    setUpdateList(updateList + 1)
  }

  return (
    <div className="pokemon-card">
      
      {editPokemon ? (
        <div>
        
         <label>
            Nome:
            <input
              type="text"
              onChange={e => setNameInput(e.target.value)}
              value={nameInput}
            />
          </label>
          
          <label>
            Url da imagem:
            <input
              type="number"
              min={0}
              onChange={e => setImageUrlInput(e.target.value)}
              value={imageUrlInput}
            />
          </label>
          
          <label>
            Estágio de evolução:
            <input
              type="number"
              onChange={e => setEvolutionInput(e.target.value)}
              value={evolutionInput}
            />
          </label>
          
          <button
            onClick={() =>
              createPokemon ? setCreatePokemon(false) : setEditPokemon(false)
            }
          >
            Cancela
          </button>
          <button onClick={handleChangePokemon}>Confirma</button>
        </div>
      ) : (
        <>
          <h2>{name}</h2>
          <h3>Estágio de evolução: {evolution}</h3>
          <img src={image} alt={name} />
          <button onClick={() => setEditPokemon(true)}>Alterar</button>
          <button onClick={handleDeletePokemon}>Remover</button>
        </>
      )}
    </div>
  )
}
