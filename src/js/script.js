const titulo = document.querySelector("#titulo-principal");

// 1. Atualizar título/perfil

const nomePerfil = document.querySelector("#nome-perfil");
const botaoTitulo = document.querySelector("#btn-titulo");

botaoTitulo.addEventListener("click", function() {
    const nome = nomePerfil.value.trim();

    if (nome === "") {
        alert("Digite um nome ou termo primeiro!");
        return;
    }

    titulo.textContent = nome;
});


// 2. Modo escuro

const botaoTema = document.querySelector(".btn-tema");

botaoTema.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});


// 3. Pesquisa de livros

const busca = document.querySelector("#busca");
const cards = document.querySelectorAll(".card-livro");

busca.addEventListener("input", function() {
    const pesquisa = busca.value.toLowerCase();

    cards.forEach(function(card) {
        const texto = card.textContent.toLowerCase();

        if (texto.includes(pesquisa)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
});


// 4. Gerenciar os três destaques

const nomeLivro = document.querySelector("#nome-livro");
const posicaoLivro = document.querySelector("#posicao-livro");
const botaoDestaque = document.querySelector("#btn-destaque");

botaoDestaque.addEventListener("click", function() {
    const nome = nomeLivro.value.trim();
    const posicao = Number(posicaoLivro.value);

    if (nome === "") {
        alert("Digite o título do livro!");
        return;
    }

    if (
        posicaoLivro.value === "" ||
        !Number.isInteger(posicao) ||
        posicao < 1 ||
        posicao > 3
    ) {
        alert("Escolha uma posição de 1 a 3!");
        return;
    }

    const card = cards[posicao - 1];
    const tituloCard = card.querySelector("h3");

    tituloCard.textContent = nome;
    nomeLivro.value = "";

    alert("Destaque atualizado!");
});


// 5. Catálogo de lançamentos

const numeroCatalogo = document.querySelector("#numero-catalogo");
const botaoLancamento = document.querySelector("#btn-lancamento");
const resultadoLancamento = document.querySelector("#resultado-lancamento");

const lancamentos = [
    {
        titulo: "Código Zero",
        categoria: "Programação",
        mes: "Fevereiro"
    },
    {
        titulo: "Mentes Artificiais",
        categoria: "Inteligência Artificial",
        mes: "Junho"
    },
    {
        titulo: "Além do Código",
        categoria: "Sistemas Computacionais",
        mes: "Março"
    }
];

const opcoesCatalogo = [
    "Programação",
    "Inteligência Artificial",
    "Sistemas Computacionais",
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho"
];

botaoLancamento.addEventListener("click", function() {
    const numero = Number(numeroCatalogo.value);

    resultadoLancamento.innerHTML = "";

    if (
        numeroCatalogo.value === "" ||
        !Number.isInteger(numero) ||
        numero < 1 ||
        numero > opcoesCatalogo.length
    ) {
        resultadoLancamento.textContent =
            "Digite um número de 1 a 9.";
        return;
    }

    const escolha = opcoesCatalogo[numero - 1];

    const encontrados = lancamentos.filter(function(livro) {
        return livro.categoria === escolha || livro.mes === escolha;
    });

    if (encontrados.length === 0) {
        resultadoLancamento.textContent =
            "Nenhum lançamento encontrado para essa opção.";
        return;
    }

    encontrados.forEach(function(livro) {
        const item = document.createElement("p");

        item.textContent =
            livro.titulo + " — " +
            livro.categoria + " — " +
            livro.mes;

        resultadoLancamento.appendChild(item);
    });
});


// 6. Gerar prévia de imagem dinamicamente

const botoesPrevia = document.querySelectorAll(".btn-previa");

botoesPrevia.forEach(function(botao) {
    botao.addEventListener("click", function() {
        const card = botao.closest(".card-livro");
        const previaExistente = card.querySelector(".previa");

        if (previaExistente) {
            alert("A prévia deste livro já foi gerada!");
            return;
        }

        const capaOriginal = card.querySelector("img");
        const imagem = document.createElement("img");

        imagem.src = capaOriginal.src;
        imagem.alt = "Prévia da capa do livro";
        imagem.classList.add("previa");

        card.appendChild(imagem);

        alert("Prévia gerada com sucesso!");
    });
});


// 7. Eventos de mouse nos livros

cards.forEach(function(card) {
    const tituloCard = card.querySelector("h3");

    card.addEventListener("mouseover", function() {
        tituloCard.style.color = "var(--principal)";
    });

    card.addEventListener("mouseout", function() {
        tituloCard.style.color = "";
    });
});


// 8. Botões de comprar e mostrar

const botoesComprar = document.querySelectorAll(".btn-comprar");
const botoesMostrar = document.querySelectorAll(".btn-mostrar");

botoesComprar.forEach(function(botao) {
    botao.addEventListener("click", function() {
        const card = botao.closest(".card-livro");
        const nome = card.querySelector("h3").textContent;

        alert(nome + " foi adicionado às compras!");
    });
});

botoesMostrar.forEach(function(botao) {
    botao.addEventListener("click", function() {
        const card = botao.closest(".card-livro");
        const nome = card.querySelector("h3").textContent;
        const descricao = card.querySelector("p").textContent;

        alert(nome + "\n\n" + descricao);
    });
});


// 9. Botão de compras do cabeçalho

const botaoCarrinho = document.querySelector(".btn-carrinho");

botaoCarrinho.addEventListener("click", function() {
    alert("Área de compras do MercadoLivro!");
});