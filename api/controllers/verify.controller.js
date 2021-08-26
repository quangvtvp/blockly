const fs = require('fs')
const { exec } = require('child_process');
const path = require('path')

function compileToHex(ino) {
    return new Promise(function (resolve, reject) {
        var compilePath = path.join(__dirname, './../../compilation/arduino')
        var sketchPath = path.join(__dirname, './../../compilation/arduino/sketch/sketch.ino')
        var libPath = path.join(__dirname, './../../compilation/arduino/libraries')

        fs.writeFileSync(sketchPath, ino)
        // exec('arduino-cli', (err, stdout, stderr) => {
        //     console.log(err)
        //     console.log(stdout)
        //     console.log(stderr)

        // })
        // try {
        //     var data = fs.readFileSync(path.join(__dirname, './../../compilation/test/Untitled.hex')
        //     )
        //     resolve({
        //         'hex': data,
        //         'stdout': 'done'
        //     })
        // } catch (err) {
        //     reject(`err: ${err}`)
        // }

        // exec('arduino-cli board listall',(err, stdout, stderr)=>{
        //     if (err)
        //     {
        //         console.error(`err: ${err}`)
        //     }
        //     if (stdout)
        //     {
        //         console.log(`stdout: ${stdout}`)
        //     }
        //     if (stderr)
        //     {
        //         console.log(`stderr: ${stderr}`)
        //     }
        // })

        exec('./compile.sh ' + sketchPath + ' ' + libPath, { cwd: compilePath }, function (err, stdout, stderr) {
            if (err) {
                console.error(`err: ${err}`)
                reject(`err: ${err}`)
            }
            if (stdout) {
                console.log(`stdout: ${stdout}`)
                try {
                    // var data = fs.readFileSync('./compilation/arduino/sketch/build/arduino.avr.nano/sketch.ino.hex')
                    resolve({
                      //  'hex': data,
                        'stdout': stdout
                    })
                } catch (err) {
                    reject(`err: ${err}`)
                }
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`)
                reject(`stderr: ${stderr}`)
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