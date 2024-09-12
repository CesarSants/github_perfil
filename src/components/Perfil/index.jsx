import React, { useEffect, useState } from 'react';
import styles from './Perfil.module.css';

//ou apenas ---> pode ser function normal tmb|||| export default() =>{  ---- sem o export no final do arquivo
const Perfil = (props) => {
    const [profile, setProfile] = useState({
        name: '',
        login: '',
        avatar_url: '',
        public_repos: 0,
        followers: 0,
        following: 0,
        html_url: ''
    });

    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeUsuario}`)
            .then(res => res.json())
            .then(data => {
                setProfile({
                    name: data.name,
                    login: data.login,
                    avatar_url: data.avatar_url,
                    public_repos: data.public_repos,
                    followers: data.followers,
                    following: data.following,
                    html_url: data.html_url
                });
            });
    }, [props]);

    // const usuario = {
    //     nome: 'Cesar Santos',
    //     avatar: 'https://github.com/CesarSants.png'
    // }

    const { nomeUsuario } = props; // sem essa linha tem q ser props.endereco e props.name
    //essa linha nao precisa ser escrita se as propriedades forem passadas no argumento da function anonima a cima  "{endereco, name}", dessa forma sem as aspas

    return (
        <>
            <header className={styles.header}>
                {/* {JSON.stringify(props)} */}
                <a target='_blank' href={`https://github.com/${nomeUsuario}`}>
                    <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt="" />
                </a>
                <h1 id="name" className={styles.name}>{nomeUsuario}</h1>
                <h5 id="login">{profile.name}</h5> 
            <ul class="numbers">
                <li class="numbers-item">
                    <h4>Repositórios</h4>
                    <span id="repos">{profile.public_repos}</span>
                </li>
                <li class="numbers-item">
                    <h4>Seguidores</h4>
                    <span id="followers">{profile.followers}</span>
                </li>
                <li class="numbers-item">
                    <h4>Seguindo</h4>
                    <span id="following">{profile.following}</span>
                </li>
            </ul>
            </header>
        </>
    )
}

export default Perfil;































// import './perfil.css'

// //ou apenas ---> pode ser function normal tmb|||| export default() =>{  ---- sem o export no final do arquivo
// const Perfil = (props) => {
//     // const usuario = {
//     //     nome: 'Cesar Santos',
//     //     avatar: 'https://github.com/CesarSants.png'
//     // }

//     const { endereco, name } = props; // sem essa linha tem q ser props.endereco e props.name
//     //essa linha nao precisa ser escrita se as propriedades forem passadas no argumento da function anonima a cima  "{endereco, name}", dessa forma sem as aspas

//     return (
//         <div>
//             {/* {JSON.stringify(props)} */}
//             <img className="perfil-avatar" src={endereco} alt="" />
//             <h1 id="name" className="perfil-titulo">{name}</h1>
//         </div>
//     )
// }

// export default Perfil;