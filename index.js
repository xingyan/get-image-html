var path = require('path');
var reg = /(?!https?:)[\w\/\-.]+?\.(?:png|jpg|gif|bmp|jpe|jpeg|gif|ico|zip|rar|webp|swf)/ig;

module.exports = function(str) {
  if(str instanceof Buffer) str = str.toString();
  var ret = [];
  str.replace(reg, function(m) {
    m = path.normalize(m.trim());
    if(!m)  return;
    ret.push({
      path: m
    });
  });
  return ret;
}
