const user = {
   firstName: 'Fabrina',
   lastName: 'Nunes',
   full_name: 'Fabrina Nunes Silva',
   age: 28,
   instagram: '@fabrinanns',
   skills: ['Backend', 'Frontend', 'UX/UI']
};

//Rest Operator (acessar o resto do objeto)
//precisa ser sempre o último elemento da desestruturação

const { firstName, skills, ...resto } = user;
const [first, ...outrasSkills] = skills;

console.log(resto)
console.log(outrasSkills)