// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


// with Regular expression

function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
  }

//   without regular expression

function removeExclamationMarks(s) {
    return s.split('!').join('');
  }
