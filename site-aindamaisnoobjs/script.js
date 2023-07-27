let data = new Date()
let year = data.getFullYear()


let res = window.document.querySelector('#res')
let sex = window.document.getElementsByName('sex')
let btn = window.document.querySelector('#btn')



function confirm() {
    let birth = window.document.querySelector('#txtano').value
    let age = year - birth

    
    
    if (sex[0].checked) {
        gender = 'Homem'
    } else if (sex[1].checked) {
        gender = 'Mulher'
    } else {
        gender = 'LGBTQ'
    }

    if (age > year || age < 0 || age > 120) {
        res.innerHTML = 'Preencha os campos acima para ver o resultado!'
        window.alert(`[ERRO] Nascimento inválido!`)
        
    } else {
        res.innerHTML = `<p>Você ser ${gender} de ${age} anos!</p><br><img src="../../imgs/png/the${gender}.png" alt="${gender}">`
    }
    
}

btn.addEventListener('click', confirm)