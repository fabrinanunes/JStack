# FUNÇÕES

## Function x Arrow Function
- Para nomear uma arrow function, é necessário armazená-la em uma variável
` const minhaArrowFunction = () => {}`
- Funções criadas com a keyword `function` tem o seu `próprio this`, enquanto as `arrow functions` tem o 
 `this do escopo onde foram criadas`
- This: é o valor da função, fazendo com que conseguimos atribuir propriedades para dentro da função
- O this é utilizado em funções construtoras, pois essa função é um objeto e é possível atribuir propriedades a esse objeto com o `this`
- Função Construtora: pode ser executada como função ou pode ser utilizadas para instanciar um objeto utilizando a palavra `new`
```
function minhaFunction(){
   this.name = 'Fabrina';
}

console.log(new minhaFunction()); //minhaFunction { name: 'Fabrina' }
```
- As arrow functions não têm construtor, ou seja, não é possível chamar uma arrow function com o termo `new`
- Por não terem construtor, uma arrow function não tem seu próprio this.
- O valor do `this em uma arrow function` é herdado do contexto da execução, ou seja, o valor do this em uma arrow function é o mesmo valor do this do escopo encapsulado.
- Arrow function usa o this do contexto onde ela foi criada, enquanto a function cria o seu próprio this/contexto a partir do momento que se usa o termo new antes da function