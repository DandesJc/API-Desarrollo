const express = require('express')
const app = express()
const router =  require("./routes/index.routes")
const bodyParser = require("body-parser")
const sequelize = require('./configDB')

const models = require("./models/index.model")

const port = process.env.PORT || 8080

//app.use('/', router);

app.use(express.json())
app.use('/api', router);
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

sequelize.sync().then();

app.get('/api', function(req, res) {
    res.json({mensaje: "Server is up!"});
});

app.listen(port)
console.log(`API escuchando en el http://localhost:${port}`)

// router.get('/', function(req, res) {
//     res.json({message: 'Welcome to our API!'})
// })





// router.post('/', function(req, res) {
//     res.json({mensaje: req.body.nombre})
// })