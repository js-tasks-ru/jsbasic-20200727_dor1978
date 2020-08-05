/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  for (let key in salaries) {
    if (salaries[key] > 0) {
      salaries = salaries.John + salaries.Ann + salaries.Pete;
      return salaries;
    } else {
      return 0;
    }
  }
}
