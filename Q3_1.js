var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'It is a full scholarship based Accelerator program for Coding in Jaffna, Sri Lanka targeting students who has completed Advanced Level examinations and don’t have access to university education or any other form of vocational education. It is aimed to provide the necessary training to enter Computer Software industry or to start an IT startup.', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
