const express = require('express')
require('dotenv').config()
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/youtube',(req,res)=>
{
res.redirect('https://www.youtube.com');
});
app.get('/chatgpt',(req,res)=>
{
    res.redirect('https://chatgpt.com');
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
