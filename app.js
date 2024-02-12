listaDeNumerosSorteados = [];
let numeroLimite =3;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    /*Na linha 10, dentro do metodo speak é o que nós querermos dizer,
     o 1º parametro que vamos ter que segir é o texto que vamos falar como por exemplo 
     o que está na linha 16, depois o 2º parametro qual o idioma que estamos a usar... */
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido= parseInt(Math.random() * numeroLimite + 1);
    //Agora quero verificar se na minha lista eu já tenho esse numero escolhido?
    //O includes vai verificar se o elemento está na lista se estiver é verdadeiro
    let qtDeElementosNaLista= listaDeNumerosSorteados.length;
//Se eu já sei a qt de elementos que essa lista tem eu irei fazer uma verificação para ver se já atinjimos o limite maximo 
    if(qtDeElementosNaLista == numeroLimite){
//irei limpar a minha lista:
listaDeNumerosSorteados=[]; 
//desta forma iremos ter um sorteio de 1 a 10, não vamos deixar os numeros que ja foram sorteados aparecerem a não ser que tds os numeros já tenham sorteados 
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();

    } else{//se o numero nao estiver na lista irei querer retornar o numero que foi escolhido
        //precisamos de inserir aquele numero que foi sorteado na lista para assim conseguir fazer aquela verificaçao
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}




//Adicionando novos elementos

/*Para adicionar um elemento ao final de um array, utiliza-se o metodo push */


/*

let frutas = ["Maça", "Uva", "Laranja"];

frutas.push("Morango");
console.log(frutas);


let listaGenerica=[];

let linguagensDeProgramacao = ["javaScript", "C","C++", "Kotlin", "Python"];

linguagensDeProgramacao.push("Java", "Ruby", "GoLang");


console.log(linguagensDeProgramacao[2]);


*/



