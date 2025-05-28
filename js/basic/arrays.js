// Arrays //

var gaveteiro = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos']

gaveteiro.push('nomeDoObjeto') // Adicionar mais um objeto no arrays
gaveteiro.pop() //remove o ultimo obejeto adicionado no array
console.log(gaveteiro) //Para saber oque tem dentro do array
console.log(gaveteiro[2]) //para acessar um objeto especifico do arry

//Remover um objeto selecionado no array
gaveteiro = gaveteiro.filter(function(p){
    return p !== 'Gravatas'
})
console.log('array atual:', gaveteiro)