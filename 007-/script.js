function getresult(){

    let value1 = window.document.getElementById("inota1") 
    let value2 = window.document.getElementById("inota2") 

    let result1 = Number(inota1.value)//convertedo um string para number
    let result2 = Number(inota2.value)

    const approved = "Aprovado"
    const disapproved = "Reprovado"

    let showResult = (result1 + result2) / 2
    // se a media for maior que 6
    if (showResult >= 6){  //se a resporta for sim mostre 
        window.document.getElementById("inotaresult")
        inotaresult.innerHTML =  `<p>&#x1F449 Você foi  ${approved}, sua média foi de: ${showResult} </p>`
    } else {//caso contrario
        inotaresult.innerHTML =  `<p>&#x1F449 Você foi  ${disapproved}, sua média foi de: ${showResult}. A média necessaria para aprovação é 6.  </p>`
    }
 
}

