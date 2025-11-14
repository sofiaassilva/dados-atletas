// Classe Atleta para gerenciar informações, categorias, IMC e notas válidas.


class Atleta {
    //Construtor da classe Atleta.
    // nome - Nome completo do atleta.
    // idade - Idade do atleta em anos.
    // peso - Peso do atleta em kg.
    // altura - Altura do atleta em metros.
    // notas - Array contendo as cinco notas atribuídas pelos jurados.


    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    // --- Métodos de Cálculo ---

    // Calcula a categoria do atleta com base na idade.

    calculaCategoria() {
        const idade = this.idade;
        if (idade >= 9 && idade <= 11) {
            return "Infantil";
        } else if (idade >= 12 && idade <= 13) {
            return "Juvenil";
        } else if (idade >= 14 && idade <= 15) {
            return "Intermediário";
        } else if (idade >= 16 && idade <= 30) {
            return "Adulto";
        } else {
            return "Sem categoria";
        }
    }

    // Calcula o Índice de Massa Corporal (IMC) do atleta.

    // Fórmula: imc = peso / (altura * altura)

    calculaIMC() {
        // Altura ao quadrado
        const alturaAoQuadrado = this.altura * this.altura; 
        
        // Evita divisão por zero
        if (alturaAoQuadrado === 0) return 0;

        return this.peso / alturaAoQuadrado;
    }

    // Calcula a média válida do atleta, desconsiderando a maior e a menor nota.

    calculaMediaValida() {
        // Cria uma cópia da matriz de notas para ordenação (Evita modificar a matriz original)
        let notasComputadas = [...this.notas];
        
        // 1. Ordena as notas em ordem crescente.
        notasComputadas.sort((a, b) => a - b);
        
        // 2. Seleciona as três notas do meio (1, 2 e 3), descartando a menor (0) e a maior (4).
        let notasMedianas = notasComputadas.slice(1, 4);

        // 3. Calcula a soma das notas medianas.
        let soma = notasMedianas.reduce((total, nota) => total + nota, 0);

        // 4. Retorna a média.
        // O número de notas válidas é sempre 3.
        return soma / notasMedianas.length;
    }

// --- Métodos de Obtenção (Getters) ---

obtemNomeAtleta() {
        return this.nome;
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemAlturaAtleta() {
        return this.altura;
    }

    obtemNotasAtleta() {
        return this.notas;
    }

    obtemCategoria() {
        // Utiliza o método de cálculo para obter a categoria
        return this.calculaCategoria();
    }

    obtemIMC() {
        // Utiliza o método de cálculo para obter o IMC
        return this.calculaIMC();
    }

    obtemMediaValida() {
        // Utiliza o método de cálculo para obter a média válida
        return this.calculaMediaValida();
    }
}

// ----------------------------------------------------------------------
// Exemplo de Entrada e Saída
// ----------------------------------------------------------------------

// Declara o atleta

let atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

// Formata a saída (Substitui ponto por vírgula para corresponder ao padrão do exemplo)

let notasFormatadas = atleta.obtemNotasAtleta().join(',');
let mediaFormatada = String(atleta.obtemMediaValida()).replace('.', ',');

// Exibição dos resultados no console

console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
console.log(`Altura: ${atleta.obtemAlturaAtleta()}`);
console.log(`Notas: ${notasFormatadas}`);
console.log(`Categoria: ${atleta.obtemCategoria()}`);
console.log(`IMC: ${atleta.obtemIMC()}`);
console.log(`Média válida: ${mediaFormatada}`);

