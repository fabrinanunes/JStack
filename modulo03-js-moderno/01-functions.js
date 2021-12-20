function funcao(){};
console.log(typeof funcao()); //undefined (pq não retorna nada)

function minhaFuncao(){
   return ''
};
console.log(typeof minhaFuncao()); //string

function minhaFunction(){
   this.name = 'Fabrina';
}
console.log(typeof new minhaFunction()) //object
console.log(new minhaFunction()) //minhaFunction { name: 'Fabrina' }

const minhaArrowFunction = () => {
   this.name = 'Fabrina';
};

minhaArrowFunction();
console.log(minhaArrowFunction()) //undefined

console.log(this) // { name: 'Fabrina' }