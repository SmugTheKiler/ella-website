const fs = require('fs')
function makeLog(data) {
    fs.appendFile('../log.txt', `[${new Date().toLocaleString()}] ${data}\n`, (err) => {});
    console.log(`New user loged in! | IP: ${data}`)
}

module.exports = makeLog; 