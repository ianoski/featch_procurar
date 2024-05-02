let resposta = document.getElementById('resposta')
let consultar = document.getElementById('consultar')

consultar.addEventListener('click', ()=>{
    let endereço = document.getElementById('endereço').value

    fetch('https://viacep.com.br/ws/'+endereço+'/json/')
    .then(resposta => resposta.json())
    .then(dados => {
        console.log(dados)
        resposta.innerHTML = 'CEP: ' + dados.cep + '<br>'
        resposta.innerHTML += 'LOCALIDADE: ' + dados.localidade + '<br>'
        resposta.innerHTML += 'LOGRADOURO: ' + dados.logradouro + '<br>'
        resposta.innerHTML += 'BAIRRO: ' + dados.bairro + '<br>'
        resposta.innerHTML += 'ESTADO: ' + dados.uf + '<br>'

        resposta.style.fontSize = '1.4rem'
        resposta.style.fontWeight = 'bold'

    })
    .catch((err)=>{
        console.error("Erro de busca de dados", err)


    })
})