const fs = require('fs');

const { Transform } = require('stream');
let size = 0;
let chunkNum = 0;
const stream = fs.createReadStream('./data.bin', { highWaterMark: 7 });
const output = fs.createWriteStream('./new.bin')
const transform = new Transform({
  transform: (data, encoding, callback) => {
    ++chunkNum;
    const newData = []
    for (let i = 0; i < data.length - 1; i++) {
      newData.push(data[i])
    }
    size += data.length;
    callback(null, Buffer.from(newData))
  }
})

stream
  .setEncoding('binary')
  .pipe(transform)
  .pipe(output)
  .on('finish', () => {
    console.log('file size: ' + size)
    console.log('chunkNum: ' + chunkNum)
  })