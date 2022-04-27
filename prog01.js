let nome
nome = "edu"
console.log(nome)

let idade = 31
console.log(idade)

{
    let n = "edwin"
    console.log("nome:", n)
}

/*
comentário
let -> local
var -> global
const -> local / não pode ser alterada
 */

const PI = 3.1459
console.log(5, PI)

/*
só existe um tipo numérico : number, tanto para int como para inteiros ou racionais.
também existe o NaN, quando não é numérico
o Infinity é um valor numérico
 */

let poema = `
O poeta é um fingidor
...
A dor que deveras sente.
`

/*
a crase permite várias linhas
 */
console.log(poema)

let mensagem = `

<p>
    Olá ${nome}
</p>
`
console.log(mensagem, typeof mensagem)

/*
undefined -> ainda não recebeu nenhum valor.
null -> é um objeto do tipo nulo.
 */