function getAndPrintHTML () {

  var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response){

    var buffer = "";

    response.setEncoding('utf8');

    response.on('data', function (data){
      buffer = buffer.concat(data);
    });

    response.on('end', function() {
      console.log('Response stream complete.');
      console.log(buffer);
    });

  });

}

getAndPrintHTML();