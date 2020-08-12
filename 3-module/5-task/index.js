/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let arr = str.split(',');
  arr = arr.join(' ');
  arr = arr.split(' ');

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Number.isNaN(+arr[i]) === false && +arr[i] !== 0) {
      newArr.push(arr[i]);
    }
  }
  let result = {};
  result.min = Math.min(...newArr);
  result.max = Math.max(...newArr);
  return result;
}
