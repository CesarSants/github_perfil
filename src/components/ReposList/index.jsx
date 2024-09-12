import { useEffect, useState } from "react"

import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true)
    // const [deuErro, setDeuErro] = useState(false)

    useEffect(() => {
        // if (!nomeUsuario) return;

        setEstaCarregando(true);
        // setDeuErro(false);

        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            // .then(res => {//
            //     if (!res.ok) {//
            //         // Verifica se a resposta não foi bem-sucedida
            //         throw new Error('Usuário não encontrado'); // Lança um erro para ser capturado no .catch
            //     }//
            //     return res.json();//
            // })//
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false)
                    setRepos(resJson)
                }, 1000);
            })
            // .catch(erro => {
            //     setEstaCarregando(false);
            //     setDeuErro(true);
            //     alert('o usuario inserido nao existe, por favor coloque um nome de usuario valido')
            // })
    }, [nomeUsuario])

    return (
        <div className="container">
            {estaCarregando ? (                  //era && sem o : 
                <h2>Carregando...</h2>
            ) : (
                <ul className={styles.list}>
                    {repos.map(repositorio => (
                        <li className={styles.listItem} key={repositorio.id}>
                            <div className={styles.listItemName}>
                                <b>Nome:</b>
                                {repositorio.name}
                            </div>
                            <div className={styles.listItemLanguage}>
                                <b>Linguagem:</b>
                                {repositorio.language}
                            </div>
                            <a className={styles.listItemLink} target="_blank" href={repositorio.html_url}>Visitar no Github</a>
                        </li>
                    ))}

                    {/* {repos.map(({id,name,language,html_url}) => (
                    <li key={id}>
                        <b>Nome:</b> {name} <br />
                        <b>Linguagem:</b> {language} <br />
                        <a target="_blank" href={html_url}>Visitar no Github</a> <br />
                    </li>
                ))} */}
                </ul>
            )}
        </div>
    )
}

export default ReposList