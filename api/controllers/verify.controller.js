const fs = require('fs')
const { exec } = require('child_process');
const path = require('path')

function updateCore() {
    return new Promise((resolve, reject) => {

    })
}

function compileToHex(ino) {
    return new Promise(function (resolve, reject) {
        var compilePath = path.join(__dirname, './../../compilation/arduino')
        var sketchPath = path.join(__dirname, './../../compilation/arduino/sketch/sketch.ino')
        var libPath = path.join(__dirname, './../../compilation/arduino/libraries')

        fs.writeFileSync(sketchPath, ino)

        exec('./compile.sh ' + sketchPath + ' ' + libPath, { cwd: compilePath }, function (err, stdout, stderr) {

            var error
            if (err) {
                error = 'err: ' + String(err)
            }
            if (stderr) {
                error = 'stderr: ' + String(stderr)
            }
            if (error) {
                console.error(error)
                reject(error)
            }
            
            if (stdout) {
                console.log(`stdout: ${stdout}`)
                try {
                    var data = fs.readFileSync('./compilation/arduino/sketch/build/arduino.avr.nano/sketch.ino.hex')
                    resolve({
                        'hex': data,
                        'stdout': stdout
                    })
                } catch (err) {
                    reject(`err: ${err}`)
                }
            }
        })
    })
}
module.exports.verify = function (req, res) {
    compileToHex(req.body.ino)
        .then((value) => {
            res.json(value)
        })
        .catch((err) => {
            res.json({
                'err': err
            })
            console.log(err)
        })

}