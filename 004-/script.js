function inicio() {
    let nome = window.prompt('Qual é o seu nome?')
    let res = window.document.getElementById('resultado')
  
    res.innerHTML = `<p>Olá, <strong>${nome}</strong>! É um grande prazer te conhecer! &#x1F596;`
}