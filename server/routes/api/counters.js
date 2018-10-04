const Counter = require('../../models/Counter');
const request = require('request');
const alphavantage = require('alphavantage');


module.exports = (app) => {
  app.post('/api/stocks', (req, res, next) => {

    const alpha = require('alphavantage')({ key: 'U4TE0HFDGI4LZ502' });

    // Simple examples
    alpha.data.intraday(`ACC`).then(data => {
      console.log(data);
    });

  var request = require('request');
  request('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=full&apikey=demo', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.

    const content = JSON.parse(body);

    res.send({
      success : true,
      message: 'Its Good',
      stockInfo : content['Time Series (Daily)']['2018-10-03']
    });

    

   
  });

  
   
      
  });

  

  

  

  
};
