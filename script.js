
let id = JSON.parse(sessionStorage.getItem('logado')|| '[]')
let users = JSON.parse(localStorage.getItem('users') || '[]')
console.log(`id usuário: ${id}`);
if (sessionStorage.getItem('logado') == null) {
    alert('Você não está logado')
    location.replace('login.html')
}
let recadoid
let fundo
let recadoaberto = -1
let recados = users[id].recados 
let completados = users[id].completados
let lixeira = users[id].lixeira

document.addEventListener('DOMContentLoaded', () => {
    console.log(users);
    fundo = JSON.parse(localStorage.getItem('fundo'))
    if (fundo == null) {
        fundo = 0
    }
    


    


    console.log(`fundo é ${fundo}`);
    reloadrecados()
    trocarfotofundo(fundo)
    });


    document.querySelector('#attbutton').addEventListener('click', () => {
        const title = document.querySelector('#titulopainel')
        const desc = document.querySelector('#descpainel')
     recados[recadoaberto] = {
         titulo: title.value,
         desc: desc.value,
         foto: recados[recadoaberto].foto
     }
     localStorage.setItem('users', JSON.stringify(users))
     fecharpainel()
     reloadrecados()
    })
    
    document.querySelector('#apagarbutton').addEventListener('click', () => {
      const ver =  confirm(`Deseja apagar o recado ${users[id].recados[recadoaberto].titulo}?`)
        if(ver){
            document.querySelector('#containerrecados').removeChild(document.getElementById(`${recadoaberto}`))
            users[id].recados = recados.filter((obj, i) => i!=recadoaberto)
            localStorage.setItem('users', JSON.stringify(users))
            fecharpainel()
        }
    })   

const form = document.querySelector('#formcadastro')

form.addEventListener('submit', cadastrarrecado)

function reloadrecados(){
    document.querySelector('#containerrecados').innerHTML=""
    recados.forEach((obj, id) => {
        adicionarrecado(id)
    });
}

function cadastrarrecado(e){
    e.preventDefault()

    n = Math.floor(Math.random() * 6 + 1)
    let srcfoto
    switch (n){
        case n=1:
            srcfoto='https://i.imgur.com/LYXDY4M.png'
            break
        case n=2:
            srcfoto='https://i.imgur.com/pMaqXgB.png'
            break 
        case n=3:
            srcfoto='https://i.imgur.com/LVRNQow.png'
            break
        case n=4:
            srcfoto='https://i.imgur.com/DsXuK04.png'
            break 
        case n=5:
            srcfoto='https://i.imgur.com/hr3zHX1.png'
            break
        case n=6:
            srcfoto='https://i.imgur.com/JQ36o3e.png'
            break                
    }

    const novorecado = {
        titulo: document.querySelector('#titulo').value,
        desc: document.querySelector('#desc').value,
        foto: srcfoto
    }
    console.log(novorecado);
    recados.push(novorecado)
    localStorage.setItem('users', JSON.stringify(users))
    recadoid = recados.length-1
    adicionarrecado(recadoid)
    fecharcadastro()
}


function adicionarrecado(recadoid){
    const recado = document.createElement('div')
    const title = document.createElement('div')
    const desc = document.createElement('div')
    recado.classList.add('recado')
    title.classList.add('recadotitle')
    desc.classList.add('recadocontent')
    const image = document.createElement('img')
    image.src=`${recados[recadoid].foto}`
    title.innerText=`${recados[recadoid].titulo}`
    desc.innerText=`${recados[recadoid].desc}`
    recado.appendChild(title)
    recado.appendChild(desc)
    recado.appendChild(image)
    recado.setAttribute('id', recadoid)
    recado.onclick=function(){
        abrirpainel(recado.id)
        console.log(recado.id);
    }
    
    document.querySelector('#containerrecados').appendChild(recado)
}




// funcoes modal

function abrircadastro(){
    document.querySelector('#cadastrorecado').classList.remove('dn')
    
}

function fecharcadastro(){
    document.querySelector('#cadastrorecado').classList.add('dn')
}

function abrirpainel(id){
    const foto = recados[id].foto
    const painel = document.querySelector('#painel')
    painel.classList.remove('fundoamarelo', 'fundorosa', 'fundoverde')
    if (foto == 'https://i.imgur.com/DsXuK04.png' || foto == 'https://i.imgur.com/hr3zHX1.png'){painel.classList.add('fundorosa')}
    if (foto == 'https://i.imgur.com/LYXDY4M.png' || foto == 'https://i.imgur.com/pMaqXgB.png'){painel.classList.add('fundoverde')} 
    else{painel.classList.add('fundoamarelo')}
    console.log(foto);
    painel.showModal()
    
    const title = document.querySelector('#titulopainel')
    title.value=recados[id].titulo
    const desc = document.querySelector('#descpainel')
    desc.value=recados[id].desc
    recadoaberto = id
}

function fecharpainel(){
    const painel = document.querySelector('#painel')
    painel.close()
}

function encerrarsessão(){
    sessionStorage.removeItem('logado')
    window.location.href="login.html"
}

function trocarfundo(){
    fundo++
    if (fundo == 7) {
        fundo = 0
    }
    localStorage.setItem('fundo', JSON.stringify(fundo))
    console.log(fundo);
    trocarfotofundo(fundo)
}

function trocarfotofundo(nmr){
    switch (nmr){
        case nmr=0:
            document.querySelector('#background').style.backgroundImage="url(./assets/fundo0.jpg)"
            break
            case nmr=1:
            document.querySelector('#background').style.backgroundImage="url(./assets/fundo1.jpg)"
            break
            case nmr=2:
            document.querySelector('#background').style.backgroundImage="url(./assets/fundo2.webp)"
            break
            case nmr=3:
            document.querySelector('#background').style.backgroundImage="url(./assets/fundo3.webp)"
            break
            case nmr=4:
            document.querySelector('#background').style.backgroundImage="url(./assets/fundo4.jpg)"
            break
            case nmr=5:
            document.querySelector('#background').style.backgroundImage="url(./assets/fundo5.webp)"
            break
            case nmr=6:
            document.querySelector('#background').style.backgroundImage="url(./assets/fundo6.jpg)"
            break
    }
}