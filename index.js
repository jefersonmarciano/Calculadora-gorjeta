function formatarDinheiro(valor) {
    valor = Math.ceil(valor * 100) / 100
    valor = valor.toFixed(2)
    return '$ ' + valor 
} 

function formatarDivisao(valor) {
    if (valor == 1) return valor + ' Pessoa'
    return valor + ' Pessoas'
}


function update() {
    let conta = Number(document.getElementById('suaConta').value)
    let porcentGorjeta = document.getElementById('gorjetaInput').value
    let divisao = document.getElementById('divisaoInput').value

    let valorGorjeta  = conta * (porcentGorjeta / 100)
    let contaTotal  = conta + valorGorjeta 
    let valorPorPessoa = conta / divisao

    document.getElementById('porcentGorjeta').innerHTML = porcentGorjeta + ' %'
    document.getElementById('valorGorjeta').innerHTML = formatarDinheiro(valorGorjeta )
    document.getElementById('totalComGorjeta').innerHTML = formatarDinheiro(contaTotal )
    document.getElementById('valorDivisao').innerHTML = formatarDivisao(divisao)
    document.getElementById('valorPorPessoa').innerHTML = formatarDinheiro(contaTotal  / divisao)
    document.getElementById('gorjetaPessoa').innerHTML = (valorGorjeta / divisao).toFixed(2)
}