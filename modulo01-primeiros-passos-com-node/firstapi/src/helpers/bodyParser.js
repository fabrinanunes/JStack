function bodyParser(req, callback){
   let body = '';

   //event listener
   req.on('data', (chunk) => {
      body += chunk
   });

   req.on('end', () => {
      body = JSON.parse(body);
      req.body = body;
      callback();
   });
}

module.exports = bodyParser;