module.exports = function(data) {
  var strings = [];

  data.split('\n').forEach(function(line) {
    if(line[0] === '>') {
      strings.push({
        name: line.slice(1),
        data: ''
      });
    }
    else {
      strings[strings.length - 1].data += line;
    }
  });

  return strings;
};
