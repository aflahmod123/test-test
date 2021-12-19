function devip(ws) {

	if (ws._socket.remoteAddress == '::1' || ws._socket.remoteAddress == 'mope-io123.herokuapp.com/') {
		{
			ws.isdeveloper = true
			//PLAYER IS DEVLOPER

		}
	}




}

devip.prototype = {
};
module.exports = devip;