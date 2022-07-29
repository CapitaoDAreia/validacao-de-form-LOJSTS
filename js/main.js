const buttonSubmit = document.querySelector('.container-form > button[type="submit"]');

function verificaVazio(){
    let vazios = false;
    const form = document.querySelectorAll('.container-form > div > input');
    for(let campo of form){
        if(campo.value === ""){
            campo.nextElementSibling.classList.add('error')
            vazios = true;
            return vazios;
        }else{
            campo.nextElementSibling.classList.remove('error')
            vazios = false;
        }
    }
    return vazios;
}

function verificaUsuario(){
    const campoUsuario = document.querySelector('#usuarioInput');
    let re = /^[a-zA-Z\-\ \s\ 0-9]+$/;
    if(!re.test(campoUsuario.value)){
        campoUsuario.nextElementSibling.innerText = "O campo USUARIO deve conter letras ou números."
        campoUsuario.nextElementSibling.classList.add('error')
        return false;
    }else{
        campoUsuario.nextElementSibling.classList.remove('error')
        return true;
    }
}

function verificaSenha(){
    const campoSenha = document.querySelector('#senhaInput');
    const campoRepeteSenha = document.querySelector('#rSenhaInput');
    if(campoSenha.value.length < 6 || campoSenha.value.length > 12){
        campoRepeteSenha.nextElementSibling.innerText = "A senha deve ter entre 6 e 12 caracteres."
        campoRepeteSenha.nextElementSibling.classList.add('error')
        return false;
    }else if(campoSenha.value !== campoRepeteSenha.value ){
        campoRepeteSenha.nextElementSibling.innerText = "As senhas não coincidem."
        campoRepeteSenha.nextElementSibling.classList.add('error')
        return false;
    }else{
        campoRepeteSenha.nextElementSibling.classList.remove('error')
        return true;
    }
}

buttonSubmit.addEventListener('click', (e)=>{
    e.preventDefault()
    if(verificaVazio() !== false) return;
    if(verificaCPF() === false) return;
    if(verificaUsuario() !== true) return;
    if(verificaSenha() !== true) return;
    const form1 = document.querySelector('#form1');
    form1.submit()
})
