# API
- Conceito: Application Programming Interface
- Permite que conecte várias aplicações em uma mesma fonte de dados

## Requisições HTTP
- Protocolo HTTP: troca de mensagens entre duas pontas (cliente x servidor)
- Cliente: faz requisão ao servidor
- Servidor: traz a response ao cliente

### Conteúdo da Requisição
- URL/endpoint: identificação de recursos
- Query Params: parâmetros da URL
- Método: identificação de ação
- Headers: identificações adicionais entre cliente e servidor (boas práticas: sempre começar com X, para identificar que é um header da nossa aplicação)
- Body: corpo da mensagem 

### Métodos
- GET: consulta de dados (lista)
- POST: criação de registros
- PUT: alteração de registros
- DELETE: deletação de registros

### BODY
- Apenas nas requisições PUT e POST
- Formato: geralmente em JSON (JavaScript Object Notation)
- Não é possível enviar arquivos binários em JSON (ex.: imagem), para isso, o body tem que ser Multipart/form-data

### RESPONSE
- Headers: informações adicionais
- Content Type: tipo do conteúdo da resposta
- Status Code: indica o que aconteceu com a request
- Body: dados que foram requisitados

### STATUS CODE
- Categorizados pelo primeiro dígito: <br/>
   100-199: respostas de Informação <br/>
   200-299: respostas de Sucesso  <br/>
   300-399: redirecionamentos  <br/>
   400-499: erros do cliente  <br/>
   500-599: erros do servidor

### Principais Códigos:
- 200: OK
- 201: Created
- 204: No content
- 400: Bad Request
- 401/403: Unauthorized
- 404: Not found
- 405: Method Not Allowed
- 409: Conflict
- 500: INternal Server Error

### Padrão REST
- REST: Representational State Transfer
- Padrão para construção de APIs que utiliza o protocolo HTTP
- Retorna uma representação do estado
- Nomes de endpoints: sempre no plural (ex.: products)

### Representação do Estado
- Para transferir o estado do objeto no servidor em uma instância específica de tempo para o cliente, é necessário algum tipo de representação (ex.: JSON)
- Dados ficam disponíveis de forma genérica