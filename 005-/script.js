
function calculo() {
    let n1 = window.document.getElementById('inum1')
    let valor1 = Number (n1.value) //transforma a string em number 
    let res = window.document.getElementById('res') 

    res.innerHTML = `<p>O dobro de ${valor1} é : ${valor1 * 2} e a metade é ${valor1 / 2}!</p>`
}
