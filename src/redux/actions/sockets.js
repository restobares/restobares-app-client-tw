import io from 'socket.io-client';
const socket = io('https://restobares-app-api.herokuapp.com');

function joinResto(idResto) {
	  socket.emit('joinResto',idResto);
	}
	//The diner did something, we tell the server
	function tableSend() {
		socket.emit('tableSend');
	}
	function staffListen(cb) {
		socket.on('staffListen', () => {
			cb();
		})
	}
	//The staff did something, we tell the server
	function staffSend() {
		socket.emit('staffSend');
	}
	function tableListen(cb) {
		socket.on('tableListen', () => {
			cb();
		})
	}

	// Packing the sockets in a single object.
	// So it's easier to carry along the Components.
	export const sockets = {
		joinResto,
		tableSend,
		tableListen,
		staffSend,
		staffListen,
	}
