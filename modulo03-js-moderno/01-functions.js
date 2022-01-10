// #### Function x Arrow Function ####
// - Para nomear uma arrow function, é necessário armazená-la em uma variável
// ` const minhaArrowFunction = () => {}`
// - Funções criadas com a keyword `function` tem o seu `próprio this`, enquanto as `arrow functions` tem o 
//  `this do escopo onde foram criadas`
// - This: é o valor da função, fazendo com que conseguimos atribuir propriedades para dentro da função
// - O this é utilizado em funções construtoras, pois essa função é um objeto e é possível atribuir propriedades a esse objeto com o `this`
// - Função Construtora: pode ser executada como função ou pode ser utilizadas para instanciar um objeto utilizando a palavra `new`
// ```
// function minhaFunction(){
//    this.name = 'Fabrina';
// }

// console.log(new minhaFunction()); //minhaFunction { name: 'Fabrina' }
// ```
// - As arrow functions não têm construtor, ou seja, não é possível chamar uma arrow function com o termo `new`
// - Por não terem construtor, uma arrow function não tem seu próprio this.
// - O valor do `this em uma arrow function` é herdado do contexto da execução, ou seja, o valor do this em uma arrow function é o mesmo valor do this do escopo encapsulado.
// - Arrow function usa o this do contexto onde ela foi criada, enquanto a function cria o seu próprio this/contexto a partir do momento que se usa o termo new antes da function

function funcao(){};
//console.log(typeof funcao()); //undefined (pq não retorna nada)

function minhaFuncao(){
   return ''
};
//console.log(typeof minhaFuncao()); //string

function minhaFunction(){
   this.name = 'Fabrina';
}
//console.log(typeof new minhaFunction()) //object
//console.log(new minhaFunction()) //minhaFunction { name: 'Fabrina' }

const minhaArrowFunction = () => {
   this.name = 'Fabrina';
};

minhaArrowFunction();
//console.log(minhaArrowFunction()) //undefined
//console.log(this) // { name: 'Fabrina' } >> escopo principal

function myFunction(){
   this.name = 'Mateus';

   const myArrowFunction = () => {
      this.lastname = 'Silva';
   };

   myArrowFunction();
}

//console.log(new myFunction()); //myFunction { name: 'Mateus', lastname: 'Silva' } >> escopo da myFunction

function soma(){
   // console.log(arguments)
   console.log(Object.values(arguments)) //[1, 2, 3, 4, 5, 6, 7, 'Mateus']
}

soma(1, 2, 3, 4, 5, 6, 7, 'Mateus');

function soma(argumentos, argumentos2){
   console.log(argumentos) //1
   console.log(argumentos, argumentos) //2
}

soma(1, 2, 3, 4)

function soma(...argumentos){
   console.log(argumentos) //[1, 2, 3, 4]
}

soma(1, 2, 3, 4);

function soma(primeiroParametro, ...argumentos){
   console.log({primeiroParametro}) //1
   console.log({argumentos}) //[1, 2, 3, 4]
}

soma(1, 2, 3, 4);

const soma = () => {
   console.log(arguments) //arguments do escopo que a arrow function foi criada
}

soma(1, 2, 3, 4);

const soma = () => {
   return 'Hello World'
}

//short syntax
const soma = () => 'Hello World';

const algumNumero = 10;
const soma = () => (
   algumNumero >= 10
      ? 'Maior igual a 10'
      : 'Menor que 10'
);

const getUser = () => {
   return {
      id: '123',
      name: 'Fabrina'
   };
};

const getUser = () => ({
      id: '123',
      name: 'Fabrina'
});

