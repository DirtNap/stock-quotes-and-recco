var server = require('../server');

describe('server', function () {
  before(function () {
    server.listen(8080);
  });

  after(function () {
    server.close();
  });
});


var assert = require('assert'),
    http = require('http');

describe('/', function () {
  it('should return 200', function (done) {
    http.get('http://localhost:8080', function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });

  it('should say putYahooAPIResponseHere', function (done) {
    http.get('http://localhost:8080', function (res) {
      var data = '';

      res.on('data', function (chunk) {
        data += chunk;
      });

      res.on('end', function () {
        assert.equal('putYahooAPIResponseHere', data);
        done();
      });
    });
  });

  it('should show AAPL and day quote', function(done) {
    http.get('http://localhost:8080/AAPL', function (res){
      var data = '';
      res.on('data', function (chunk){
        data+=chunk;
      });
      res.on('end', function() {
        assert.equal('AAPL', JSON.parse(data).symbol);
        assert.equal('Apple Inc.', JSON.parse(data).issuer);
        done();
      })
    })
  })
});
