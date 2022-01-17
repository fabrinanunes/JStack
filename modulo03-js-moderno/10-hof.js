const array = [
   { name: 'iPhone', price: 5000, quantity: 2},
   { name: 'MacBook Pro', price: 20000, quantity: 1},
   { name: 'Magic Mouse', price: 1000, quantity: 5},
];

// find & findIndex
//
// a iteração do find para no momento que o primeiro objeto for true, indepenente de haverem outros objetos que se enquadrem na condição

const find = array.find((product) => {
   //return product.name === 'Magic Mouse'
   return product.price > 1000
});
//console.log({ find });

const findIndex = array.findIndex((product) => {
   return product.name === 'Magic Mouse'
   //return product.price > 1000
});
//console.log({ findIndex });
//console.log({'Produto': array[findIndex]});

// some & every
//
// retorna um boolean
// some: verifica se algum objeto corresponde à condição
// every: verifica se todos os objetivos correspondem à condição

const some = array.some((product) => {
   //return product.price > 1000
   return product.price < 1000
});
//console.log({ some });

const every = array.every((product) => {
   return product.price >= 1000
   //return product.price < 1000
});
//console.log({ every });

// map
//
// o retorno do map sempre será um array com o mesmo número de itens do array analisado 

const map = array.map((product) => ({
      ...product,
      subtotal: product.quantity * product.price
}));
//console.log({ map })

//filter

const filter = array.filter((product) => {
   return product.quantity > 1
})
//console.log({ filter })

// reduce
// transformar um array em outro tipo de dados

const reduce = array.reduce((accumulator, product) => {
   return accumulator + (product.price * product.quantity)
}, 0)

console.log({reduce})