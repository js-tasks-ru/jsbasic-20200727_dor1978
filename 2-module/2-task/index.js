/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  for (let key in obj) {
    if (typeof key === 'string') {
      return false;
    }
  }
  return true;
}
