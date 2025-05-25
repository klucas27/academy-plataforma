
let resp_question = ""

async function carregarPergunta() {
    const resposta = await fetch('http://localhost:3000/api');
    const dados = await resposta.json();

    console.log(dados)

    document.getElementById('exercises-text').innerText = dados.codigo;

    const alternativas = dados.alternativas;

    document.getElementById("resp-01").innerText = alternativas.a
    document.getElementById("resp-02").innerText = alternativas.b
    document.getElementById("resp-03").innerText = alternativas.c
    document.getElementById("resp-04").innerText = alternativas.d

    resp_question = dados.respostaCorreta

    console.log(resp_question)

    //   console.log(alternativas)

}

function verResposta(resp){

    if (resp == resp_question){
        console.log("Acertou!")
        carregarPergunta()
    }
    else {
        console.log("Errou!")
    }
}