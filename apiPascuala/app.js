const express = require ('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
const port = 3500;


//Routers, rutas post-get-delete-put-patch-header-options
//app.METHOD(path,handler);
const clientRouter = require('./routers/clients.router');
const productRouter = require('./routers/products.router');
const sendEmailRouter = require('./routers/sendEmail.router');

const corsOptions = {
    origin: 'https://pascuala-zcep.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use('/public', express.static(path.join(__dirname, 'public')));
/**ERROR HANDLER */
const errorHandler=(error,req,resp,next)=>{
    const status = error.status || 400;
    resp.status(status).json({ error: true, message: error.message });

}
/**ERROR PATH */
const invalidPathHandler = (req,resp,next) =>{
    resp.status(400)
    resp.json({ error: true, message: 'INVALIDA LA RUTA'});
}


app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the main page.' });
});
/*app.get('/',(req,res )=>{
    res.json({'message':'Welcome pascuala.'});
    //send envia datos de cualquier tipo
    //json envia respuesta en json
    //end finaliza el proceso de respuesta
});*/
app.use(cors(corsOptions));

app.use('/clients',clientRouter);
app.use('/products',productRouter);
app.use('/sendEmail', sendEmailRouter);



app.use(errorHandler);
app.use(invalidPathHandler);

app.listen(port, ()=>{
    console.log("Welcome to http://localhost:"+port)
})
