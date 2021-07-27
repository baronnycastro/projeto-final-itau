function encaminhar() {
    const nome = document.getElementById("nome").value
    const cpf = document.getElementById("cpf").value
    const logradouro = document.getElementById("logradouro").value
    const numero = document.getElementById("numero").value
    const telefone = document.getElementById("telefone").value

    if(nome != "" && cpf != "" && logradouro != "" && numero != "" && telefone != ""){
    window.location.href = "./resposta.html";
    }
    else {
        alert("Preencha os campos obrigatórios!")
    }
}
 

function buscaCep(){
    const cep = document.getElementById("cep");
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
    
    const logradouro = document.getElementById("logradouro");
    const bairro = document.getElementById("bairro");
    const localidade = document.getElementById("localidade");
    const uf = document.getElementById("uf");

   
    fetch(url, {method: 'GET'})
    .then(
        response => {
            response.json()
                .then(dado => {
                    logradouro.value = dado.logradouro;
                    bairro.value = dado.bairro;
                    localidade.value = dado.localidade;
                    uf.value = dado.uf;
                })
        })
        .catch(erro => {
            logradouro.value = "";
            bairro.value = "";
            localidade.value = "";
            uf.value = "";
            alert("CEP não localizado")
        })
}


