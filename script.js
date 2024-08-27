// Faz o cursor piscar

setInterval(() => {
    const cursor = document.querySelector('.cursor');
    cursor.classList.toggle('hidden')
}, 500);

cursor.addEventListener('click', () => {
    cursor.classList.add('hidden')
});

function apertarEnter() {
    document.getElementById('userInput')
    document.addEventListener('keypress', function (event) {
        // Verifica se a tecla pressionada foi "Enter"
        if (event.key === 'Enter') {
            mostrarResposta();
        }
    })
};

function mostrarResposta() {
    const respostas = [
        "Surgindo em 1991, Linus Torvald  criou o Linux como uso educacional ele queria algo semelhante ao que usava na faculdade o sunOS, mas não encontrava então decidiu criar o seu próprio Kernel.",
        "Ele explica que não deveriamos notar o uso de um SO pois o ele está ali para ajudar a executar tarefas, aplicativos e funções. Como ele próprio diz o SO está ali esperando algo para executar e torna mais fácil para executar as coisas.",
        "Linux usa um Kernel monolítico, que com as próprias palavras  de Linus significa basicamente o SO é uma única entidade, indivisível. Enquanto a estrutura de Richard era um microkernel onde delegava boa parte das funções.",
        "Segundo Richard eles escolheram um desgin muito avançado  em termos de poder e que se tornaria muito difícil depurar pois dividiram o kernal em vários consequentemente ele mesmo diz que poderia trazer muitos bugs e seria muito difícil achar pois eles estariam interligados esperando respostas um do outro e por isso levaram anos para fazer funcionar.",
        "Ele usa a definição de liberdade para você fazer oque quiser, do jeito que quiser e como quiser, você pode fazer mudanças ou pode contratar alguém para fazer essas mudanças, pode redistribuir, compartilhar ser livre!",
        "Os servidores foram basicamente o início pois o custo benefício deles era ótimo e com isso veio as companhias que se especializaram na distribuição do Software.",
        "GNU é oque Richard criou em 1984 como software livre e com essa base Linus pegou o software livre e fez o Linux basicamente  Richard fez as ferramentes e Linux usou elas para fazer seu Kernel.",
        "Foi quando Jim Barksdale vim potencial nesse método e impôs a visão dele a todos abaixo dele pois ele estava no topo e podia fazer as coisas mudarem e acontecer",
        "Deve ser barato, falsificado e sem valor alem disso Eric Raymond fala que o marketing é péssimo porque não é algo que homens de negócio querem ouvir. Porque ao dizer Sofware Livre as pessoas achavam que era de graça sendo assim impossível de monetizar.",
        "Código Aberto - Mostrar que o o código fonte estava lá e aberto. Software Livre - Sobre o software estar lá disponível a todos liberdade de cooperar com outras pessoas, liberdade e comunidade e Freeware  - é protegido por direitos autorais mas sem custos.",
        "Andrew Tannenbaum era criador do MINIX um SO que foi baseado no UNIX ele defendia que o microkernel (as funcionalidades são todas executadas fora do núcleo  em oposição ao monolítico) era superior ao kernel Linux que era monolítico e em camadas e que o linux era obsoleto. Microkernel traz modularidades, estabilidade e confiabildiade, mas apresenta desvantagens como desempenho e complexibilidade já o monolítico traz rapidez e eficiência pois não há sobrecarga de comunicação e como desvantagem é completo e difícil de manter pois qualquer erro no kernel pode afetar o todo. Acredito que o Híbrido seja a melhor escolha, mas o microkernel evita que uma pane ou erro faça o sistema inteiro cair."
    ];

    const userInput = document.getElementById('userInput').value;
    const respostaElement = document.getElementById('resposta')

    if (userInput >= 1 && userInput <= 11) {
        respostaElement.textContent = respostas[userInput - 1]
    }

    // Limpa o input
    document.getElementById('userInput').value = "";

}