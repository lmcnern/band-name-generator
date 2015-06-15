'use strict';

function postWord (word, wordObj) {
  if (wordObj.hasOwnProperty(word)) {
    return {msg: 'Since ' + word + ' is a duplicate word, it was not saved. Please try again.'};
  }

  wordObj[word] = true;
  return {msg: word + ' has been saved.'};
}

module.exports = postWord;
