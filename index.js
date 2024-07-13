const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('A rota está funcionando');
  });


app.listen(port, (erro) => {
    if(erro) {
        console.log('erro');
    }else{
        console.log('Server is running in port ' + port);    
    }
          
});