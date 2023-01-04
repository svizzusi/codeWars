// take an array and split it and add a prepended number plus a colon and a space before each elemenent andd then join it to a new array


var number = function(array) {
    return array.map(function (line, index) {
      return (index + 1) + ": " + line;
    });
  }