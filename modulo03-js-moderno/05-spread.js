const user = {
   firstName: 'Fabrina',
   lastName: 'Nunes',
   age: 28,
   instagram: '@fabrinanns',
   skills: ['Backend', 'Frontend', 'UX/UI'],
   active: false,
};

//Spread Operator (espalhar)

// Para transformar o active em true é possível fazer:
// user.active = true
// Object.assing(user, { active: true });
// Porém, quebra o Princípio da Imutabilidade (nunca mudar um dado, caso deseja fazer uma alteração dentro do objeto, não se mexe direto no objeto)

const updatedUser = {
   ...user,
   skills: [...user.skills, 'Mobile'],
   active: true,
}

//a ultima declaração é a que conta

console.log({updatedUser})