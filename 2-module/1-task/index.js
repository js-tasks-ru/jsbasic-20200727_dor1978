/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let total = 0;
  for (let key in salaries) {
    if (salaries[key] > 0) {
      console.log(salaries[key]);
      total += salaries[key];
    }
  }
  return total;
}
