var fs = require('fs');

fs.unlink('demotextfile.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
