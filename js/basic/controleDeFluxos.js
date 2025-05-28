// Controle de Fluxos //

//Sendo um cliente correntista do banco
//Posso sacar dinheiro em caixas eletronicos
//Para poder comprar em lugares que não aceitam o cartão de débito ou crédito


//Cenario 1: Saque com Sucesso
// Dado que meu saldo é 1000 reais
// Quando faço um saque de 500 reais
// Então o valor do saque deve ser reduzido do meu saldo

//Cenario 2: Saque com valor superior ao saldo
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 1001 reais
// Então não deve reduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo

//Cenario 3: Saque com valor máximo
// Dado que meu saldo é de 1000 reais
// E o valor máximo por operação é de 700 reais
// Quando faço um saque no valor de 701 reais
// Então não deve ser possivel realizar o saque
// E deve mostrar uma mensagem de alerta informando que o valor de saque é superior ao permitido

var saldo = 1000

function saque(valor) {

    if (valor > saldo){
        console.log('Valor do saque superior ao saldo')
    } else if (valor > 700) {
        console.log('Valor superior ao permitido')
    } else {
        saldo = saldo - valor
    }
 
}

saque(700)
console.log('Seu saldo:', saldo)