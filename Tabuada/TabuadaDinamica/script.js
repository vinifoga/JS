function calcular() {
    let num = document.getElementById('num')
    let max = document.getElementById('max')
    let res = document.getElementById('res')
    let tabRes = document.getElementById('tabRes')

    if ( num.value.length == 0 ){
        document.body.style.backgroundColor = 'red'
        window.alert('[ERRO] Faltam Dados de Número')
        res.innerHTML = 'Impossível Gerar Tabuada'
    }else if(max.value.length == 0){
        document.body.style.backgroundColor = 'red'
        window.alert('[ERRO] Faltam Dados')
        res.innerHTML = 'Impossível Gerar Tabuada'
    }else{
        document.body.style.backgroundColor = 'rgb(81, 190, 117)'
        let n = Number(num.value)
        let c = 0
        let m = Number(max.value)
        while (c < (m+1)){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tabRes.appendChild(item)
            c++
        }
    }
    
}