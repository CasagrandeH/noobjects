let numeral = document.querySelector('#numeral')
let submit = document.querySelector('#submit')
let res = document.querySelector('#res')

function tabuada() {
    let value = numeral.value
    if (isNaN(value) || value === '') {
        res.innerHTML = ''
        res.innerHTML = '<option value="#">Digite um Valor!</option>';
    } else {
        let n = Number(value)
        res.innerHTML = '<option value="#" disabled>Tabuada de 0 a 10!</option>'
        for (c = 0; c <= 10; c++) {
            let cont = n * c
            res.innerHTML += `<option value="#">${n} x ${c} = ${cont}</option>`
        }
    }
    
}

submit.addEventListener('click', tabuada)