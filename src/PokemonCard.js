// import axios from 'axios';
// import React, { useState } from 'react';

// const PokemonCard = ({
//   id,
//   name: initialName,
//   image: initialImage,
//   evolution: initialEvolution,
//   createPokemon,
//   setCreatePokemon,
//   updateList,
//   setUpdateList
// }) => {
//   const [apiUrl] = useState('http://localhost:4000'); // URL da API local
//   const [editing, setEditing] = useState(createPokemon ?? false);
//   const [name, setName] = useState(initialName ?? '');
//   const [imageUrl, setImageUrl] = useState(initialImage ?? '');
//   const [evolution, setEvolution] = useState(initialEvolution?.toString() ?? '');

//   const handleChangePokemon = async () => {
//     try {
//       const requestData = {
//         name,
//         imageUrl,
//         evolution: Number(evolution)
//       };

//       if (createPokemon) {
//         await axios.post(`${apiUrl}/new-pokemon`, requestData);
//         setCreatePokemon(false);
//       } else {
//         await axios.put(`${apiUrl}/update-pokemon/${id}`, requestData);
//         setEditing(false);
//       }

//       setUpdateList(prev => prev + 1);
//     } catch (error) {
//       console.error('Erro ao salvar ou atualizar Pokémon:', error);
//     }
//   };

//   const handleDeletePokemon = async () => {
//     try {
//       await axios.delete(`${apiUrl}/delete-pokemon/${id}`);
//       setUpdateList(prev => prev + 1);
//     } catch (error) {
//       console.error('Erro ao deletar Pokémon:', error);
//     }
//   };

//   return (
//     <div className="pokemon-card">
//       {editing ? (
//         <div>
//           <label>
//             Nome:
//             <input
//               type="text"
//               value={name}
//               onChange={e => setName(e.target.value)}
//             />
//           </label>
//           <label>
//             Url da imagem:
//             <input
//               type="text"
//               value={imageUrl}
//               onChange={e => setImageUrl(e.target.value)}
//             />
//           </label>
//           <label>
//             Estágio de evolução:
//             <input
//               type="number"
//               value={evolution}
//               onChange={e => setEvolution(e.target.value)}
//             />
//           </label>
//           <button onClick={() => (createPokemon ? setCreatePokemon(false) : setEditing(false))}>
//             Cancelar
//           </button>
//           <button onClick={handleChangePokemon}>Confirmar</button>
//         </div>
//       ) : (
//         <>
//           <h2>{name}</h2>
//           <img src={imageUrl} alt={name} />
//           <h3>Estágio de evolução: {evolution}</h3>
//           <button onClick={() => setEditing(true)}>Alterar</button>
//           <button onClick={handleDeletePokemon}>Remover</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default PokemonCard;
import React, { useState } from 'react';
import axios from 'axios';

const PokemonCard = ({
  id,
  name: initialName,
  image: initialImage,
  evolution: initialEvolution,
  createPokemon,
  setCreatePokemon,
  updateList,
  setUpdateList,
  apiUrl // Removido o useState apiUrl do componente, passado como prop
}) => {
  const [editing, setEditing] = useState(createPokemon ?? false);
  const [name, setName] = useState(initialName ?? '');
  const [imageUrl, setImageUrl] = useState(initialImage ?? '');
  const [evolution, setEvolution] = useState(initialEvolution?.toString() ?? '');

  const handleChangePokemon = async () => {
    try {
      const requestData = {
        name,
        imageUrl,
        evolution: Number(evolution)
      };

      if (createPokemon) {
        await axios.post(`${apiUrl}/new-pokemon`, requestData);
        setCreatePokemon(false);
      } else {
        await axios.put(`${apiUrl}/update-pokemon/${id}`, requestData);
        setEditing(false);
      }

      setUpdateList(prev => prev + 1);
    } catch (error) {
      console.error('Erro ao salvar ou atualizar Pokémon:', error);
    }
  };

  const handleDeletePokemon = async () => {
    try {
      await axios.delete(`${apiUrl}/delete-pokemon/${id}`);
      setUpdateList(prev => prev + 1);
    } catch (error) {
      console.error('Erro ao deletar Pokémon:', error);
    }
  };

  return (
    <div className="pokemon-card">
      {editing ? (
        <div>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>
          <label>
            Url da imagem:
            <input
              type="text"
              value={imageUrl}
              onChange={e => setImageUrl(e.target.value)}
            />
          </label>
          <label>
            Estágio de evolução:
            <input
              type="number"
              value={evolution}
              onChange={e => setEvolution(e.target.value)}
            />
          </label>
          <button onClick={() => (createPokemon ? setCreatePokemon(false) : setEditing(false))}>
            Cancelar
          </button>
          <button onClick={handleChangePokemon}>Confirmar</button>
        </div>
      ) : (
        <>
          <h2>{name}</h2>
          <img src={imageUrl} alt={name} />
          <h3>Estágio de evolução: {evolution}</h3>
          <button onClick={() => setEditing(true)}>Alterar</button>
          <button onClick={handleDeletePokemon}>Remover</button>
        </>
      )}
    </div>
  );
};

export default PokemonCard;

