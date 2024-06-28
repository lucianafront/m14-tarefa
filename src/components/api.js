const apiUrl = 'http://localhost:3400/pokemons'


export const getPokemons = async () => {
    const response = await fetch(apiUrl)
    const data = await response.json()
    return data
    }

export const getPokemon = async (id) => {
    const response = await fetch(`${apiUrl}/${id}`)
    const data = await response.json()
    return data
    }

export const createPokemon = async (pokemon) => {
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pokemon)
    })
    const data = await response.json()
    return data
    }

export const updatePokemon = async (id, pokemon) => {
    const response = await fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pokemon)
    })
    const data = await response.json()
    return data
    }

export const deletePokemon = async (id) => {
    const response = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    })
    const data = await response.json()
    return data
    }

