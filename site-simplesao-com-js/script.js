let hour = window.document.querySelector('#hour')
let img = window.document.querySelector('#img')
let mode = window.document.querySelector('#mode')
let manual = window.document.querySelector('#manual')
let btnGo = window.document.querySelector('#go')



mode.addEventListener('click', modeChange)
mode.addEventListener('mouseover', modeBtnHover)
mode.addEventListener('mouseout', modeButtonOut)
btnGo.addEventListener('click', manualBtnChange)
addEventListener('DOMContentLoaded', () => {
    autoChange(); // Para configurar o elemento no início de acordo com o modo
});

const t = new Date()
const pcTime = t.getHours()
const milisUntilNextHour = (60 - t.getMinutes()) * 60 * 1000

setInterval(autoChange, milisUntilNextHour)

function autoChange(time=0) {
    if (mode.value === 'manual') {
        time = pcTime
    }

    if (time >= 0 && time <= 6) {
        bgcolor = 'rgb(33, 44, 63)'
        if (time === 0) {
            hour.innerHTML = `<p>Agora é <strong>Meia-Noite!</strong>!</p>`
        } else {
            hour.innerHTML = `<p>Agora são ${time} horas da <strong>Madrugada</strong>!</p>`
        }
        img.innerHTML = '<img src="../../imgs/png/mydawn.png" alt="madrugada">'
    }else if (time > 6 && time < 13) {
        bgcolor = 'rgb(210, 175, 136)'
        hour.innerHTML = `Agora são ${time} horas da <strong>Manhã</strong>!</p>`
        img.innerHTML = '<img src="../../imgs/png/mymorning.png" alt="manhã">'
    } else if (time >= 13 && time <= 17) {
        bgcolor = 'rgb(255, 153, 102)'
        hour.innerHTML = `Agora são ${time} horas da <strong>Tarde</strong>!</p>`
        img.innerHTML = '<img src="../../imgs/png/myevening.png" alt="tarde">'
    } else if (time >= 18 && time <= 19) {
        bgcolor = 'rgb(255, 153, 102)'
        hour.innerHTML = `Agora são ${time} horas do <strong>Anoitecer</strong>!</p>`
        img.innerHTML = '<img src="../../imgs/png/mydusk.png" alt="anoitecer">'
    } else {
        bgcolor = 'rgb(50, 50, 112)'
        hour.innerHTML = `Agora são ${time} horas da <strong>Noite</strong>`
        img.innerHTML = '<img src="../../imgs/png/mynight.png" alt="noite">'
    }
    document.body.style.backgroundColor = bgcolor
}

function manualBtnChange() {
    let time = 0
    switch (manual.value) {
        case 'dawn': 
            time = 2
            break
        case 'morning':
            time = 8
            break
        case 'evening':
            time = 14
            break
        case 'dusk':
            time = 18
            break
        case 'night':
            time = 23
            break
    }
    autoChange(time)
    modeBtnHover()
}


function modeChange() {
    if (mode.value === 'manual') {
    mode.value = 'auto'
    manual.classList.add('active')
    btnGo.classList.add('active')
    hour.classList.add('removed')
    manual.style.backgroundColor = bgcolor
    btnGo.style.backgroundColor = bgcolor
    } else {
        mode.value = 'manual'
        manual.classList.remove('active')
        btnGo.classList.remove('active')
        hour.classList.remove('removed')
        autoChange()
    }
}

function modeBtnHover() {
    let style = mode.style
    style.color = bgcolor
    style.backgroundColor = 'white'
}

function modeButtonOut() {
    let style = mode.style
    style.color = 'white'
    style.backgroundColor = bgcolor
}

