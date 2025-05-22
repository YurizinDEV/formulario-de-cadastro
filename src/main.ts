import './style.css'

const nome = document.querySelector<HTMLInputElement>('#nome')!
const email = document.querySelector<HTMLInputElement>('#email')!
const formulario = document.querySelector<HTMLFormElement>('#formulario')!

formulario.addEventListener('submit', (event) => {
  event.preventDefault()
  console.log(`Nome enviado: ${nome.value}`)
  console.log(`Email enviado: ${email.value}`)
  limparFormulario()
})

function limparFormulario() {
  formulario.reset()
  // nome.value = ''
  // email.value = ''
}

