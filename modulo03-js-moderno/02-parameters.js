function greetings(message){
   console.log(message)
}

greetings() // undefined
greetings('Hello World') //Hello World

function greetings(message = 'Mensagem Padrão'){
   console.log(message)
}

greetings() // Mensagem Padrão
greetings('Hello World') //Hello World