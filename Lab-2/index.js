const express = require('express')
const app = express()
const port = 3001


/*app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(resquest,response) =>{
    response.send('welcome to twitter web page')

})
app.get('/instagram',(resquest,response) =>{
    response.send('welcome to insta web page')
})
app.get('/whatsapp',(resquest,response) =>{
    response.send('welcome to whatsapp web page')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})*/

var sampleObj1 = {
    "name" : "ram",
    "age" : 25,
    "place" : "landon"
}

app.get('/example',(resquest,response) =>{
    response.status(215).send(sampleObj1)
})
app.get('/:name',(req,res) => {
    const outputName = req.params.name
    res.send({msg:'welcome ${outputName}'})
    console.log(outputName);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  