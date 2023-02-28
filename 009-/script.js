

function calcular() {
    let velocidade = window.document.querySelector('input#ivelo')
    let res = window.document.querySelector('div#res')
    let total = Number (ivelo.value)
    
    if (total >= 60){
    res.innerHTML = `A velocidade que você esta é de ${total}km/h. E ultrapassou o limite de velocidade e foi multado. Diriga sempre com segurança!`
    
    } else {
    res.innerHTML = `A velocidade que você esta é de ${total} km/h. Parabèns, você esta dentro do limite de velocidade. Diriga sempre com segurança!`
    }
  
}

 