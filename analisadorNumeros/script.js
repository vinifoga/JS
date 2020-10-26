let num = document.getElementById('num')
let valAdd = document.getElementById('valAdd')  
let res = document.getElementById('res')  
let matNum = []    

function isValid(n){
    if (n>=1 && n<=100){
        return true
    }else{
        return false
    }
}
function isMat(n){
    if (matNum.indexOf(n) != -1){
        return false
    }else{
        return true
    }
}
function add(){      
    let n = Number(num.value)  
    if (isValid(n) == false){
        alert('Numero Inválido')
    }else{
        if(isMat(n) == false){
            alert('Numero já está na Lista')
        }
        else{
            matNum.push(n)        
            item = document.createElement('option')
            item.text = `Valor Adicionado = ${n}`
            valAdd.appendChild(item)   
        }           
    }
    num.value = ""       
}
function finalizar(){
    if(matNum.length == 0){
        alert('Insira dados')
    }else{
        res.innerHTML = `Ao todo, temos ${matNum.length} numeros cadastrados<br>`
        maior = menor = matNum[0]
        soma = 0
        for(let n in matNum){
            if (parseInt(matNum[n],10) >= maior ){
                maior = matNum[n]
            }else if(parseInt(matNum[n],10) <= menor){
                menor = matNum[n]
            }
            soma += matNum[n]
        }
        media = soma / matNum.length
        res.innerHTML += `O maior numero é : ${maior}<br>O menor numero é : ${menor}<br>`
        res.innerHTML += `A soma de todos os valores é ${soma}<br> A média é ${media}`
        res.style.color = 'red'
        res.style.fontSize = '20pt'
    }
}