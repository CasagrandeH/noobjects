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
    autoChange()
})

const t = new Date()
const roTime = t.getUTCHours() - 4
const milisUntilNextHour = (60 - t.getUTCMinutes()) * 60 * 1000

setInterval(autoChange, milisUntilNextHour)

function autoChange(time=0) {
    if (mode.value === 'manual') {
        time = roTime
    }

    if (time >= 0 && time <= 6) {
        bgcolor = 'rgb(33, 33, 33)'
        if (time === 0) {
            hour.innerHTML = `<p>Agora é <strong>Meia-Noite!</strong>!</p>`
        } else {
            hour.innerHTML = `<p>Agora são ${time} horas da <strong>Madrugada</strong>!</p>`
        }
        img.innerHTML = '<img src="../png/mydawn.png" alt="madrugada">'
    }else if (time > 6 && time < 13) {
        bgcolor = 'rgb(210, 175, 136)'
        hour.innerHTML = `Agora são ${time} horas da <strong>Manhã</strong>!</p>`
        img.innerHTML = '<img src="../png/mymorning.png" alt="manhã">'
    } else if (time >= 13 && time <= 17) {
        bgcolor = 'rgb(175, 66, 50)'
        hour.innerHTML = `Agora são ${time} horas da <strong>Tarde</strong>!</p>`
        img.innerHTML = '<img src="../png/myevening.png" alt="tarde">'
    } else if (time >= 18 && time <= 19) {
        bgcolor = 'rgb(50, 50, 112)'
        hour.innerHTML = `Agora são ${time} horas do <strong>Anoitecer</strong>!</p>`
        img.innerHTML = '<img src="../png/mydusk.png" alt="anoitecer">'
    } else {
        bgcolor = 'rgb(50, 47, 71)'
        hour.innerHTML = `Agora são ${time} horas da <strong>Noite</strong>`
        img.innerHTML = '<img src="../png/mynight.png" alt="noite">'
    }
    document.body.style.backgroundColor = bgcolor
}

function manualBtnChange() {
    let key = manual.value
    let time = {'dawn': 1, 'morning': 8, 'evening': 14, 'dusk': 18, 'night': 20}
    autoChange(time[key])
    modeButtonOut()
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
    mode.style.color = bgcolor
    mode.style.backgroundColor = 'white'
}

function modeButtonOut() {
    mode.style.color = 'white'
    mode.style.backgroundColor = manual.style.backgroundColor = btnGo.style.backgroundColor = bgcolor
}

