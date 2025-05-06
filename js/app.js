function comprar() {
    let tipoDeIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeSolicitada = parseInt(document.getElementById('qtd').value);

    if (isNaN(quantidadeSolicitada) || quantidadeSolicitada <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }
    
    console.log(tipoDeIngresso);
    console.log(quantidadeSolicitada);

    if (tipoDeIngresso == 'pista') {
        comprarPista(quantidadeSolicitada);
    } else if (tipoDeIngresso == 'superior') {
        comprarSuperior(quantidadeSolicitada);
    } else { 
        comprarInferior(quantidadeSolicitada);
    }
}

function comprarPista(quantidadeSolicitada) {
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);

    if (quantidadeSolicitada > quantidadePista) {
        alert('Quantidade de ingressos indisponível para Pista');
        alert(`Quantidade restante de ingressos do tipo escolhido: ${quantidadePista}`);
    } else {
        quantidadePista = quantidadePista - quantidadeSolicitada;
        document.getElementById('qtd-pista').textContent = quantidadePista;
        alert('Ingressos adquiridos!')
        alert(`Quantidade restante de ingressos do tipo escolhido: ${quantidadePista}`);
    }
}

function comprarSuperior(quantidadeSolicitada) {
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    
    if (quantidadeSolicitada > quantidadeSuperior) {
        alert('Quantidade de ingressos indisponível para Cadeiras Superiores');
        alert(`Quantidade restante de ingressos do tipo escolhido: ${quantidadeSuperior}`);
    } else {
        quantidadeSuperior = quantidadeSuperior - quantidadeSolicitada;
        document.getElementById('qtd-superior').textContent = quantidadeSuperior;
        alert('Ingressos adquiridos!')
        alert(`Quantidade restante de ingressos do tipo escolhido: ${quantidadeSuperior}`);
    }
}

function comprarInferior(quantidadeSolicitada) {
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (quantidadeSolicitada > quantidadeInferior) {
        alert('Quantidade de ingressos indisponível para Cadeiras Inferiores');
        alert(`Quantidade restante de ingressos do tipo escolhido: ${quantidadeInferior}`);
    } else {
        quantidadeInferior = quantidadeInferior - quantidadeSolicitada;
        document.getElementById('qtd-inferior').textContent = quantidadeInferior;
        alert('Ingressos adquiridos!')
        alert(`Quantidade restante de ingressos do tipo escolhido: ${quantidadeInferior}`);
    }
}