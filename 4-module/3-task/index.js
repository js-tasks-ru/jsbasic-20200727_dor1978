/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    for (let i = 0; i < table.rows.length; i++) {
        let age = table.rows[i].cells[1];
        let gender = table.rows[i].cells[2];
        let status = table.rows[i].cells[3];

        if (status.dataset.available === 'true') {
            table.rows[i].classList.add('available');
        } else if (status.dataset.available === 'false') {
            table.rows[i].classList.add('unavailable');
        } else {
            table.rows[i].hidden = true;
        }

        if (gender.innerHTML === 'm') {
            table.rows[i].classList.add('male');
        } else {
            table.rows[i].classList.add('female');
        }

        if (age.innerHTML < 18) {
            table.rows[i].style.textDecoration = 'line-through';
        }
    }
}