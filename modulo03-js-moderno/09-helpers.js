const tech = 'Node.js';
const array = ['Node.js', 'React', 'TypeScript']

// INCLUDES
const includesString = tech.includes('.') // true
const includesString = tech.includes('node') // false - Case Sensitive
const includesString = tech.includes('ode') // true

const includesArray = array.includes('React Native') // false
const includesArray = array.includes('React') // true
const includesArray = array.includes('react') // false - Case Sensitive
const includesArray = array.includes('Node') // false


// STARTS WITH
const startsWith = tech.startsWith('no') //false - Case Sensitive
const startsWith = tech.startsWith('N') // true
const startsWith = tech.startsWith('No') // true

// ENDS WITH
const endsWith = tech.endsWith('no') // false
const endsWith = tech.endsWith('js') // true