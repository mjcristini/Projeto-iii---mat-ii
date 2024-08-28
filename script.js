const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O principezinho veio do asteroide B 612, e encontra um piloto de avião no deserto do Saara, que estava dormindo. Ao acordar, se depara com o Pequeno Príncipe, que pede para que ele desenhe um cordeiro numa folha de papel. O que o piloto faz?",
        alternativas: [
            {
                texto:  "Ignora o pequeno príncipe",
                afirmacao: "afirmação"
            },
            {
                texto: "Desenha o cordeiro para o garotinho",
                afirmacao: "Quando o dia de encontrar a serpente finalmente chegou,"
            }
        ]
    },
    {
        enunciado: "O garotinho conta ao piloto como foi sua viagem até chegar à Terra, e que conheceu alguns personagens nesse caminho, que eram: o rei, o solitário vaidoso e o acendedor de lampiões. Já na terra ele conhece uma serpente, que diz poder ajudar o menino se ele quisesse voltar pra casa."

,
        alternativas: [
            {
                texto: "O pequeno príncipe agradece a proposta da serpente e continua sua jornada, sabendo que um dia irá reencontra-la",
                afirmacao: " o pequeno príncipe ao ser picado, não esboçou reação,"
            },
            {
                texto: "O garoto foge com medo da serpente e continua sua jornada",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Ao seguir sua jornada o principezinho passa por um jardim repleto de flores muito parecidas com a que tinha em seu planeta, e percebe que sua rosa não era assim tão única. Mais adiante ele conhece a raposa, uma criatura intrigante e filosofica, que pede ao garoto para cativa-la.",
        alternativas: [
            {
                texto: "O pequeno principe, sabendo o significado de “cativar” logo realiza o pedido de sua nova amiga.",
                afirmacao: "afirmação"
            },
            {
                texto: "O garoto fica confuso no início, mas quanto mais ouvia o que sua nova companheira dizia, mais entendia o significado de “cativar” e logo criou vínculo com a raposa.",
                afirmacao: "e também não gritou. Aceitou de maneira corajosa o destino que lhe foi imposto."
            }
        ]
    },
    {
        enunciado: "O pequeno prícipe logo decide continuar sua viajem e se despede de sua nova amiga e das diversas flores. Mesmo chateada com sua partida,  a raposa o ensina que sua rosa não era como as outras pois era *sua* rosa, e que:",
        alternativas: [
            {
                texto: "O essencial é invisível aos olhos",
                afirmacao: " Depois de tombar como uma árvore, enfim, voltou para o seu planeta."
            },
            {
                texto: "Ele deveria contar a ela que haviam muitas outras iguai a ela",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Hora de ir...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();