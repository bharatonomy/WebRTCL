// place files you want to import through the `$lib` alias in this folder.

const servers = {iceservers} 



//Global State
let pc = new RTCPeerConnection(servers)
let localStream = null
let remoteStream = null