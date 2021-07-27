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
