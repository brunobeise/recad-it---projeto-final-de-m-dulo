const id = JSON.parse(sessionStorage.getItem('logado')|| '[]')
console.log(id);

const form = document.querySelector('#login')

document.addEventListener('DOMContentLoaded', () => {
    users = JSON.parse(localStorage.getItem('users') || '[]')
    logadoid = JSON.parse(sessionStorage.getItem('logado'))
    console.log(users);
    console.log(logadoid);
    if(logadoid!=null){
        window.location.href="home.html"
    }
    });


form.addEventListener('submit', login)
 
function login(e){
    e.preventDefault()
    const email = document.querySelector('#emailinput').value
    const senha = document.querySelector('#senhainput').value

   
   const verificação =  users.some((obj, i)=>{
        return email == obj.email && senha == obj.senha
        
      })

    if(verificação){
        const emails = []
    users.forEach(obj => {
        emails.push(obj.email)
    })
    const id =emails.indexOf(email)


    
    sessionStorage.setItem('logado', JSON.stringify(id))
    console.log(id)
    
    window.location.href="home.html"
    
    }else{alert("Usuário ou senha inválidos.")}
}
