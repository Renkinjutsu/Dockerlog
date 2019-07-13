const http = require('http');
const fs = require('fs');
let containerCode = process.argv[2]

const options = {
    socketPath: '/var/run/docker.sock',
    path: `http:/v1.24/containers/${containerCode}/logs?stdout=1`,
};

const callback = res => {
    console.log(`STATUS: ${res.statusCode}`);
    res.setEncoding('utf8');
    res.on('data', data => console.log(data));
    res.on('error', data => console.error(data));
  };

const clientRequest = http.request(options, callback);
clientRequest.end();