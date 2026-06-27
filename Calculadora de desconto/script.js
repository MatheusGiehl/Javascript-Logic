const valorCompraInput = document.getElementById('valorCompra');
const resultadoPorcentagem = document.getElementById('resultadoPorcentagem');
const resultadoDesconto = document.getElementById('resultadoDesconto');
const resultadoFinal = document.getElementById('resultadoFinal');

function formatarReais(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function calcularDesconto() {
    const valorCompra = parseFloat(valorCompraInput.value) || 0;
    let porcentagem = 0;

    if (valorCompra >= 200) {
        porcentagem = 20;
    } else if (valorCompra > 100) {
        porcentagem = 10;
    }

    const desconto = valorCompra * (porcentagem / 100);
    const totalComDesconto = valorCompra - desconto;

    resultadoPorcentagem.textContent = `${porcentagem}%`;
    resultadoDesconto.textContent = formatarReais(desconto);
    resultadoFinal.textContent = formatarReais(totalComDesconto);
}

valorCompraInput.addEventListener('input', calcularDesconto);

calcularDesconto();