class CPF {
    constructor(cpf){
        this.cpf = cpf;
    }
    retornaDigito(valor){
        const valorCPF = Array.from(valor);
        const filterValorCPF = valorCPF.filter((elemento)=>{
            return elemento !== '.' && elemento !== '-';
        })
        if(filterValorCPF.length == 9) valorCPF.splice(-2, 2)
        if(filterValorCPF.length == 10) valorCPF.splice(-1, 1)
        let regresso = filterValorCPF.length+1;
        const somaDosElementos = filterValorCPF.reduce((ac, val)=>{
            ac += (regresso * Number(val))
            regresso--;
            return ac;
        }, 0)
        let resultado =  11 - (somaDosElementos % 11);
        return resultado > 9 ? 0 : resultado;
    }
    verificaSequencia(){
        const limpaCpf = this.cpf.replace(/\D+/g, '');
        return limpaCpf.charAt(0).repeat(limpaCpf.length) === limpaCpf;
    }
    verificaValidade(){
        if(this.verificaSequencia()) return false; //Filtra sequencias
        
        const cpf = this.cpf;
        if(cpf.length < 14) return false; //Filtra quantidade de caracteres

        const primeiroDigito = String(this.retornaDigito(cpf.slice(0, cpf.length-2)));
        const segundoDigito =  String(this.retornaDigito(cpf.slice(0, cpf.length-1)));
        if(cpf.slice(-2) === primeiroDigito+segundoDigito) return true; //Compara os dígitos e dá o resultado

        return false;
    }
}
function verificaCPF(){
    const campoCPF = document.querySelector('#cpfInput');
    const novoCPF = new CPF(campoCPF.value);
    if(novoCPF.verificaValidade() === false){
        campoCPF.nextElementSibling.innerText = "CPF inválido, revise os critérios e número.";
        campoCPF.nextElementSibling.classList.add('error')
        return false;
    }
    return true;
}
