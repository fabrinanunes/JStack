const user = {
   firstName: 'Fabrina',
   lastName: 'Nunes',
   full_name: 'Fabrina Nunes Silva',
   age: 28,
   instagram: '@fabrinanns',
   skills: ['Backend', 'Frontend', 'UX/UI']
};

const myName = user.firstName;
const myAge = user.age;

// console.log(myName, myAge)

//Destructuring
const data = user;

//console.log(data)

const { firstName, age, skills, full_name: fullName } = user;
const mySkills = skills

const [first, second, third] = skills

console.log(fullName)
