const http = require('http');

const options = {
    socketPath: '/var/run/docker.sock',
    path: 'http:/v1.24/containers/42377cf77289/logs?stdout=1',
};

const callback = res => {
    console.log(`STATUS: ${res.statusCode}`);
    res.setEncoding('utf8');
    res.on('data', data => console.log(data));
    res.on('error', data => console.error(data));
  };

const clientRequest = http.request(options, callback);
clientRequest.end();