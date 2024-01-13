// place files you want to import through the `$lib` alias in this folder.

const servers = {
	iceServers: [{ urls: ['stun:stun4.l.google.com:19302', 'stun:stun3.l.google.com:19302'] }],
	iceCandidatePoolSize: 10
};

//Global State
let pc = new RTCPeerConnection(servers);
let localStream = null;
let remoteStream = null;

// Frontend components.
const webcamVideo = document.getElementById('webcamVideo');
const remoteVideo = document.getElementById('remoteVideo');
const callButton = document.getElementById('callButton');
const callInput = document.getElementById('callInput');
const webcamButton = document.getElementById('webcamButton');
const answerButton = document.getElementById('answerButton');
const hangupButton = document.getElementById('hangupButton');

// Setup media resources
webcamButton?.onclick = async () => {
	localStream = await navigator;
};
