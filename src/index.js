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

    $('#btn_term').on('click', function () {
        if (portserie.value == "com") {
            $("#message").modal("show")
            messageDiv.style.color = '#ff0000'
            messageDiv.innerHTML = Blockly.Msg.com2 + quitDiv
            return
        }
        if (localStorage.getItem("prog") == "python") { ipcRenderer.send("repl", "") } else { ipcRenderer.send("prompt", "") }
    })

    $('#btn_verify').on('click', function () {
        messageDiv.style.color = '#000000'
        messageDiv.innerHTML = 'Compiling.....' + '<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>' + quitDiv

        if (localStorage.getItem('content') == "off") {
            var data = editor.getValue()
        } else {
            var data = $('#pre_previewArduino').text()
        }
        fetch('https://' + window.location.host + "/api/verify", {
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
                }
                if (data.err) {
                    messageDiv.style.color = '#ff0000'
                    messageDiv.innerHTML = data.err + quitDiv
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });

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
})