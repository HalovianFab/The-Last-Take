
const menu = document.getElementById("menu");

const botaoPlay = document.getElementById("btn-play");
const botaoOpcoes = document.getElementById("btn-opcoes");
const botaoSair = document.getElementById("btn-sair");

const transicao = document.getElementById("transicao");

const texto1 = document.getElementById("texto-1");
const texto2 = document.getElementById("texto-2");
const texto3 = document.getElementById("texto-3");
const texto4 = document.getElementById("texto-4");

const textosIntro = document.getElementById("textos-intro");

const trilhaSonora = document.getElementById("trilha-sonora");

const takeDois = document.getElementById("take-dois");

const textoCinema = document.getElementById("texto-cinema");
const textoPoster = document.getElementById("texto-poster");

const takeTres = document.getElementById("take-tres");

const textoPalco0 = document.getElementById("texto-palco-0");
const textoPalco1 = document.getElementById("texto-palco-1");
const textoPalco2 = document.getElementById("texto-palco-2");


botaoPlay.addEventListener("click", () => {

    // Faz as opções desaparecerem
    menu.classList.add("saindo");

    // Inicia a música 1,5 segundo depois do Play
    setTimeout(() => {
        trilhaSonora.play();
    }, 1500);

    // Inicia a subida da logo
    setTimeout(() => {
        menu.classList.add("logo-subindo");
    }, 1000);

    // Mostra a imagem depois da subida da logo
    setTimeout(() => {

        menu.style.display = "none";
        transicao.style.display = "block";

        requestAnimationFrame(() => {
            transicao.classList.add("subindo");
        });

        iniciarTextos();

        // Começa o escurecimento antes do fim da imagem
        setTimeout(() => {
            transicao.classList.add("escurecendo");
        }, 16000);

        // Inicia o segundo take depois que a tela fica preta
        setTimeout(() => {
            iniciarSegundoTake();
        }, 21000);

    }, 5500);

});


function iniciarTextos() {

    setTimeout(() => {
        texto1.classList.add("aparecendo");
    }, 0);

    setTimeout(() => {
        texto2.classList.add("aparecendo");
    }, 3500);

    setTimeout(() => {
        texto3.classList.add("aparecendo");
    }, 6500);

    setTimeout(() => {
        texto4.classList.add("aparecendo");
    }, 9500);

    setTimeout(() => {
        textosIntro.classList.add("desaparecendo");
    }, 15500);

}


// =================================
// SEGUNDO TAKE
// =================================

function iniciarSegundoTake() {

    transicao.style.display = "none";
    takeDois.style.display = "block";

    requestAnimationFrame(() => {

        takeDois.classList.add("iniciando");
        textoCinema.classList.add("aparecendo");

    });

    setTimeout(() => {

        // Transição do cinema para o pôster
        takeDois.classList.add("cinema-saindo");

        textoCinema.classList.add("desaparecendo");
        textoPoster.classList.add("aparecendo");

        // 3,5 segundos de transição + 12 segundos no pôster
        setTimeout(() => {
            iniciarTerceiroTake();
        }, 15500);

    }, 16000);

}


// =================================
// TERCEIRO TAKE: EVELYN NO PALCO
// =================================

function iniciarTerceiroTake() {

    takeTres.style.display = "block";

    requestAnimationFrame(() => {

        takeTres.classList.add("iniciando");

        // Primeiro texto aparece
        textoPalco0.classList.add("aparecendo");

    });


    // Primeiro texto permanece por 8 segundos
    setTimeout(() => {

        textoPalco0.classList.add("desaparecendo");

        // Espera o primeiro desaparecer completamente
        setTimeout(() => {

            textoPalco1.classList.add("aparecendo");

            // Segundo texto permanece por 8 segundos
            setTimeout(() => {

                textoPalco1.classList.add("desaparecendo");

                // Espera o segundo desaparecer completamente
                setTimeout(() => {

                    // Terceiro e último texto aparece
                    textoPalco2.classList.add("aparecendo");

                }, 2500);

            }, 8000);

        }, 2500);

    }, 8000);

}


// =================================
// BOTÃO OPÇÕES
// =================================

botaoOpcoes.addEventListener("click", () => {
    alert("As opções serão implementadas depois.");
});


// =================================
// BOTÃO SAIR
// =================================

botaoSair.addEventListener("click", () => {
    alert("Obrigado por jogar The Last Take!");
});
