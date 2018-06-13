'use strict';

module.exports.hello = (event, context, callback) => {

  var postData = querystring.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1
  });

  post(postData).then(
    res => {
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Go Serverless v1.0! Your function executed successfully!',
          statusCode: res.statusCode,
          headers: res.headers,
          data: res.data.toString('utf8'),
          // input: event,
        }),
      };
      callback(null, response)
    },
  ).catch( err => {
    const response = {
      statusCode: 500,
      body: JSON.stringify({
        error: err
      }),
    };
    callback(null, response)
  } )

};

// ------ lib ------- //

const querystring = require('querystring');
const https = require('https');

/**
 * Sends a post request to api
 * @param  {Object} data - data object to post
 * @return {Promise} - responce object on resolve / error on reject
 */
function post(data){

  /**
   * Use the options to configure your request
   * @type {Object}
   */
  var options = {
    hostname: 'jsonplaceholder.typicode.com',
    port: 443,
    path: '/posts',
    method: 'POST',
    headers: {
     'Content-Type': 'application/x-www-form-urlencoded',
     'Content-Length': data.length
    }
  };

  return new Promise( (resolve, reject) => {

    var req = https.request(options, (res) => {
      res.on('data', (d) => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          data: d,
        })
      });
    });

    req.on('error', (e) => {
      reject(e);
    });

    req.write(data);
    req.end();

  } )
}
