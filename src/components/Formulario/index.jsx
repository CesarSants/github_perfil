import { useState, useEffect } from "react"

const Formulario = () => {
    let [materiaA, setmateriaA] = useState(null);
    let [materiaB, setmateriaB] = useState(null);
    let [materiaC, setmateriaC] = useState(null);
    let [nome, setNome] = useState('');

    useEffect(() => {
        console.log("o componente iniciou")

        return () => {
            console.log("o componente finalizou")
        }
    }, [])

    useEffect(() => {
        console.log("o estado nome mudou")
    }, [nome])

    useEffect(() => {
        console.log("materia A mudou para:" + materiaA)
    }, [materiaA, materiaB, materiaC])

    const alteraNome = (evento) => {
        // console.log(evento.target.value)
        // setNome(evento.target.value)
        setNome(estadoAnterior => {
            //console.log (estadoAnterior)

            return evento.target.value
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        // const numericItems = soma.filter(item => typeof item === 'number');
        // const count = numericItems.length;
        const media = soma / 3

        if (media >= 7) {
            return (

                <p>Olá {nome} <span>sua nota foi {media} </span>. Você foi aprovado</p>
            )
        } else {
            return (
                <p>Olá {nome} <span>sua nota foi {media} </span>. Você não foi aprovado</p>
            )
        }
    }








    const renderizaResultado2 = () => {
        const notas = [materiaA, materiaB, materiaC].filter(nota => nota !== null);

        // Se não houver nenhuma nota preenchida, evite divisão por zero
        if (notas.length === 0) {
            return <p>Insira as notas para calcular a média.</p>;
        }

        const soma = notas.reduce((acc, nota) => acc + nota, 0);
        const media = soma / notas.length;

        if (media >= 7) {
            return (
                <p>
                    <span>Sua média foi {media.toFixed(2)}. </span>Você foi aprovado.
                </p>
            );
        } else {
            return (
                <p>
                    <span>Sua média foi {media.toFixed(2)}. </span>Você não foi aprovado.
                </p>
            );
        }
    };







    return (
        <form>
            <ul>
                {[1, 2, 3, 4, 5].map(item => (
                    <>
                        <li key={item}>{item}</li>
                    </>
                ))}
            </ul>

            {/* <ul>
                {[1, 2, 3, 4, 5].map((item, index) => (
                    <React.Fragment key={index}>
                        <li>{item}</li>
                    </React.Fragment>
                ))}
            </ul> */}

            <input type="text" placeholder="seu nome" onChange={evento => alteraNome(evento)} /> {/* so é necessario evento => alteraNome(evento), quando tem mais de um argumento, nesse caso , como so tem apenas um , so alteraNome , ja é o suficiente  */}
            <input type="number" placeholder="nota materia a" onChange={({ target }) => setmateriaA(parseInt(target.value))} />
            <input type="number" placeholder="nota materia b" onChange={evento => setmateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="nota materia c" onChange={evento => setmateriaC(parseInt(evento.target.value))} />
            {/* <p>o aluno foi aprovado</p>
            {materiaA}
            {materiaB}
            {materiaC} */}
            {renderizaResultado()}
            {renderizaResultado2()}
        </form>
    )
}

export default Formulario









// import { useState } from "react";

// const Formulario = () => {
//     let [materiaA, setmateriaA] = useState(null);
//     let [materiaB, setmateriaB] = useState(null);
//     let [materiaC, setmateriaC] = useState(null);

//     const handleNotaChange = (setNota) => (evento) => {
//         let valor = parseFloat(evento.target.value);
//         if (!isNaN(valor) && valor >= 0 && valor <= 10) {
//             setNota(valor.toFixed(2)); // Garante duas casas decimais
//         } else {
//             setNota(null); // Valor inválido, reseta
//         }
//     };

//     const renderizaResultado = () => {
//         const notas = [materiaA, materiaB, materiaC].filter(nota => nota !== null);

//         if (notas.length === 0) {
//             return <p>Insira as notas para calcular a média.</p>;
//         }

//         const soma = notas.reduce((acc, nota) => acc + parseFloat(nota), 0);
//         const media = soma / notas.length;

//         if (media >= 7) {
//             return (
//                 <p>
//                     <span>Sua média foi {media.toFixed(2)}. </span>Você foi aprovado.
//                 </p>
//             );
//         } else {
//             return (
//                 <p>
//                     <span>Sua média foi {media.toFixed(2)}. </span>Você não foi aprovado.
//                 </p>
//             );
//         }
//     };

//     return (
//         <form action="">
//             <input
//                 type="number"
//                 placeholder="Nota matéria A"
//                 min="0"
//                 max="10"
//                 step="0.1"
//                 onChange={handleNotaChange(setmateriaA)}
//             />
//             <input
//                 type="number"
//                 placeholder="Nota matéria B"
//                 min="0"
//                 max="10"
//                 step="0.1"
//                 onChange={handleNotaChange(setmateriaB)}
//             />
//             <input
//                 type="number"
//                 placeholder="Nota matéria C"
//                 min="0"
//                 max="10"
//                 step="0.1"
//                 onChange={handleNotaChange(setmateriaC)}
//             />
//             {renderizaResultado()}
//         </form>
//     );
// };

// export default Formulario;



























// import { useState } from "react";

// const Formulario = () => {
//     let [materiaA, setmateriaA] = useState(null);
//     let [materiaB, setmateriaB] = useState(null);
//     let [materiaC, setmateriaC] = useState(null);

//     // Função para tratar o valor de entrada e converter para formato decimal
//     const handleNotaChange = (setNota) => (evento) => {
//         let valor = evento.target.value.replace(/\D/g, ''); // Remove qualquer coisa que não seja número
//         if (valor.length > 0) {
//             valor = (parseFloat(valor) / 100).toFixed(2); // Ajusta as duas casas decimais automaticamente
//         } else {
//             valor = null;
//         }

//         // Garante que a nota fique no intervalo de 0 a 10
//         if (valor !== null && valor <= 10) {
//             setNota(valor);
//         } else if (valor > 10) {
//             setNota('10.00'); // Limita ao máximo 10.00
//         } else {
//             setNota(null); // Se não for válido, reseta
//         }
//     };

//     const renderizaResultado = () => {
//         const notas = [materiaA, materiaB, materiaC].filter(nota => nota !== null);

//         if (notas.length === 0) {
//             return <p>Insira as notas para calcular a média.</p>;
//         }

//         const soma = notas.reduce((acc, nota) => acc + parseFloat(nota), 0);
//         const media = soma / notas.length;

//         if (media >= 7) {
//             return (
//                 <p>
//                     <span>Sua média foi {media.toFixed(2)}. </span>Você foi aprovado.
//                 </p>
//             );
//         } else {
//             return (
//                 <p>
//                     <span>Sua média foi {media.toFixed(2)}. </span>Você não foi aprovado.
//                 </p>
//             );
//         }
//     };

//     return (
//         <form action="">
//             <input
//                 type="text"
//                 placeholder="Nota matéria A"
//                 onInput={handleNotaChange(setmateriaA)}
//                 value={materiaA || ''}
//             />
//             <input
//                 type="text"
//                 placeholder="Nota matéria B"
//                 onInput={handleNotaChange(setmateriaB)}
//                 value={materiaB || ''}
//             />
//             <input
//                 type="text"
//                 placeholder="Nota matéria C"
//                 onInput={handleNotaChange(setmateriaC)}
//                 value={materiaC || ''}
//             />
//             {renderizaResultado()}
//         </form>
//     );
// };

// export default Formulario;











// import { useState } from "react";

// const Formulario = () => {
//     let [materiaA, setmateriaA] = useState(null);
//     let [materiaB, setmateriaB] = useState(null);
//     let [materiaC, setmateriaC] = useState(null);

//     // Função para tratar o valor de entrada e converter para formato decimal
//     const handleNotaChange = (setNota) => (evento) => {
//         let valor = evento.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
//         if (valor.length > 0) {
//             valor = (parseFloat(valor) / 100).toFixed(2); // Ajusta as duas casas decimais automaticamente
//         } else {
//             valor = null;
//         }

//         // Garante que a nota fique no intervalo de 0 a 10
//         if (valor !== null && valor <= 10) {
//             setNota(valor);
//         } else if (valor > 10) {
//             setNota('10.00'); // Limita ao máximo 10.00
//         } else {
//             setNota(null); // Se não for válido, reseta
//         }
//     };

//     const renderizaResultado = () => {
//         const notas = [materiaA, materiaB, materiaC].filter(nota => nota !== null);

//         if (notas.length === 0) {
//             return <p>Insira as notas para calcular a média.</p>;
//         }

//         const soma = notas.reduce((acc, nota) => acc + parseFloat(nota), 0);
//         const media = soma / notas.length;

//         if (media >= 7) {
//             return (
//                 <p>
//                     <span>Sua média foi {media.toFixed(2)}. </span>Você foi aprovado.
//                 </p>
//             );
//         } else {
//             return (
//                 <p>
//                     <span>Sua média foi {media.toFixed(2)}. </span>Você não foi aprovado.
//                 </p>
//             );
//         }
//     };

//     return (
//         <form action="">
//             <input
//                 type="number"
//                 step="0.01"
//                 placeholder="Nota matéria A"
//                 onInput={handleNotaChange(setmateriaA)}
//                 value={materiaA || ''}
//             />
//             <input
//                 type="number"
//                 step="0.01"
//                 placeholder="Nota matéria B"
//                 onInput={handleNotaChange(setmateriaB)}
//                 value={materiaB || ''}
//             />
//             <input
//                 type="number"
//                 step="0.01"
//                 placeholder="Nota matéria C"
//                 onInput={handleNotaChange(setmateriaC)}
//                 value={materiaC || ''}
//             />
//             {renderizaResultado()}
//         </form>
//     );
// };

// export default Formulario;













// import { useState } from "react";

// const Formulario = () => {
//     const [materiaA, setmateriaA] = useState(null);
//     const [materiaB, setmateriaB] = useState(null);
//     const [materiaC, setmateriaC] = useState(null);

//     // Estado para armazenar o último valor válido
//     const [ultimoValorValido, setUltimoValorValido] = useState({
//         materiaA: null,
//         materiaB: null,
//         materiaC: null
//     });

//     const handleNotaChange = (setNota, campo) => (evento) => {
//         let valor = evento.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
//         if (valor.length > 0) {
//             valor = (parseFloat(valor) / 100).toFixed(2); // Ajusta as duas casas decimais automaticamente
//         } else {
//             valor = null;
//         }

//         // Garante que a nota fique no intervalo de 0 a 10
//         if (valor !== null && valor <= 10) {
//             setNota(valor);
//             setUltimoValorValido((prev) => ({ ...prev, [campo]: valor })); // Salva o valor como válido
//         } else {
//             // Se o valor for maior que 10, restaura o último valor válido
//             setNota(ultimoValorValido[campo] || null);
//         }
//     };

//     const renderizaResultado = () => {
//         const notas = [materiaA, materiaB, materiaC].filter(nota => nota !== null);

//         if (notas.length === 0) {
//             return <p>Insira as notas para calcular a média.</p>;
//         }

//         const soma = notas.reduce((acc, nota) => acc + parseFloat(nota), 0);
//         const media = soma / notas.length;

//         if (media >= 7) {
//             return (
//                 <p>
//                     <span>Sua média foi {media.toFixed(2)}. </span>Você foi aprovado.
//                 </p>
//             );
//         } else {
//             return (
//                 <p>
//                     <span>Sua média foi {media.toFixed(2)}. </span>Você não foi aprovado.
//                 </p>
//             );
//         }
//     };

//     return (
//         <form action="">
//             <input
//                 type="number"
//                 step="0.01"
//                 placeholder="Nota matéria A"
//                 onInput={handleNotaChange(setmateriaA, 'materiaA')}
//                 value={materiaA || ''}
//             />
//             <input
//                 type="number"
//                 step="0.01"
//                 placeholder="Nota matéria B"
//                 onInput={handleNotaChange(setmateriaB, 'materiaB')}
//                 value={materiaB || ''}
//             />
//             <input
//                 type="number"
//                 step="0.01"
//                 placeholder="Nota matéria C"
//                 onInput={handleNotaChange(setmateriaC, 'materiaC')}
//                 value={materiaC || ''}
//             />
//             {renderizaResultado()}
//         </form>
//     );
// };

// export default Formulario;



// let valor = evento.target.value.replace(/\D/g, '');
// é usada para remover todos os caracteres que não são números do valor inserido pelo usuário.

// Vamos detalhar como isso funciona:

// evento.target.value captura o valor do campo de input, que é o que o usuário digitou.
// .replace(/\D/g, '') é uma função que substitui todos os caracteres que correspondem à expressão regular \D por uma string vazia (''), ou seja, remove esses caracteres.
// O que é \D?
// Na expressão regular, \D significa "qualquer coisa que não seja um dígito numérico" (onde \d com letra minúscula seria "qualquer dígito numérico").
// O g ao final da expressão (/\D/g) significa global, ou seja, aplica a substituição em todos os caracteres não numéricos dentro do valor, não apenas no primeiro encontrado.
// Exemplo:
// Se o usuário digitar algo como "2a34b5", a função replace(/\D/g, '') transforma isso em "2345", removendo os caracteres não numéricos (a, b).

// Isso garante que apenas números sejam processados na aplicação, o que é útil para controlar a entrada de valores numéricos no campo de input, evitando que caracteres indesejados como letras ou símbolos interfiram no cálculo.








// const soma = notas.reduce((acc, nota) => acc + parseFloat(nota), 0);
// usa o método .reduce() do array, que é uma forma de acumular valores (nesse caso, somar as notas). Vamos detalhar cada parte:

// O que é .reduce()?
// O método .reduce() executa uma função para cada elemento de um array, acumulando um valor à medida que percorre o array.

// Explicação dos parâmetros:
// acc (abreviação de "accumulator") é o valor acumulado. Ele guarda a soma parcial à medida que o array é percorrido.
// nota é o valor atual do array que está sendo processado em cada iteração.
// 0 (no final de .reduce()) é o valor inicial do acumulador (acc). Ele começa a soma em zero.
// Como o processo funciona:
// Inicialmente, acc começa com o valor 0 (o valor inicial fornecido).
// Para cada nota no array notas, a função adiciona parseFloat(nota) (converte a nota para um número com casas decimais) ao acc.
// Esse processo continua até que todas as notas tenham sido somadas, e o valor final da soma é atribuído à variável soma.
// Exemplo:
// Se notas = ["2.5", "3.0", "4.0"], o .reduce() funcionaria assim:

// Primeira iteração: acc = 0, nota = "2.5". Então, acc + parseFloat("2.5") = 2.5.
// Segunda iteração: acc = 2.5, nota = "3.0". Então, acc + parseFloat("3.0") = 5.5.
// Terceira iteração: acc = 5.5, nota = "4.0". Então, acc + parseFloat("4.0") = 9.5.
// No final, soma seria igual a 9.5.

// Resumindo:
// acc é o valor acumulado que vai guardando a soma parcial.
// nota é o valor atual do array que está sendo processado.
// parseFloat(nota) converte a string de nota para um número decimal, e o resultado final é a soma de todas as notas.
// Isso permite somar dinamicamente as notas de acordo com os valores no array notas.





















// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Calcular Média</title>
// </head>
// <body>

//     <form id="formulario">
//         <input
//             id="materiaA"
//             type="number"
//             step="0.01"
//             placeholder="Nota matéria A"
//             oninput="handleNotaChange('materiaA')"
//         />
//         <input
//             id="materiaB"
//             type="number"
//             step="0.01"
//             placeholder="Nota matéria B"
//             oninput="handleNotaChange('materiaB')"
//         />
//         <input
//             id="materiaC"
//             type="number"
//             step="0.01"
//             placeholder="Nota matéria C"
//             oninput="handleNotaChange('materiaC')"
//         />
//         <div id="resultado"></div>
//     </form>

//     <script>
//         const notas = {
//             materiaA: null,
//             materiaB: null,
//             materiaC: null
//         };

//         const ultimoValorValido = {
//             materiaA: null,
//             materiaB: null,
//             materiaC: null
//         };

//         function handleNotaChange(campo) {
//             const input = document.getElementById(campo);
//             let valor = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos

//             if (valor.length > 0) {
//                 valor = (parseFloat(valor) / 100).toFixed(2); // Ajusta as duas casas decimais automaticamente
//             } else {
//                 valor = null;
//             }

//             // Garante que a nota fique no intervalo de 0 a 10
//             if (valor !== null && valor <= 10) {
//                 notas[campo] = valor;
//                 ultimoValorValido[campo] = valor; // Salva o valor como válido
//             } else {
//                 // Se o valor for maior que 10, restaura o último valor válido
//                 notas[campo] = ultimoValorValido[campo] || null;
//             }

//             input.value = notas[campo] || '';

//             renderizaResultado();
//         }

//         function renderizaResultado() {
//             const notasValidas = Object.values(notas).filter(nota => nota !== null);

//             const resultadoDiv = document.getElementById('resultado');
//             if (notasValidas.length === 0) {
//                 resultadoDiv.innerHTML = '<p>Insira as notas para calcular a média.</p>';
//                 return;
//             }

//             const soma = notasValidas.reduce((acc, nota) => acc + parseFloat(nota), 0);
//             const media = soma / notasValidas.length;

//             if (media >= 7) {
//                 resultadoDiv.innerHTML = `<p>Sua média foi ${media.toFixed(2)}. Você foi aprovado.</p>`;
//             } else {
//                 resultadoDiv.innerHTML = `<p>Sua média foi ${media.toFixed(2)}. Você não foi aprovado.</p>`;
//             }
//         }
//     </script>

// </body>
// </html>

