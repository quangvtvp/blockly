import io from "socket.io-client";

const LOOPBACK_ADDRESS = `http://127.0.0.1`;
const LOOKUP_PORT_START = 8991;
const LOOKUP_PORT_END = 9000;

const commandline = "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" -v  -patmega328p -carduino \"-P{serial.port}\" -b57600 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
const signature = "59904ad885349bb2a675fe5dc36f65714198ad43714cdcd277555886cac6bf449feb0937b7e44a4e79add4b36b8db9774424591efc63e694427e1bf5458ff2fadcbc1a3c555f0f7e3eb9cdfc6add62203be6509f5a7de9eadafda687a789afc2346342b6115318ca4fe4783e2e5c63ca4ad98af5ddcb4b8ab81eca611ead6f16d0a398ae5b51f8add985a72037507cc45af948798e744f36aded2576db64f26a16b059fc02d1a258564630e8877312edad95eee8868a91ef3e36bed8a4ad75bb8d930459921333e757c879dc95c710f23b808477168dc3710f0e6fde842b12a890cd2be554302afb76636f90bec311623782f0544c036a364bfcb0e506e9195c"

// var PORT;
// var socket;
// async function findAgent() {
//     localStorage.removeItem('agentInfo')
//     localStorage.setItem('agentStatus', 'Not Found')
//     localStorage.setItem('channelStatus', 'Not connected')
//     for (let port = LOOKUP_PORT_START; port < LOOKUP_PORT_END; port += 1) {
//         try {
//             const response = await fetch(`${LOOPBACK_ADDRESS}:${port}/info`)
//             if (response.status == '200') {
//                 PORT = port
//                 await response.json().then((data) => {
//                     localStorage.setItem('agentStatus', 'Found')
//                     localStorage.setItem('agentInfo', JSON.stringify(data))
//                 })
//                 return Promise.resolve()
//             }
//         }
//         catch (err) {
//             // console.log(err)
//         }
//     }
//     return Promise.reject()
// }

// module.exports.getPorts = function () {
//     if (socket.connected) {
//         socket.emit('command', 'list');
//     }
//     else {
//         socket.connected()
//     }
//     // fetch(`${LOOPBACK_ADDRESS}:${PORT}/info`)
//     // .then((response)=>response.json())
//     // .then((data)=>{
//     //     var address= data.ws
//     //     var socket=io(address)
//     //     socket.on()
//     // })
//     // .catch((err)=>{

//     // })
// }

// function agentInit(address) {
//     console.log(address)
//     socket = io(address)
//     socket.on('connect', function () {
//         console.log('Connected success')
//         localStorage.setItem('channelStatus', 'Connected')
//         socket.on('message', function (message) {
//             // Your code to handle messages
//             var data = JSON.parse(message)
//             console.log(data)
//             // console.log(message)
//         })
//     })
// }

function handlerPorts(data) {
    if ((data.Ports) && (!data.Network)) {
        var portserie = document.getElementById('portserie')
        var menu_opt = portserie.getElementsByTagName('option')

        var hasSelectedCom = false
        var selectedCom = menu_opt[ portserie.selectedIndex ]

        for (let i = 1; i < menu_opt.length; i++) {
            if (i != portserie.selectedIndex) {
                portserie.removeChild(menu_opt[ i ])
            }
        }
        data.Ports.forEach(element => {
            if (selectedCom.text != element.Name) {
                var opt = document.createElement('option')
                opt.value = element.Name
                opt.text = element.Name
                portserie.appendChild(opt)
            } else {
                hasSelectedCom = true
            }
        });
        if (!hasSelectedCom) {
            localStorage.removeItem('com')
        }

        if ((!hasSelectedCom) && (portserie.selectedIndex > 0)) {
            portserie.removeChild(selectedCom)
        }
    }
    return;
}

function handlerFlashStatus(data) {
    var messageDiv = document.getElementById('messageDIV')
    var quitDiv = '<button type="button" class="close" data-dismiss="modal" aria-label="Close">&#215;</button>'
    if ((data.ProgrammerStatus == 'Done') && (data.Flash == "Ok")) {
        messageDiv.style.color = '#009000'
        messageDiv.innerHTML = Blockly.Msg.upload + ': OK' + quitDiv
    }
    if (data.ProgrammerStatus == 'Error') {
        messageDiv.style.color = '#ff0000'
        messageDiv.innerHTML = data.Msg + quitDiv
    }

}



export class AgentController {
    constructor () {
        this.socket = null
    }
    async findAgent() {
        localStorage.removeItem('agentInfo')
        localStorage.setItem('agentStatus', 'Not Found')
        localStorage.setItem('channelStatus', 'Not connected')
        for (let port = LOOKUP_PORT_START; port < LOOKUP_PORT_END; port += 1) {
            try {
                const response = await fetch(`${LOOPBACK_ADDRESS}:${port}/info`)
                if (response.status == '200') {
                    this.PORT = port
                    await response.json().then((data) => {
                        this.ws = data.ws
                        this.http = data.http
                        localStorage.setItem('agentStatus', 'Found')
                        localStorage.setItem('agentInfo', JSON.stringify(data))
                    })
                    return Promise.resolve()
                }
            }
            catch (err) {
                // console.log(err)
            }
        }
        return Promise.reject()
    }

    agentInit() {
        this.socket = io(this.ws)
        this.socket.on('connect', function () {
            console.log('Connected success')
        })
        this.socket.emit('command', 'list')

    }
    agentHandlerMessage() {
        this.socket.on('message', function (message) {
            console.log(message)
            var data = JSON.parse(message)

            if (data.OS) {
                this.OS = data.OS
            }
            if (data.Hostname) {
                this.Hostname = data.Hostname
            }
            handlerPorts(data)
            handlerFlashStatus(data)

        })
    }

    async upload(hex, com) {
        var payload = {
            "board": "arduino:avr:nano:cpu=atmega328old",
            "port": com,
            "commandline": commandline,
            "signature": signature,
            "hex": hex,
            "filename": "Blink.ino.hex",
            "extrafiles": [],
            "extra": {
                "auth": {
                    "username": null,
                    "password": null,
                    "private_key": null,
                    "port": null
                },
                "wait_for_upload_port": false,
                "use_1200bps_touch": false,
                "network": false
            }
        }

        fetch(`${this.http}/upload`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(data => {
                return Promise.resolve('Success:', data)
            })
            .catch((error) => {
                return Promise.reject('Error: ', error)
            });
    }

    downloadTool() {
        if (this.OS = 'windows') {
            this.socket.emit('command', 'downloadtool windows-drivers latest arduino keep')
            this.socket.emit('command', 'downloadtool bossac 1.7.0 arduino keep')
            this.socket.emit('command', 'downloadtool fwupdater latest arduino keep')
            this.socket.emit('command', 'downloadtool rp2040tools latest arduino keep')
        }
    }

}

