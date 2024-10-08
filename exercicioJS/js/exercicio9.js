function haOnzeDigitos(cpf) {
    return cpf.toString().length === 11
}

function todosOsOnzeDigitosSaoNumeros(cpf) {
    for (let caractere of cpf.toString().split("")){
        try{
            parseInt(caractere)
        }catch(error){
            return false
        }
    }
    return true
}

function osOnzeNumerosSaoDiferentes(cpf) {
    let digitos = []
    for (let caractere of cpf.toString().split("")){
        if (digitos.indexOf(caractere) === -1){
            digitos.push(caractere)
        }else{
            return false
        }
    }
    return true
}

function oPrimeiroDigitoVerificadorEhValido(cpf) {
    //---- edite aqui para a validação do exercício 9d
    return false
}

function oSegundoDigitoVerificadorEhValido(cpf) {
    //---- edite aqui para a validação do exercício 9e
    return false
}





//------------------- Não edite abaixo ----------------------------
function validarCPF(validacao, cpf) {
    switch (validacao) {
        case "onzeDigitos": return haOnzeDigitos(cpf)
        case "onzeSaoNumeros": return todosOsOnzeDigitosSaoNumeros(cpf) && validarCPF("onzeDigitos", cpf)
        case "naoSaoTodosIguais": return osOnzeNumerosSaoDiferentes(cpf) && validarCPF("onzeSaoNumeros", cpf)
        case "verificador10": return oPrimeiroDigitoVerificadorEhValido(cpf) && validarCPF("naoSaoTodosIguais", cpf)
        case "verificador11": return oSegundoDigitoVerificadorEhValido(cpf) && validarCPF("verificador10", cpf)

        default:
            console.error(validacao+" é um botão desconhecido...")
            return false
    }
}


function tratadorDeCliqueExercicio9(nomeDoBotao) {
    const cpf = document.getElementById("textCPF").value

    const validacao = (nomeDoBotao === "validade") ? "verificador11": nomeDoBotao
    const valido = validarCPF(validacao, cpf)
    const validoString = valido ? "valido": "inválido"
    const validadeMensagem = "O CPF informado ("+cpf+") é "+ validoString
    console.log(validadeMensagem)

    if (nomeDoBotao !== "validade") {
        let divResultado = document.getElementById(validacao);
        divResultado.textContent = validoString
        divResultado.setAttribute("class", valido ? "divValidadeValido": "divValidadeInvalido")
    } else {
        window.alert(validadeMensagem)
    }


}