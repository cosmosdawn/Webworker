onmessage = function(event) {
    if(event.data == 'ping'){
        postMessage('pong');
    }
}