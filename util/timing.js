module.exports = (function() {
  var _t = process.hrtime();

  return {
    printInfo: function() {
      _t = process.hrtime(_t);
      console.log('** Finished in %d seconds and %d nanoseconds. **', _t[0], _t[1]); 
    }
  };
})();
