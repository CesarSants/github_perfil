import { useEffect, useState } from "react"

import styles from './ReposList.module.css';

const ReposList = ({nomeUsuario}) => {
    const [repos,setRepos] = useState([]);
    const[estaCarregando, setEstaCarregando] = useState(true)

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then (res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false)
                setRepos(resJson)
            }, 3000);
        })
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
                        <a className={styles.listItemLink}  target="_blank" href={repositorio.html_url}>Visitar no Github</a>
                    </li>
                ))}

                {/* {repos.map(({id,name,language,html_url}) => (
                    <li key={id}>
                        <b>Nome:</b> {name} <br />
                        <b>Linguagem:</b> {language} <br />
                        <a target="_blank" href={html_url}>Visitar no Github</a> <br />
                    </li>
                ))} */}

                <li>Repositorio</li>
            </ul>
            )}
        </div>
    )
}

export default ReposList
