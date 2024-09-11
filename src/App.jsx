// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import './App.css'

import { useState } from "react"

import Perfil from "./components/Perfil"
//import Formulario from "./components/Formulario"
import ReposList from "./components/ReposList";

const App = () => {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [inputNome, setInputNome] = useState(''); // Estado para o valor do input
  const [usuarioValido, setUsuarioValido] = useState(true); // Para controlar se o nome de usuário é válido

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o comportamento padrão de recarregar a página

    if (inputNome.length > 4) {
      // Verifica se o nome de usuário existe no GitHub
      fetch(`https://api.github.com/users/${inputNome}`)
        .then((res) => {
          if (res.ok) {
            return res.json(); // Se a resposta for ok (200), o usuário existe
          } else {
            throw new Error('Usuário não encontrado');
          }
        })
        .then((data) => {
          setNomeUsuario(inputNome); // Define o nome de usuário como válido
          setUsuarioValido(true);
        })
        .catch((erro) => {
          setUsuarioValido(false); // Define como inválido se o usuário não existir
          alert('Usuário não encontrado. Por favor, insira um nome de usuário válido.');
        });
    } else {
      setUsuarioValido(false); // Define como inválido se o nome tiver menos de 5 caracteres
      alert('O nome de usuário deve ter mais de 4 caracteres.');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputNome}
          onChange={(e) => setInputNome(e.target.value)} // Atualiza o estado com o valor do input
        />
        <button type="submit">Buscar Usuário</button>
      </form>

      {/* Renderiza o Perfil e ReposList apenas se o nome de usuário for válido e existir no GitHub */}
      {usuarioValido && nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
      {/* {formularioEstaVisivel && (
        <Formulario/>)}

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
    </>
  )
}

export default App
