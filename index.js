let valor1 = 10;
let valor2 = 20;
let valor3 = "3";

function somarValores(primeiro, segundo){
    console.log(primeiro + segundo);
}

//chama função somarValores, e linha 12 e 13 concatena por ser String.
somarValores(9, valor1);
somarValores(valor1, valor2);
somarValores(valor2, valor3);
somarValores("100", valor3);

let vetor = [1,3,5,7,9,11,13];

let numero = vetor[1] + vetor[3];
//Soma vetores = 10

console.log(numero > 9);
//true numero = 10
console.log("--------");
console.log((vetor[6] - numero) == 5 || true);
//independente do primeiro resultado sempre dará true
console.log("--------");
console.log(true == "true");
//comparação boolean com string = false
console.log("--------");
console.log(true === "true");
//comparação boolean com string = false

let objeto = {
    objeto2: {
        vetor: [1,2, {valor: 55}]
    }
};

console.log(objeto["objeto2"].vetor.valor);

console.log(objeto.objeto2.vetor.valor);

console.log(objeto["objeto2"]["vetor"][2].valor);

//console.log(objeto.objeto2.vetor[3].valor); --> posição 3 não existe no vetor

function revisao(valor1, valor2, valor3){

    let outroValor = valor1 + 2;

    let maisUm = valor2 + valor3;

    let vetor = [valor3, valor1, maisUm, valor2, outroValor];

    console.log(`A soma de ${vetor[2]} está certa? Ou ${vetor[1] + 2} = ${vetor[4]} parece melhor?`);    
    //A soma de 5zero está certa? Ou 4 = 4 parece melhor?
}

revisao(2, "5", "zero");

let funcaoDeSomar = function(valor1, valor2){
    // Atribua a soma das variaveis valor1 e valor2 ao resultado
    let resultado = valor1 + valor2;
    console.log(resultado);
    return resultado;
};

funcaoDeSomar(1,3);
funcaoDeSomar(2,-5);

let simbolo1 = "R$";
let simbolo2 = "$";
let simbolo3 = "£";

//escreva a função que receberá um símbolo de moeda como parametro
//e retornará o nome dela caso conheça aquele símbolo, senão 
//retornar moeda não encontrada.

function moeda(simbolo) {
    if(simbolo === simbolo1) {
        console.log("Real");
    } else if (simbolo === simbolo2) {
        console.log("Dólar");
    } else if(simbolo === simbolo3) {
        console.log("Libra");
    } else {
        console.log("Moeda não encontrada");
    }
}

function moeda2(simbolo) {
    switch(simbolo) {

        case "R$":
            console.log("Real");
            break;

        case "$":
            console.log("Dólar");
            break;

        case "£":
            console.log("Libra");
            break;

        default:
            console.log("Moeda não encontrada");
            break;
    }
}

let objServidor = {
    acesso: true,
    login: "mundojs",
};

let objServidor2 = {
    erro: "Erro ao conectar ao servidor",
};

//Caso o objeto não contenha erro, confira se o acesso é permitido
//se for permitido exiba "login: mundojs"
//senão escreva "acesso negado"
//caso de erro, exiba a mensagem de erro

function conexaoLogin(respostaDoServidor) {

    if(respostaDoServidor.erro == null){
        if(respostaDoServidor.acesso){
            console.log(`login: ${respostaDoServidor.login}`);
        } else {
            console.log("acesso negado!");
        }
    }else{
        console.log(respostaDoServidor.erro);
    }
}

function testaTamanho(valor) {

    if(valor > 15){
        return "maior";
    }else if(valor < 3){
        return "menor";
    }else if(valor >= 3 && valor <= 15){
        return "na faixa";
    }else{
        console.log("somente números");
    }
}

// Este objeto não precisa ser mexido
let carro = {
    rodas: 4,
    portas: 2,
    cor: "cinza",
    ano: 2012,
    estado: "novo"
};


function mudarPropriedade(nomePropriedade, novoValor){
    switch(nomePropriedade){
        // O case rodas é um exemplo para as próximas partes
        case "rodas":
            if(novoValor > 1){
                carro.rodas = novoValor;    
            }
            else{
                return "Minimo de rodas precisa ser 2";
            }
            break;
        case "portas":
            // Para alterar as portas, é necessário que o
            // novo valor seja maior que 0
            // senão deve retornar a string "Minimo de portas precisa ser 1"
            if(novoValor > 0){
                carro.portas = novoValor;    
            }else{
                return "Minimo de portas precisa ser 1";
            }
            break;
        case "cor":
            // para alterar a cor, novo valor pode ser igual a cinza ou preto ou vermelho
            // se for diferente, retornar "Cor invalida"
            if(novoValor == "cinza" || novoValor === "preto" || novoValor === "vermelho"){
            carro.cor = novoValor;
            }else{
                return "Cor invalida";
            }
            break;
        // criar um case para o "ano"
        // alterar o ano do carro para o ano informado
        // se o ano for igual a 2019, alterar o estado para "novo" 
        // senao alterar o estado para "usado"
        case "ano":
            carro.ano = novoValor;
            if(novoValor == 2019){
                carro.estado = "novo";
            }else{
                carro.estado = "usado";
            }
            break;
        default:
            // retornar a fraase "Propriedade invalida";
            return "Propriedade invalida";
    }
    // retornar a frase Alteracao concluida somente se foi possivel
    // alterar um dado do objeto.
    return "Alteração concluida";
}

let alunos = [
    {
        nome: "Maria",
        nota: 8
    },
    {
        nome: "Pedro",
        nota: 4
    },
    {
        nome: "João",
        nota: 10
    },
    {
        nome: "Paulo",
        nota: 9
    },
    {
        nome: "Ana",
        nota: 7
    },
    {
        nome: "Bianca",
        nota: 6
    },
]

//escreva um loop que percorre o vetor acima e informa se o aluno passou
//condição para passar: nota maior que 7.


for(let aluno of alunos){
    if(aluno.nota >= 7){
        console.log(aluno.nome + " passou!");
    }else{
        //printar lista de forma correta abaixo:
        console.log(`${aluno.nome} : repetiu!`);
    }
}


//Exemplo do professor com FOR abaixo:

    for (let i=0; i<alunos.lenght; i++){
        if(alunos[i].nota>7){
            console.log(`${alunos[i].nome} : passou`);
        }
    }


//escreva uma função que receberá um valor n e percorrerá um loop
//para exibir no console o valor na posição N da sequencia de fibonacci
//fibonacci: 0,1,1,2,3,5,8...
//o numero é igual a soma dos 2 anteriores
//exemplo fibonacci(0) -> 0
//exemplo fibonacci(6) -> 8


function fibonacci(n){

    if(n < 2){
        return n;
    }

    let anterior = 1;
    let penultimo = 0;

    for(let i=2; i<= n; i++){
        if(i == n){
            return penultimo + anterior;
        }

        let temp = penultimo;
        penultimo = anterior;
        anterior = temp + penultimo;
    }
}


/*
    let posicao = 2;
    let anterior = 1;
    let penultimo = 0;

    while(true){
        if(posicao == n){
            return penultimo + anterior;
        }

        let temp = penultimo;
        penultimo = anterior;
        anterior = temp + penultimo;
        posicao++;
    }
}*/

/*
A função abaixo receberá 2 parâmetros, um vetor com apenas valores numéricos e um número.
Faça com que ela multiplique cada item do vetor pelo segundo parâmetro apenas se o item do vetor
for maior que 5. Apos isso ele deve retornar a um novo vetor..
*/

function calcularVetor(vetor, numero){
    
    for(let i=0; i < vetor.length; i++){
        if(vetor[i] > 5){
            vetor[i] = vetor[i] * numero;
        }
    }

    return vetor;
}


function calcularVetor2(vetor, numero){

    let resultado = [];
    for(let item of vetor){
        if(item > 5){
            //resultado = [] -> length = 0
            resultado[resultado.length] = item * numero;
        }else{
            resultado[resultado.length] = item;
        }
    }
}


function somarSubVetores(vetor){

    let resultado = [];

    for(let indice = 0; indice < vetor.length; indice++){
        let subVetor = vetor[indice];
        let soma = 0;

        for(let subIndice = 0; subIndice < subVetor.length; subIndice++){
           soma = soma + subVetor[subIndice];
        }

        resultado[indice] = soma;
    }
    return resultado;
}

//Crie uma função chamada testeFinal que:
//Receberá uma string e um número como parâmetros
//Testará se a String é igual as seguintes palavras e executará um código para o descrito em cada caso.
//1- "mundojs":Exibirá "MundoJS" no console e retornará o parametro número.
//2- "soma":Retornará o resultado da soma da metade do parâmetro número com o quadrado dele mesmo.
//3- "vetor":Criará e retornará um vetor com 5 elementos onde cada elemento é igual ao parâmetro número mais o dobro do índice do vetor:
//Ex: número = 3
//Primeiro item igual a 3+0*2
//Segundo item igual a 3+1*2
//Assim por diante...Retornará [3,5,7,9,11]
//4- "booleano":Faça o mesmo vetor anterior e retorne true(o valor booleano, não uma string) se a soma dos elementos deste vetor for maior que 35, do contrario, exibe false.
//Caso o parâmetro String seja diferente das opções acima, retornará -1.

function testeFinal(string, numero){

    if(string == "mundojs"){
        console.log("MundoJS");
        return numero;
    }else if(string == "soma"){
        let soma = (numero/2) + (numero * numero);
        return soma;
    }else if(string == "vetor"){
        let vetor = [];
        for(let i=0; i < 5; i++){
            let soma = numero + (i * 2);
            vetor[i] = soma;
        }
        return vetor;
    }else if(string == "booleano"){

        let vetor = [];
        let soma = 0;

        for(let i=0; i < 5; i++){
            let elemento = numero + (i * 2);
            vetor[i] = elemento;

            soma += vetor[i];
        }
        return soma > 35;
    }else{
        return -1;
    }
}
