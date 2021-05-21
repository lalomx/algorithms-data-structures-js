const axios = require('axios');
const fs = require('fs');

const { Transform } = require('stream');

const reportProgress = new Transform({
  transform(chunk, encoding, callback) {
    const data = chunk.toString().replace(/SAP/g, "Odoo")
    callback(null, data);
  },
  encoding: 'utf8',
});

axios.get('https://www.sap.com/belgique/index.html', {
  responseType: 'stream'
}).then(function (response) {
  response.data
    .pipe(reportProgress)
    .pipe(fs.createWriteStream('index.html'))
});