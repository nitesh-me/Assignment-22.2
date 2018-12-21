const express = require('express');
const mongoose  = require('mongoose');
const methodOverride = require('method-override')
const bodyParser = require('body-parser')

const productRoute = require('./routes/product')
const port = process.env.PORT || 8000;;
mongoose.connect('mongodb://localhost:27017/myapp',{useNewUrlParser:true});
const app  = express();
app.set("view engine", 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.use(productRoute);
app.get('/',(req,res)=>{
    res.send('ssdafs');
});

app.listen(port,()=>{
    console.log("The app is running at port", port);
});