const FRETE_FIXO = 15;
const LIMITE_FRETE_GRATIS = 100;

function calcularTotal(itens, cupom) {
    // CT-05: carrinho vazio (ou que não é lista) deve lançar erro
    if (!Array.isArray(itens) || itens.length === 0) {
        throw new Error("Carrinho inválido");
    }

    // CT-03: quantidade negativa ou zero deve lançar erro
    for (const item of itens) {
        if (item.quantidade <= 0) {
            throw new Error("Carrinho inválido");
        }
    }

    const subtotal = itens.reduce(
        (soma, item) => soma + item.preco * item.quantidade,
        0
    );

    // CT-02: o cupom PROMO10 aplica 10% de desconto
    const desconto = cupom === "PROMO10" ? subtotal * 0.1 : 0;

    // CT-01: frete grátis a partir de R$ 100,00 (>=, e não >)
    // CT-06: abaixo de R$ 100,00 continua cobrando R$ 15,00
    const frete = subtotal >= LIMITE_FRETE_GRATIS ? 0 : FRETE_FIXO;

    const total = subtotal - desconto + frete;

    // CT-04: arredonda para 2 casas decimais (48.333 -> 48.33)
    return Math.round((total + Number.EPSILON) * 100) / 100;
}

module.exports = { calcularTotal };