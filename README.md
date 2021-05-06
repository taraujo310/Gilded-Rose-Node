# Gilded Rose

This is the Gilded Rose kata in JavaScript with Jest

## Descrição

Bem vindo ao time Gilded Rose. Nós compramos e vendemos alguns itens. Infelizmente, nossos itens estão constantemente perdendo qualidade a medida que chegam ao dia máximo de venda. Temos um sistema que atualiza o inventário para nós. Sua tarefa é adicionar uma nova funcionalidade nesse sistema para que possamos vender uma nova categoria de itens. Primeiro uma breve introdução:

- Todos os itens tem um atributo SellIn que denota a quantidade de dias que temos para vendê-lo
- Todos os itens tem um atributo Quality que denota o quão valioso ele é
- Ao fim de cada dia o sistema diminui os dois valores para cada item

As regras:

- Quando o passa a data para vendê-lo, Quality diminui duas vezes mais rápido
- Quality nunca é negativo
- "Aged Brie", na verdade, aumenta Quality quanto mais tempo passa
- Quality nunca é maior que 50
- "Sulfuras", como é um item raro, não precisa ser vendido numa data limite e nem perde qualidade
- "Sulfuras", por ser um item raro, tem Quality = 80 e nunca se altera.
- "Backstage passes", assim como Aged Brie, aumenta de qualidade a medida que a data limite se aproxima; Quality aumenta 2x quando faltam 10 dias ou menos e aumenta 3x quando faltam 5 dias ou menos; Quando o show passa, Quality cai pra 0.

Recentemente, fechamos com um novo fornecedor de itens "Conjured" e isso demanda uma atualização do nosso sistema:

- Itens "Conjured" diminui Quality 2x mais rápido que os itens "normal"

## Getting started

Instala dependências

```sh
npm install
```

## Para rodar os testes

Rodar todos os testes

```sh
npm test
```

Para rodar em modo watch

```sh
npm run test:watch
```

Para gerar relatório de cobertura

```sh
npm run test:coverage
```
