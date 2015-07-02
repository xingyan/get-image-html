var getImg = require('../');
var should = require('should');
var fs = require('fs');
require('mocha');

var htmlStr = 'sdfsdf<img alt="" src="../test.jpg"/>\n<img src="../test22.jpg"/>sdfsd<img>';

describe('get-image-html()', function() {
  it('should get images path', function () {
    var res = getImg(htmlStr);
    res.should.be.instanceof(Array).and.have.lengthOf(2);
    res[0].should.eql({str: '<img alt="" src="../test.jpg"/>',path:'../test.jpg'});
    res[1].should.eql({str: '<img src="../test22.jpg"/>',path:'../test22.jpg'});
  });

  it('should support buffer', function (done) {
    fs.readFile('./test/1.html', function (err, data) {
      if (err) throw err;
      var res = getImg(data);
      res.should.be.instanceof(Array).and.have.lengthOf(8);
      done();
    });
    
  });

})
