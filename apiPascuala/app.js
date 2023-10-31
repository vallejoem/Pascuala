const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3500;

const userRouter = require('./routers/users.router');
//Routers, rutas post-get-delete-put-patch-header-options
//app.METHOD(path,handler);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res )=>{
    res.json({'message':'Welcome pascuala.'});
    //send envia datos de cualquier tipo
    //json envia respuesta en json
    //end finaliza el proceso de respuesta
});

app.use('/users',userRouter);




app.listen(port, ()=>{
    console.log("Welcome to http://localhost:"+port)
})