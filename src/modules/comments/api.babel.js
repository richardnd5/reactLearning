import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

let comments = [
  {
    name: 'john smith',
    message: 'hello world'
  }
]

app.get('/comments', (req, res) => {

  res.send(comments)

})

app.post('/comments', (req, res) => {

  comments.push(req.body);

  res.send(comments)

})

app.listen(PORT, (err) => {
  if(err) {
    console.error(err)
  }

  console.info(`app listening on http://localhost:${PORT}`)
})
