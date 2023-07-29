let btnGo = document.body.querySelector('#btnGo')
let cont = document.body.querySelector('#cont')

btnGo.addEventListener('click', function () {
  let start = document.body.querySelector('#start').value
  let end = document.body.querySelector('#end').value
  let step = document.body.querySelector('#step').value

  try {
    const results = DoIt(Number(start), Number(end), Number(step))
    cont.innerHTML = "" // Limpa o conteúdo anterior
    for (result of results) {
      const messageElement = document.createElement('span')
      messageElement.textContent = `${result} → `
      cont.appendChild(messageElement)
    }
  } catch (error) {
    console.error(error.message)
  }
})

function DoIt(begin, final, step) {
  if (step === 0) {
    throw new Error('O passo não pode ser zero!')
  }

  const results = []
  let currentValue = begin

  while ((step > 0 && currentValue <= final) || (step < 0 && currentValue >= final)) {
    results.push(currentValue);
    currentValue += step;
  }

  return results;
}
