module.exports = function getHTML (options, callback) {
var https = require('https');

  https.get(options, function (response){

    var buffer = "";

    response.setEncoding('utf8');

    response.on('data', function (data){
      buffer = buffer.concat(data);
    });

    response.on('end', function() {
      console.log('Response stream complete.');
      callback(buffer);
    });
  });
};

