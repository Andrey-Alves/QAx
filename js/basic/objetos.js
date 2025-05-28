// Objetos //

//atribuindo dados a um mesmo objeto
var yoda = {
    nome: 'Mestre youda',
    idade: 26,
    jedi: false,
//Invocando função
    mostraIdade: function() {
        console.log(`A idade do ${this.nome} é ${this.idade} anos`) //interpolação de string use ``crases
    }
}
console.log(yoda)
yoda.mostraIdade()


//Atribuindo dados a um mesmo objeto
// yoda.nome = 'Meste Yoda'
// yoda.idade = 10
// yoda.jedi = true
// yoda.teste = 'aloou'

// console.log(yoda)