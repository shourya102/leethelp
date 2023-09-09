import express from 'express';
import body_parser from 'body-parser';
import ejs from 'ejs';
const app= express();


app.set('views-engine', ejs);
app.use('/public', express.static('public'));
app.use('/res', express.static('res'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(3000, ()=>{
    console.log("Server is running at port 3000");
})



