var reg = /(?!https?:)[\w\/\-_]+?\.(png|jpg|gif|bmp|jpe|jpeg|webp|swf)/g;

module.exports = function(str) {
  if(str instanceof Buffer) str = str.toString();
  var ret = [];
  str.replace(reg, function($1, $2) {
    if(!$1 || !$2)  return;
    ret.push({
      path: $1
    });
  });
  return ret;
}