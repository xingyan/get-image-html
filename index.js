var path = require('path');
var reg = /<img\s(?:\s*|[^>]*\s)src\s*=\s*('|")([^>]*)\s*\1\s*\/?>/ig;

module.exports = function(str) {
  if(str instanceof Buffer) str = str.toString();
  var ret = [];
  str.replace(reg, function(matchStr, p1, p2) {
    p2 = path.normalize(p2.trim());
    if(!p2)  return;
    ret.push({
      str: matchStr,
      path: p2
    });
  });
  return ret;
}