const PORT =8000
const express=require('express')
const cors=require('cors')
const axios=require('axios')
require('dotenv').config()
const app = express()
app.use(cors())

// const sendApiRequest = async (input_date) => {
//   let API_KEY = "bOUolWlWfgeKcEulISPn0g4WagO1DnU3NVJCCEy7";
//   //console.log(input_date)
//   let response = axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${API_KEY}&earth_date=${input_date}`)
//   .then(resp => {
//       //console.log(req);
//       console.log(resp);
//       console.log(resp.config.url)
// })
//}
app.get('/', (req, res) => {
 //var input_date = new Date(req.body).toISOstring();
// const a= sendApiRequest("2022-07-06");
 //console.log('date is ',req.input_date);
  res.send('Hello World, from express');
});
app.get('/results', (req,res) => {
  const sendApiRequest = async (input_date) => {
  let API_KEY = "bOUolWlWfgeKcEulISPn0g4WagO1DnU3NVJCCEy7Y";
  //console.log(input_date)
  let response = axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${API_KEY}&earth_date="2022-07-06"`)
  // .then(resp => {
  //     //console.log(req);
  //     console.log(resp);
  //     //console.log(resp.config.url)

      axios.request(sendApiRequest).then((response) => {
        res.json(response.data)

        }).catch((error) => {
            console.error(error)
      })
//})
}
res.send(" result hello")
});
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))