# 🛒 Módulo de Checkout - Carrinho de Compras

Módulo de cálculo de total de compras para e-commerce desenvolvido em Node.js, com validações de regras de negócio, tratamento de exceções e uma suíte completa de testes unitários automatizados em Jest[cite: 2, 4].

---

## 📌 Sobre o Projeto

Este projeto tem como objetivo validar o cálculo do montante final de uma compra na função `calcularTotal(itens, cupom)`[cite: 4]. O sistema garante a aplicação correta de cupões de desconto, limites para atribuição de frete grátis, arredondamento para casas decimais monetárias e lançamento de exceções para entradas inválidas[cite: 1, 4].

* **Responsável:** Mariana Chaves Ribeiro[cite: 4]
* **Ambiente de Desenho:** VS Code | Node.js v24 | Jest[cite: 4]

---

## 📋 Regras de Negócio

1. **Cálculo do Subtotal:** Multiplicação da quantidade pelo preço de cada item presente no carrinho[cite: 1, 4].
2. **Validação de Entrada:** Se o carrinho estiver vazio (`[]`), se não for uma lista ou se algum item contiver quantidade menor ou igual a zero (`<= 0`), o sistema lança a exceção `"Carrinho inválido"`[cite: 1, 4].
3. **Cupão de Desconto:** A utilização do cupão `"PROMO10"` aplica 10% de desconto sobre o subtotal[cite: 1, 4].
4. **Regras de Frete:**
   - Subtotal igual ou superior a **R$ 100,00** ($\ge 100$): **Frete Grátis** (R$ 0,00)[cite: 1, 4].
   - Subtotal inferior a **R$ 100,00** ($< 100$): Taxa fixa de frete de **R$ 15,00**[cite: 1, 4].
5. **Arredondamento Monetário:** O valor final é arredondado exatamente a 2 casas decimais[cite: 1, 4].

---

## 📂 Estrutura do Repositório

```text
.
├── carrinho.js           # Implementação da função calcularTotal
├── carrinho.test.js      # Suíte de testes unitários em Jest
├── index.js              # Script para validação manual na consola
└── Plano de Testes.pdf   # Documentação técnica e matriz GOT
```[cite: 1, 2, 3, 4]

---
## 🚀 Como Executar o Projeto

### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado no seu sistema[cite: 4].

### 1. Clonar o Repositório
```bash
git clone [https://github.com/seu-usuario/carrinho-compras.git](https://github.com/seu-usuario/carrinho-compras.git)
cd carrinho-compras
2. Instalar Dependências
Bash
npm install
3. Executar o Script Manual (Consola)
Para executar os cenários através do script index.js:

Bash
node index.js
```[cite: 3]

### 4. Executar os Testes Automatizados (Jest)
Para rodar a suíte de testes automatizados:
```bash
npx jest
```[cite: 2]
