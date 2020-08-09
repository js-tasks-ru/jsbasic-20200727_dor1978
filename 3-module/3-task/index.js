/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let array = str.split('-');
  let newArr = [];
  newArr[0] = array[0];


  for (i = 1; i < array.length; i++) {
    let word = array[i];
    let newWord = word[0].toUpperCase() + word.slice(1);
    newArr.push(newWord);
  }
  let newStr = newArr.join('');

  return newStr;
}
