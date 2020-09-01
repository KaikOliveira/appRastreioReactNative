const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('./models');

const app=express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let user=models.User;
let tracking=models.Tracking;
let product=models.Product;
 
app.post('/Login', async (req,res)=>{
    let response=await user.findOne({
        whare:{name:req.body.name, password: req.body.password}
        
    });
    if(response === null){
        res.send(JSON.stringify(value='erro'));
    }else{
        res.send(response);
    }
    
});

let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
});


