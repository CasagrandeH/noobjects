function count() {
  let start = document.querySelector('#start')
  let end = document.querySelector('#end')
  let step = document.querySelector('#step')
  let res = document.querySelector('#res')

  if (start.value == 0 || end.value == 0 || step. value == 0) {
    res.innerHTML = '<p>Impossivel Contar!</p>'
  } else {
    res.innerHTML = '<p>Contando...</p>'
    let str = Number(start.value)
    let ed = Number(end.value)
    let stp = Number(step.value)

    if (str < ed) {
      for (c = str; c <= ed; c += stp) {
        res.innerHTML += `<span>${c}</span>`
        if (c % 10 === 0) {
          res.innerHTML += '<br>'
        }
        res.innerHTML += `<span> &#x1F449; </span>`
      } 
    }else {
      for (c = str; c >= ed; c-= stp) {
        res.innerHTML += `<span>${c}</span>`
        if (c % 10 === 0 && c !== 0) {
          res.innerHTML += '<br>'
        }
        res.innerHTML += `<span> &#x1F449; </span>`
      }
    }
    let spans = document.getElementsByTagName('span')
    let last = spans[spans.length - 1]
    last.innerHTML = ''
    last.innerHTML = ' &#x1F3C1;'
    }
}
let btnGo = document.querySelector('#btnGo')
btnGo.addEventListener('click', count)
