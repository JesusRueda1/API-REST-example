const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const routes = require('./routes.js')

const app = express();
const dboptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'poo'
}
app.set('port', process.env.PORT || 9000);

//middlewares ------------------------

app.use(myconn(mysql,dboptions, 'single'))
app.use(express.json())
// routes -------------------------
app.get('/', (req,res)=>{
    res.send('Welcome to my API')
})


app.use('/api', routes)

// server runnig ------------------
app.listen(app.get('port'), ()=>{
    console.log("server running on port",app.get('port'))
})
