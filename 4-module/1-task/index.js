/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let ul = document.createElement("ul");
  for (let i = 0; i < friends.length; i++) {
    ul.innerHTML = ul.innerHTML + '<li>' + friends[i].firstName + ' ' + friends[i].lastName + '</li>';
  }
  return ul;
}
