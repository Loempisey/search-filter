// Route
const cors = require('cors')
const express = require('express');
const app = express(); //init express
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const connectionDB = require('./utils/db/connection')

app.use(cors({
    origin: '*',
    methods: ['GET',"POST","PUT","DELETE"],
  }))
connectionDB();

// const usersData = [{
//     "name": "Rajesh Berwal",
//     "age": 21,
//     "description": "Full Stack Developer"
//   },
//   {
//     "name": "Someone",
//     "age": 25,
//     "description": "Frontend Developer"
//   },
//   {
//     "name": "Another",
//     "age": 24,
//     "description": "Backend Developer"
//   }
// ];
// app.get('/api/v2/users', (req, res)=>{
//     res.json(usersData);
// });

// app.get('/', (req, res)=>{
//     res.status(200).send({message:"welcome to server"})
// })
// const morgan = require('morgan')
// const connectionDB = require('./utils/db/connection')
// cors provides Express middleware to enable CORS
// app.use(cors({
//     origin: '*',
//     methods: ['GET',"POST","PUT","DELETE"],
//   }))
// connectionDB();


dotenv.config({path: 'config.env'})
const PORT = process.env.PORT;

//Log request 
// app.use(morgan('tiny'))

//body parser
app.use(bodyParser.urlencoded())

// //accept json
app.use(express.json());

//Dynamic route (params,query)

// app.get('/id/:id/name/:name/email/:email',(req,res)=>{
//     const id = req.params.id
//     const name = req.params.name
//     const email = req.params.email
//     // console.log(name)
//     res.status(200).send({message: `ID:${id}, Name:${name}, Email:${email}`})
// })


//Query (get request)
// app.get('/user',(req,res)=>{
//     const query = req.query
//     res.status(200).send({message: "Display user information",query})
// })

//load all routes
require('./routes/user.routes')(app)
// require('./routes/contact.routes')(app)
// require('./routes/history.routes')(app)
// require('./routes/package.routes')(app)
// require('./routes/users.routes')(app)
// require('./routes/product.routes')(app)
// require('./routes/customer.routes')(app)
// app.post('/user',(req,res)=>{
//     const body = req.body
//     res.status(200).send({message: body})
// })

//Create post request (class)

// app.post('/class',(req,res)=>{
//     const body = req.body
//     res.status(200).send({message: body})
// })
// if route not found 
// app.get("*",(req,res)=>{
//     res.send({message: "Not found route."})
// })

app.listen(PORT,()=>{
    console.log(`======= Server is starting... ====== http://localhost:${PORT}/`)
})

