var path = require('path');
var reg = /(['"])\s*((?!https?:\/\/)[\w\-\/.]+?\.(?:png|jpg|gif|bmp|jpe|jpeg|webp|swf|ico))\s*\1/ig;
module.exports = function(str) {
  if(str instanceof Buffer) str = str.toString();
  var ret = [];
  str.replace(reg, function(match, quote, imgpath) {
    imgpath = path.normalize(imgpath.trim());
    imgpath && ret.push({"path": imgpath});
  });
  return ret;
}