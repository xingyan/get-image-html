var reg = /<img[\s\S]*?src\s*=\s*['"]([\w\/\-_]*\.(png|jpg|gif|bmp|jpe|jpeg|webp))\s*['|"]\s*\/?>/ig;

module.exports = function(str) {
  if(str instanceof Buffer) str = str.toString();
  var ret = [];
  str.replace(reg, function($1, $2) {
    if(!$1 || !$2)  return;
    ret.push({
      str: $1,
      path: $2
    });
  });
  return ret;
}