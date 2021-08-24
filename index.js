const express = require('express')
const path = require('path')
const { exec } = require('child_process');


const apiRouter = require('./api/routes/verify.route')

const app = express()
const port = process.env.port || 8080

app.set('views', path.join(__dirname, 'dist'))

app.use(express.static('dist'))

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.render('index.html')
})

app.get('/blockly', (req, res) => {
    res.sendFile(path.join(__dirname) + '/dist/index.html')
})

app.use('/api', apiRouter)

app.post('/api/verify', (req, res) => {

    res.send('hello')
})

function init() {
    var compilePath = path.join(__dirname, './compilation/arduino')

    exec('arduino-cli version',function (err, stdout, stderr) {
        if (err) {
            console.error(`ERROR: ${err}`)
        }
        if (stdout) {
            console.log(`stdout: ${stdout}`)
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`)
        }
    })


    exec('chmod +x compile.sh', { cwd: compilePath }, function (err, stdout, stderr) {
        if (err) {
            console.error(`ERROR: ${err}`)
        }
      
    })
}

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
    init()
})

