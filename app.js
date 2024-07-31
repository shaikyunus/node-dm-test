const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

let data = [];

app.get('/data', (req, res) => {
  res.json({message: 'data fetched', success:data});
});
app.get('/', (req, res) => {
    res.json({message: 'welcome buddy'});
  });

app.post('/data', (req, res) => {
  data.push(req.body);
  res.status(201).json({message: 'data saved', success:req.body});
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
