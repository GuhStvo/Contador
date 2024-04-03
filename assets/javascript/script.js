// Variável para poder mudar o contador quando os botões forem clicados
let prinContador = document.querySelector('p')

// Variáveis dos botões
const btnIncrementar = document.getElementById('incrementar') // Incrementar
const btnDecrementar = document.getElementById('decrementar') // Decrementar
const btnRestar = document.getElementById('restar') // Resetar

let contador = 0 // Contador começa com zero

function mudarcor(){ // Função para mudar a cor do contador, usando condicional
    if(contador < 0) { // Se for número menor que zero...
        prinContador.style = `color: red;` // Cor de texto para vermelho
    } else if (contador > 0) { // Se for número for maior que zero...
        prinContador.style = `color: blue;` // Cor de texto para azul
    } else { // Caso for nenhum das duas verificações a cima...
        prinContador.style = `color: black;` // Cor de texto par preto (padrão)
    }
}

// Adicionando evento "click" nos botões
btnIncrementar.addEventListener('click', function() { //Incrementar (CONTADOR++)
    contador++
    prinContador.innerHTML = contador

    mudarcor()
});btnDecrementar.addEventListener('click', function() { //DECREMENTAR (CONTADOR--)
    contador--
    prinContador.innerHTML = contador

    mudarcor()
});btnRestar.addEventListener('click', function() { //RESETAR (CONTADOR=0)
    contador = 0
    prinContador.innerHTML = contador

    mudarcor()
});