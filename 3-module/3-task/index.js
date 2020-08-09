/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let array = str.split('-');
  let newStr = array[0];
  if (array.length > 1) {
    for (i = 1; i < array.length; i++) {
      let word = array[i];
      newStr += word[0].toUpperCase() + word.slice(1);
    }
  }
  return newStr;
}
