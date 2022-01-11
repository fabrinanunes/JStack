const apiCall = new Promise((resolve, reject) => {});

//console.log(apiCall); //Promise { <pending> }

// Uma promise só é resolvida, ou rejeitada, quando executados o resolve e o reject
// Promise: usado quando há uma tarefa muito demorada e que em algum momento ela vai ser finalizada, para assim usar a resposta dessa tarefa

const newApiCall = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve('Sucesso')
      //reject('Error!')
   }, 1000)
});

//then & catch

// newApiCall.then((resposta) => {
//    console.log(resposta)
// })

// newApiCall
//    .then((resposta) => {
//       console.log(resposta)
//    })
//    .catch((error) => {
//       console.log(error)
//    })

// async & await

async function run(){
   try{
      const resposta = await newApiCall
      console.log(resposta)
   }catch(error){
      console.log(error)
   }
}

run()

// Diferença entre then&catch x async&await

// O código não fica travado quando usar o then&catch, ele executa o restante do código, independente do resultado da Promise estar pending ou não