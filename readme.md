# Gerenciamento e Análise de Atletas (POO)

## Resumo do Projeto

Este projeto consiste na criação de uma solução em **JavaScript**, utilizando **Programação Orientada a Objetos (POO)** por meio da classe `Atleta`. O objetivo é encapsular os dados de um atleta —  nome, idade, peso, altura e notas  — e fornecer métodos para calcular parâmetros importantes como:

- Categoria
- IMC (Índice de Massa Corporal)
- Média Válida das notas

## Funcionalidades da Classe Atleta

A classe `Atleta` foi desenvolvida para concentrar todos os atributos e métodos de cálculo.

### Atributos

- `nome`
- `idade`
- `peso`
- `altura`
- `notas` (Array de números)

### Métodos

| Método               | Função                                      | Regra de Cálculo                                                                 |
|----------------------|---------------------------------------------|----------------------------------------------------------------------------------|
| `calculaCategoria()` | Determina a categoria com base na idade     | Juvenil, Adulto, etc. (ver detalhes abaixo)                                     |
| `calculaIMC()`       | Calcula o IMC                               | \(\text{IMC} = \frac{\text{peso}}{\text{altura}^2}\)                            |
| `calculaMediaValida()`| Calcula a média das notas válidas          | Descarta a maior e a menor nota, calcula a média das 3 restantes                |
| `obtem...()`         | Métodos getter para retornar atributos      | Retorna os dados ou resultados calculados                                       |

## Regras de Cálculo Detalhadas

### 1. Cálculo da Categoria

| Faixa Etária (anos) | Categoria      |
|---------------------|----------------|
| 9 a 11              | Infantil       |
| 12 e 13             | Juvenil        |
| 14 e 15             | Intermediário  |
| 16 a 30             | Adulto         |
| Demais idades       | Sem categoria  |

### 2. Cálculo do IMC

O IMC é calculado pela fórmula:

\[
\text{IMC} = \frac{\text{Peso}}{\text{Altura}^2}
\]

### 3. Cálculo da Média Válida

- Ordena-se o array de cinco notas.
- Descarta-se a menor e a maior nota.
- Calcula-se a média aritmética das três notas centrais.


## Solução em JavaScript

O código completo da classe `Atleta` foi desenvolvido para atender aos requisitos de encapsulamento e análise de dados esportivos, aplicando os princípios da Programação Orientada a Objetos (POO). A estrutura da classe permite representar um atleta por meio de seus atributos essenciais — como nome, idade, peso, altura e notas — e oferece métodos específicos para realizar cálculos relevantes, como categoria etária, índice de massa corporal (IMC) e média válida de desempenho.


## Como Rodar o Projeto

1. **Copie o Código**: Copie o bloco de código JavaScript fornecido.
2. **Execute**: Cole-o no console do navegador um arquivo `.js` rodado via Node.js, ou em um ambiente de pré-visualização.

3. **Verifique**: Os resultados serão exibidos no console.


> ⚠️ Certifique-se de copiar o código corretamente para executar os testes.


## Licença

Este projeto está licenciado sob os termos da MIT License.


## Agradecimentos

Obrigado por conferir este projeto! Fique à vontade para contribuir, sugerir melhorias ou utilizar como base para seus próprios estudos.