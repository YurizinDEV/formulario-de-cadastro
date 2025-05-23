
import './style.css'

const nome = document.querySelector<HTMLInputElement>('#nome')!
const email = document.querySelector<HTMLInputElement>('#email')!
const formulario = document.querySelector<HTMLFormElement>('#formulario')!

interface Pessoa {
  nome: string
  email: string
  data: Date
}
const pessoas: Pessoa[] = []

function limparFormulario() {
  formulario.reset()
  // nome.value = ''
  // email.value = ''
}

function sincronizar() {
  localStorage.setItem('pessoas', JSON.stringify(pessoas))
}

function imprimirPessoas() {
  const lista = document.querySelector<HTMLUListElement>('#lista')!
  lista.innerHTML = ''
  pessoas.forEach((pessoa) => {
    const li = document.createElement('li')
    li.textContent = `${pessoa.nome} - ${pessoa.email} - ${pessoa.data.toLocaleDateString()}`
    lista.appendChild(li)
  })
}


formulario.addEventListener('submit', (event) => {
  event.preventDefault()

  const pessoa: Pessoa = {
    nome: nome.value,
    email: email.value,
    data: new Date(),
  }

  pessoas.push(pessoa)

  sincronizar()
  imprimirPessoas()

  limparFormulario()
})

const pessoasSalvas = localStorage.getItem('pessoas')
if (pessoasSalvas) {
  const pessoasParseadas: Pessoa[] = JSON.parse(pessoasSalvas)
  pessoasParseadas.forEach((pessoa) => {
    pessoas.push(pessoa)
  })
  imprimirPessoas()
}
// const pessoasSalvas = localStorage.getItem('pessoas')

