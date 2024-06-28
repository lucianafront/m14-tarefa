
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TelaInicialPokemon from './TelaInicialPokemon';
import PaginaNaoEncontrada from './PaginaNaoEncontrada';
import Sobre from './Sobre';


const Rotas = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TelaInicialPokemon />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<PaginaNaoEncontrada />} />
      </Routes>
    </div>
  );
}

export default Rotas;
