const { calcularTotal } = require('./carrinho');

describe('Suite de testes do carrinho de compras', () => {

    // AJUSTE: "gratis" -> "grátis" e padronização do "Deve" com inicial minúscula
    test('CT-01: deve conceder frete grátis para compras de exatamente R$ 100,00', () => {
        const itens = [{ preco: 100, quantidade: 1 }];
        // subtotal: 100 | desconto: 0 | frete: 0 | total: 100
        expect(calcularTotal(itens, null)).toBe(100);
    });

    test('CT-02: deve aplicar 10% de desconto para o cupom PROMO10', () => {
        const itens = [{ preco: 50, quantidade: 1 }];
        // AJUSTE: o "\" nos comentários foi trocado por "|" para ficar legível
        // subtotal: 50 | desconto: 10% (5) = 45 | frete: 15 | total: 60
        expect(calcularTotal(itens, "PROMO10")).toBe(60);
    });

    // AJUSTE: o título fala em "negativa ou zero", mas só a negativa era testada.
    // Com test.each, os dois casos passam a ser cobertos.
    test.each([-2, 0])('CT-03: deve lançar erro para quantidade inválida (%i)', (quantidade) => {
        const itens = [{ preco: 10, quantidade }];
        expect(() => calcularTotal(itens, null)).toThrow("Carrinho inválido");
    });

    test('CT-04: deve arredondar o total para duas casas decimais', () => {
        const itens = [{ preco: 33.333, quantidade: 1 }];
        // subtotal: 33.333 | desconto: 0 | frete: 15 | total: 48.333 -> 48.33
        // Mantive toBe (e não toBeCloseTo), porque toBeCloseTo passaria mesmo sem arredondar
        expect(calcularTotal(itens, null)).toBe(48.33);
    });

    test('CT-05: deve lançar erro para carrinho vazio', () => {
        expect(() => calcularTotal([], null)).toThrow("Carrinho inválido");
    });

    test('CT-06: deve cobrar frete para compras abaixo de R$ 100,00', () => {
        const itens = [{ preco: 80, quantidade: 1 }];
        // subtotal: 80 | desconto: 0 | frete: 15 | total: 95
        expect(calcularTotal(itens, null)).toBe(95);
    });
});