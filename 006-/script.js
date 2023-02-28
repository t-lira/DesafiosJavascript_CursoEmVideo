function somar() {
    let n1 = window.document.getElementById('inum1')
    let n2 = window.document.getElementById('inum2')
    let valor1 = Number (n1.value) //transforma a string em number
    let valor2 = Number (n2.value)
    let soma = valor1 + valor2
    let res = window.document.getElementById('res')
    res.innerHTML = `<p>O resultado da soma dos números que você escolheu é: <strong>${soma}</strong></p>`
}