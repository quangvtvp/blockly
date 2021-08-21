import { AgentController } from "./agentController"

var agentController = new AgentController()

agentController.findAgent().then(() => {
    agentController.agentInit()
    agentController.agentHandlerMessage()
    agentController.downloadTool()
    console.log(agentController.PORT)
    console.log(agentController.ws)
    console.log(agentController.http)
})

window.addEventListener('load', function load(event) {
    var quitDiv = '<button type="button" class="close" data-dismiss="modal" aria-label="Close">&#215;</button>'
    var portserie = document.getElementById('portserie')
    var opt = document.createElement('option')
    opt.value = "com"
    opt.text = Blockly.Msg.com1
    portserie.appendChild(opt)


    var messageDiv = document.getElementById('messageDIV')

    localStorage.setItem("verif", false)
    document.getElementById('versionapp').textContent = " OttoBlockly v"

    // function uploadOK() {
    //     messageDiv.style.color = '#009000'
    //     messageDiv.innerHTML = Blockly.Msg.upload + ': OK' + quitDiv
    // }

    $('#btn_forum').on('click', function () {
        window.open('https://wikifactory.com/+OttoDIY/forum')
    })
    $('#btn_site').on('click', function () {
        window.open('https://www.ottodiy.com/')
    })
    $('#btn_contact').on('click', function () {
        window.open('https://www.ottodiy.com/#contact-us')
    })
    $('#portserie').mouseover(function () {

        agentController.socket.emit('command', 'list')

        //     sp.list().then(ports => {
        //         var nb_com = localStorage.getItem("nb_com"), menu_opt = portserie.getElementsByTagName('option')
        //         if (ports.length > nb_com) {
        //             ports.forEach(function (port) {
        //                 if (port.vendorId) {
        //                     var opt = document.createElement('option')
        //                     opt.value = port.comName
        //                     opt.text = port.comName
        //                     portserie.appendChild(opt)
        //                     localStorage.setItem("com", port.comName)
        //                 }
        //             })
        //             localStorage.setItem("nb_com", ports.length)
        //             localStorage.setItem("com", portserie.options[ 1 ].value)
        //         }
        //         if (ports.length < nb_com) {
        //             while (menu_opt[ 1 ]) {
        //                 portserie.removeChild(menu_opt[ 1 ])
        //             }
        //             localStorage.setItem("com", "com")
        //             localStorage.setItem("nb_com", ports.length)
        //         }
        //     })
    })

    $('#btn_copy').on('click', function () {
        clipboard.writeText($('#pre_previewArduino').text())
    })
    $('#btn_bin').on('click', function () {
        if (localStorage.getItem('verif') == "false") {
            $("#message").modal("show")
            messageDiv.style.color = '#000000'
            messageDiv.innerHTML = Blockly.Msg.verif + quitDiv
            return
        }
        localStorage.setItem("verif", false)
        ipcRenderer.send('save-bin')
    })
    // $.ajax({
    //     cache: false,
    //     url: "../config.json",
    //     dataType: "json",
    //     success: function (data) {
    //         $.each(data, function (i, update) {
    //             if (update == "true") {
    //                 $('#verifyUpdate').prop('checked', true)
    //                 checkBox.dispatchEvent(new Event('change'))
    //                 ipcRenderer.send("version", "")
    //             } else {
    //                 $('#verifyUpdate').prop('checked', false)
    //                 checkBox.dispatchEvent(new Event('change'))
    //             }
    //         })
    //     }
    // })

    // checkBox.addEventListener('change', function (event) {
    //     if (event.target.checked) {
    //         fs.writeFile('config.json', '{ "update": "true" }', function (err) {
    //             if (err) return console.log(err)
    //         })
    //     } else {
    //         fs.writeFile('config.json', '{ "update": "false" }', function (err) {
    //             if (err) return console.log(err)
    //         })
    //     }
    // })

    // sp.list().then(ports => {
    //     var opt = document.createElement('option')
    //     opt.value = "com"
    //     opt.text = Blockly.Msg.com1
    //     portserie.appendChild(opt)
    //     ports.forEach(function (port) {
    //         if (port.vendorId) {
    //             var opt = document.createElement('option')
    //             opt.value = port.comName
    //             opt.text = port.comName
    //             portserie.appendChild(opt)
    //         }
    //     })
    //     localStorage.setItem("nb_com", ports.length)
    //     if (portserie.options.length > 1) {
    //         portserie.selectedIndex = 1
    //         localStorage.setItem("com", portserie.options[ 1 ].value)
    //     } else {
    //         localStorage.setItem("com", "com")
    //     }
    // })
    // $('#btn_version').on('click', function () {
    //     $('#aboutModal').modal('hide')
    //     ipcRenderer.send("version", "")
    // })

    $('#btn_term').on('click', function () {
        if (portserie.value == "com") {
            $("#message").modal("show")
            messageDiv.style.color = '#ff0000'
            messageDiv.innerHTML = Blockly.Msg.com2 + quitDiv
            return
        }
        if (localStorage.getItem("prog") == "python") { ipcRenderer.send("repl", "") } else { ipcRenderer.send("prompt", "") }
    })

    // $('#btn_factory').on('click', function () {
    //     ipcRenderer.send("factory", "")
    // })
    $('#btn_verify').on('click', function () {
        messageDiv.style.color = '#000000'
        messageDiv.innerHTML = 'Compiling.....' + '<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>' + quitDiv

        if (localStorage.getItem('content') == "off") {
            var data = editor.getValue()
        } else {
            var data = $('#pre_previewArduino').text()
        }
        fetch('http://' + window.location.host + "/api/verify", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "ino": data }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.stdout) {
                    messageDiv.style.color = '#009000'
                    messageDiv.innerHTML = data.stdout + quitDiv
                    localStorage.setItem('hexFile', JSON.stringify(data.hex))
                    localStorage.setItem('verif', true)

                    // console.log('Success:', data.hex);       
                }
                if (data.err) {
                    messageDiv.style.color = '#ff0000'
                    messageDiv.innerHTML = data.err + quitDiv
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });


        //     var carte = localStorage.getItem('card')
        //     console.log(carte)
        //     var prog = localStorage.getItem('prog')
        //     var com = portserie.value
        //     messageDiv.style.color = '#000000'
        //     messageDiv.innerHTML = Blockly.Msg.check + '<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>'
        //     if (prog == "python") {
        //         fs.writeFile('./compilation/python/py/sketch.py', data, function (err) {
        //             if (err) return console.log(err)
        //         })
        //         exec('python -m pyflakes ./py/sketch.py', { cwd: "./compilation/python" }, function (err, stdout, stderr) {
        //             if (stderr) {
        //                 rech = RegExp('token')
        //                 if (rech.test(stderr)) {
        //                     messageDiv.style.color = '#ff0000'
        //                     messageDiv.innerHTML = Blockly.Msg.error + quitDiv
        //                 } else {
        //                     messageDiv.style.color = '#ff0000'
        //                     messageDiv.innerHTML = err.toString() + quitDiv
        //                 }
        //                 return
        //             }
        //             messageDiv.style.color = '#009000'
        //             messageDiv.innerHTML = Blockly.Msg.check + ': OK' + quitDiv
        //         })
        //     } else {
        //         fs.writeFile('./compilation/arduino/ino/sketch.ino', data, function (err) {
        //             if (err) return console.log(err)
        //         })
        //         exec('verify.bat ' + carte, { cwd: './compilation/arduino' }, function (err, stdout, stderr) {
        //             if (stderr) {
        //                 rech = RegExp('token')
        //                 if (rech.test(stderr)) {
        //                     messageDiv.style.color = '#ff0000'
        //                     messageDiv.innerHTML = Blockly.Msg.error + quitDiv
        //                 } else {
        //                     messageDiv.style.color = '#ff0000'
        //                     messageDiv.innerHTML = err.toString() + quitDiv
        //                 }
        //                 return
        //             }
        //             messageDiv.style.color = '#009000'
        //             messageDiv.innerHTML = Blockly.Msg.check + ': OK' + quitDiv
        //         })
        //     }
        //     localStorage.setItem("verif", true)
    })

    $('#btn_flash').on('click', function () {

        var com = localStorage.getItem('com')
        var hex = localStorage.getItem('hexFile')

        console.log(JSON.parse(hex).data)
        console.log(com)
        console.log(localStorage.getItem('verif'))
        if (com) {
            if (localStorage.getItem('verif') == 'true') {
                messageDiv.style.color = '#000000'
                messageDiv.innerHTML = 'Uploading...' + '<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>' + quitDiv
                agentController.upload(JSON.parse(hex).data, com)
            }
            else {
                messageDiv.style.color = '#000000'
                messageDiv.innerHTML = 'Compiling...' + '<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>' + quitDiv

                if (localStorage.getItem('content') == "off") {
                    var data = editor.getValue()
                } else {
                    var data = $('#pre_previewArduino').text()
                }
                fetch('http://' + window.location.host + "/api/verify", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ "ino": data }),
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.stdout) {
                            messageDiv.innerHTML = data.stdout + quitDiv
                            localStorage.setItem('hexFile', JSON.stringify(data.hex))
                            localStorage.setItem('verif', true)
                            messageDiv.style.color = '#000000'
                            messageDiv.innerHTML = 'Uploading...' + '<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>' + quitDiv
                            agentController.upload(JSON.parse(hex).data, com)
                        }
                        if (data.err) {
                            messageDiv.style.color = '#ff0000'
                            messageDiv.innerHTML = data.err + quitDiv
                        }
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
            }

        }
        else {

            messageDiv.innerHTML = Blockly.Msg.com2 + quitDiv

        }

        //     var data = $('#pre_previewArduino').text()
        //     var carte = localStorage.getItem('card')
        //     var prog = profile[ carte ].prog
        //     var speed = profile[ carte ].speed
        //     var cpu = profile[ carte ].cpu
        //     var com = portserie.value
        //     if (com == "com") {
        //         messageDiv.style.color = '#ff0000'
        //         messageDiv.innerHTML = Blockly.Msg.com2 + quitDiv
        //         return
        //     }
        //     if (localStorage.getItem('verif') == "false") {
        //         messageDiv.style.color = '#000000'
        //         messageDiv.innerHTML = Blockly.Msg.check + '<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>'
        //         fs.writeFile('./compilation/arduino/ino/sketch.ino', data, function (err) {
        //             if (err) return console.log(err)
        //         })
        //         exec('verify.bat ' + carte, { cwd: './compilation/arduino' }, function (err, stdout, stderr) {
        //             if (stderr) {
        //                 rech = RegExp('token')
        //                 if (rech.test(stderr)) {
        //                     messageDiv.style.color = '#ff0000'
        //                     messageDiv.innerHTML = Blockly.Msg.error + quitDiv
        //                 } else {
        //                     messageDiv.style.color = '#ff0000'
        //                     messageDiv.innerHTML = err.toString() + quitDiv
        //                 }
        //                 return
        //             }
        //             messageDiv.style.color = '#009000'
        //             messageDiv.innerHTML = Blockly.Msg.check + ': OK' + quitDiv

        //             messageDiv.style.color = '#000000'
        //             messageDiv.innerHTML = Blockly.Msg.upload + '<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>'

        //             exec('flash.bat ' + cpu + ' ' + prog + ' ' + com + ' ' + speed, { cwd: './compilation/arduino' }, function (err, stdout, stderr) {
        //                 if (err) {
        //                     messageDiv.style.color = '#ff0000'
        //                     messageDiv.innerHTML = err.toString() + quitDiv
        //                     return
        //                 }
        //                 uploadOK()
        //             })
        //         })
        //         localStorage.setItem("verif", false)
        //         return
        //     }
        //     messageDiv.style.color = '#000000'
        //     messageDiv.innerHTML = Blockly.Msg.upload + '<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>'
        //     if (prog == "python") {
        //         if (cpu == "cortexM0") {
        //             var cheminFirmware = "./compilation/python/firmware.hex"
        //             var fullHexStr = ""
        //             exec('wmic logicaldisk get volumename', function (err, stdout) {
        //                 if (err) return console.log(err)
        //                 localStorage.setItem("volumename", stdout.split('\r\r\n').map(value => value.trim()))
        //             })
        //             exec('wmic logicaldisk get name', function (err, stdout) {
        //                 if (err) return console.log(err)
        //                 localStorage.setItem("name", stdout.split('\r\r\n').map(value => value.trim()))
        //             })
        //             var volume = localStorage.getItem("volumename")
        //             var drive = localStorage.getItem("name")
        //             var volumeN = volume.split(',')
        //             var driveN = drive.split(',')
        //             var count = volumeN.length
        //             var disk = ""
        //             for (var i = 0; i < count; i++) {
        //                 if (volumeN[ i ] == "MICROBIT") disk = driveN[ i ]
        //             }
        //             if (disk != "") {
        //                 fs.readFile(cheminFirmware, function (err, firmware) {
        //                     firmware = String(firmware)
        //                     fullHexStr = upyhex.injectPyStrIntoIntelHex(firmware, data)
        //                     fs.writeFile(disk + '\sketch.hex', fullHexStr, function (err) {
        //                         if (err) {
        //                             messageDiv.style.color = '#ff0000'
        //                             messageDiv.innerHTML = err.toString() + quitDiv
        //                         }
        //                     })
        //                 })
        //                 setTimeout(uploadOK, 7000)
        //             } else {
        //                 messageDiv.style.color = '#000000'
        //                 messageDiv.innerHTML = 'Connecter la carte microBit !' + quitDiv
        //             }
        //         } else {
        //             exec('python -m ampy -p ' + com + ' -b 115200 -d 1 run --no-output ./py/sketch.py', { cwd: "./compilation/python" }, function (err, stdout, stderr) {
        //                 if (err) {
        //                     messageDiv.style.color = '#ff0000'
        //                     messageDiv.innerHTML = err.toString() + quitDiv
        //                     return
        //                 }
        //                 uploadOK()
        //             })
        //         }
        //     } else {
        //         exec('flash.bat ' + cpu + ' ' + prog + ' ' + com + ' ' + speed, { cwd: './compilation/arduino' }, function (err, stdout, stderr) {
        //             if (err) {
        //                 messageDiv.style.color = '#ff0000'
        //                 messageDiv.innerHTML = err.toString() + quitDiv
        //                 return
        //             }
        //             uploadOK()
        //         })
        //     }
        //     localStorage.setItem("verif", false)
    })

    $('#btn_saveino').on('click', function () {
        if (localStorage.getItem("prog") == "python") { ipcRenderer.send('save-py') } else { ipcRenderer.send('save-ino') }
    })
    $('#btn_saveXML').on('click', function () {
        if (localStorage.getItem("content") == "on") {
            ipcRenderer.send('save-bloc')
        } else {
            if (localStorage.getItem("prog") == "python") { ipcRenderer.send('save-py') } else { ipcRenderer.send('save-ino') }
        }
    })
    ipcRenderer.on('saved-ino', function (event, path) {
        var code = $('#pre_previewArduino').text()
        if (path === null) {
            return
        } else {
            fs.writeFile(path, code, function (err) {
                if (err) return console.log(err)
            })
        }
    })
    ipcRenderer.on('saved-py', function (event, path) {
        var code = $('#pre_previewArduino').text()
        if (path === null) {
            return
        } else {
            fs.writeFile(path, code, function (err) {
                if (err) return console.log(err)
            })
        }
    })
    ipcRenderer.on('saved-bloc', function (event, path) {
        if (path === null) {
            return
        } else {
            var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace)
            var toolbox = localStorage.getItem("toolbox")
            if (!toolbox) {
                toolbox = $("#toolboxes").val()
            }
            if (toolbox) {
                var newel = document.createElement("toolbox")
                newel.appendChild(document.createTextNode(toolbox))
                xml.insertBefore(newel, xml.childNodes[ 0 ])
            }
            var toolboxids = localStorage.getItem("toolboxids")
            if (toolboxids === undefined || toolboxids === "") {
                if ($('#defaultCategories').length) {
                    toolboxids = $('#defaultCategories').html()
                }
            }
            var code = Blockly.Xml.domToPrettyText(xml)
            fs.writeFile(path, code, function (err) {
                if (err) return console.log(err)
            })
        }
    })
    // ipcRenderer.on('saved-bin', function (event, path) {
    //     if (path === null) {
    //         return
    //     } else {
    //         var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace)
    //         var toolbox = localStorage.getItem("toolbox")
    //         if (!toolbox) {
    //             toolbox = $("#toolboxes").val()
    //         }
    //         if (toolbox) {
    //             var newel = document.createElement("toolbox")
    //             newel.appendChild(document.createTextNode(toolbox))
    //             xml.insertBefore(newel, xml.childNodes[ 0 ])
    //         }
    //         var toolboxids = localStorage.getItem("toolboxids")
    //         if (toolboxids === undefined || toolboxids === "") {
    //             if ($('#defaultCategories').length) {
    //                 toolboxids = $('#defaultCategories').html()
    //             }
    //         }
    //         var code = Blockly.Xml.domToPrettyText(xml)
    //         var res = path.split(".")
    //         fs.writeFile(res[ 0 ] + '.bloc', code, function (err) {
    //             if (err) return console.log(err)
    //         })
    //         fs.copyFile('./compilation/arduino/build/sketch.ino.with_bootloader.hex', res[ 0 ] + '_with_bootloader.hex', (err) => { if (err) throw err })
    //         fs.copyFile('./compilation/arduino/build/sketch.ino.hex', res[ 0 ] + '.hex', (err) => { if (err) throw err })
    //         fs.copyFile('./compilation/arduino/ino/sketch.ino', res[ 0 ] + '.ino', (err) => { if (err) throw err })
    //     }
    // })
})