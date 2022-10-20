let users = []
let logadoid = ""

const id = JSON.parse(sessionStorage.getItem('logado')|| '[]')
console.log(id);
 
const form = document.querySelector('#formcadastro')

document.addEventListener('DOMContentLoaded', () => {
    users = JSON.parse(localStorage.getItem('users') || '[]')
    logadoid = JSON.parse(sessionStorage.getItem('logado'))
    if(logadoid!=null){
        window.location.href="home.html"
    }
    });

form.addEventListener('submit', cadastrar);

function cadastrar(e){
    e.preventDefault()
    if (document.querySelector('#senhainput').value != document.querySelector('#senha2').value ) {
        alert('As senhas devem ser iguais.')
        return
    }
    const emails = []
    users.forEach(obj => {
        emails.push(obj.email)
    })
    
    const verificação = emails.some(obj => {
       return obj == document.querySelector('#emailinput').value
    })

    if(verificação){
        alert('Usuário já cadastrado')
        return
    }
    
    const newuser = {
        email: document.querySelector('#emailinput').value,
        senha: document.querySelector('#senhainput').value,
        recados: [],
        completados: [],
        lixeira: [],
    }

    
    console.log(newuser);
    users.push(newuser)

    const logado = users.length-1

    console.log(logado)
    
    window.location.href="home.html"
    localStorage.setItem('users', JSON.stringify(users))
    sessionStorage.setItem('logado', JSON.stringify(logado))
}
