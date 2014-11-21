var fs = require('fs');
fs.appendFile('myOutput2.txt','Hello World\n',function (err) {
if (err) throw err;
console.log('A new line of Hello World has been appended to MyOutput2.txt.');
});

