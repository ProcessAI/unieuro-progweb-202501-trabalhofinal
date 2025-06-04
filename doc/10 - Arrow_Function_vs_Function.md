O QUE É ARROW_FUNCTION? 

    const Arrow_Function: (fc:string,curta:fc):string => {
        return `Resumidamente falando é uma espécie de ${fc}, porém ${curta} `;
    }

    console.log(Arrow_Function("função", "mais curta"));

    saida -> Resumidamente falando é uma espécie de função mais curta

    ARROW FUNCTION É uma forma simplificada de declarar funções em JavaScript/TypeScript, tornando o código mais conciso e eliminando a necessidade do function e do return em muitos casos. Além disso, elas mantêm o contexto de this, o que pode ser muito útil em algumas situações. Ela usa a seta =>para definir a função
    e pode ser mais concisa que a tradicional Function. 

O QUE É UMA FUNCTION?

    function somar(num1:number,num2:number):number{
        return num1 + num2;
    }
    console.log(somar(90,10)); // saida -> 100

    uma função é um bloco de código que pode ser chamado para executar uma tarefa específica. Elas podem receber parâmetros, realizar operações e retornar um valor. A grande vantagem de TypeScript é que ele adiciona tipagem às funções, garantindo mais segurança e previsibilidade no código.


FUNCTION VS ARROW FUNCTION USANDO THIS!

O QUE É O THIS ? O this é uma referência dinâmica que aponta para o contexto em que a
função é executada.Ele permite acessar propriedades e métodos do objeto ao qual a função pertence, Em outras palavras, this aponta para o objeto que chamou a função.

// Craindo/Definindo o nosso tipo de dado para um objeto com typescript 

type Pessoa = {
    nome: string,
    idade: number,
    altura: number,
    ativo_sexualmente: boolean,
    falar: (this: Pessoa) => string; 
    
    // Aqui definimos que "falar" como uma função
    tradicional que utiliza this para se referir ao objeto pessoa! Ele apenas ajuda o TypeScript a entender que this dentro do método falar pertence à instância do objeto Pessoa
};

const objeto_pessoa: Pessoa = {
    nome: "Jubileu",
    idade: 23,
    altura: 1.75,
    ativo_sexualmente: true,
    falar: function () {
        return `Olá, eu sou ${this.nome}`;
    }
};

console.log(objeto_pessoa.falar());

- Criamos um tipo Pessoa, que define uma estrutura com propriedades e métodos.
- O método falar é uma função tradicional dentro do objeto, garantindo que this.nome seja acessado corretamente.
- O uso de this: Pessoa na definição do tipo apenas informa ao TypeScript que this dentro do método falar pertence ao próprio objeto Pessoa.
- this.nome dentro do método se refere à propriedade nome do próprio objeto objeto_pessoa


ARROW FUCNTION não possui suporte ao this, porque não possuem seu próprio this. Em vez disso, elas herdam o this do escopo em que foram criadas. Exemplo:

const pessoa = {
    nome: "Jubileu",
    falar: () => `Olá, eu sou ${this.nome}`
};

console.log(pessoa.falar()); 
// Saída -> Olá, eu sou undefined

- Aqui this.nome não funciona, porque a arrow function não define um escopo próprio para this.
- Resumindo não tem como trabalhar de forma eficiente usando this com Arrow function


THIS USADO CORRETAMENTE! USE BEM NA PROGRAMAÇÃO ORIENTADO A OBJETO DO TYPESCRIPT

class Pessoa {
    nome:string; // declarando um atributo do tipo string

    constructor (nome:string){
        this.nome = nome;      // criando um construtor simples
    }                       

    // Em typescript métodos/funções não precisa de palavras chaves para serem definidos
    
    saudacaoTradicional(): void {
        console.log(`Olá, meu nome é ${this.nome}`);
    }
}

const pessoa = new Pessoa("Jeison");
pessoa.saudacaoTradicional(); 

Veja que para mantermos a integridade do this usamos funções tradicionais para criar de métodos, após materializamos um objeto da classe Pessoa e utilizamos o método saudacaoTradicional, assim: o this neste contexto está se referindo ao nome do objeto Pessoa rescebido como parâmetro.

// Usando com Arrow Function

class Pessoa {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    saudacao = ():string => {
        console.log(`Olá, eu sou ${this.nome}`);
    };
}

// materializando uma objeto Pessoa

const pessoa1 = new Pessoa("Jubileu");

pessoa1.saudacao();  // Saída -> Olá, eu sou Jubileu

Neste contexto do arrow functio: 

this funciona porque foi herdado do contexto da classe Pessoa. 

⚠️ Arrow functions são úteis quando queremos evitar problemas de escopo do this, especialmente em eventos ou callbacks.

Especificação: o `${...}` que aparece na verdade é um tamplate literals, servem para
interpolação de variáveis. Isso significa que podemos colocar valores diretamente dentro de uma string sem precisar da concatenação + Ou seja, basicamente funciona como se fosse uma string formatada do python ou o método .format() do python