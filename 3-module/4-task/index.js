/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let arr = users.map(function (item) {
    if (item.age <= age) {
      return item.name + ', ' + item.balance;
    }
  });

  let newArr = [];

  for (let user of arr) {
    if (user !== undefined) {
      newArr.push(user);
    }
  }

  let str = newArr.join('\n');
  return str;
}
