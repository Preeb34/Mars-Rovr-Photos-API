const express = require('express');
// const morgan = require('morgan');
// const apicache = require('apicache');
// const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
// app.use(morgan('dev'));
// let cache = apicache.middleware;
// app.use(cache('5 minutes'));

app.get('/', (req, res) => {

  const a = sendApiRequest(input_date);
  res.send('Hello World, from express');
});

app.post('/api/', function (req, res) {
  console.log(req.query.date)

  let API_KEY = "bOUolWlWfgeKcEulISPn0g4WagO1DnU3NVJCCEy7";
  let response = axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${API_KEY}&earth_date=${req.query.date}`)
    .then(resp => {
      res.send(resp.data)
      console.log(resp)
    })

});

app.listen(port, () => console.log(`listening on port ${port}!`))


