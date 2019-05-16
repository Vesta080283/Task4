'use strict'

let table = document.querySelector('.chess-board');
let selTd;
let cellSteps = [];

table.onclick = (event) => {
    let target = event.target;
    let td = target.closest('td');
    if (!td) return; // клик вне <td>
    if (!table.contains(td)) return;// нашли элемент, который нас интересует!

    highlightSel(td);
    highlightStep(td);
}

const highlightSel = (_selTd) => {
    console.log(_selTd.cellIndex);
    if (selTd) {
        //selTd.classList.remove('highlight');
        selTd.style.backgroundColor = '';
    }
    selTd = _selTd;
    //selTd.classList.add('highlight');
    selTd.style.backgroundColor = 'blue';
}

const highlightStep = (_selTd) => {
    if (!cellSteps == []) {
        cellSteps.forEach((cell) => {
            cell = table.rows[cell[0]].cells[cell[1]];
            //cell.classList.remove('highlight-step');
            cell.style.backgroundColor = '';
        });
    }

    cellSteps = getSteps(_selTd);
    console.log(...cellSteps);

    cellSteps.forEach((cell) => {
        cell = table.rows[cell[0]].cells[cell[1]];
        //cellStep.classList.add('highlight-step');
        cell.style.backgroundColor = 'green';
    });
}

const getSteps = (cell) => {
    let rIndex = cell.parentElement.rowIndex;
    let cIndex = cell.cellIndex;
    let x;
    let y;
    let result = [];
    ///создадим массив траекторий хода
    let steps = [[1, 2], [1, -2], [2, 1], [2, -1], [-1, 2], [-1, -2], [-2, 1], [-2, -1]];

    steps.forEach((step) => {
        if (((x = rIndex + step[0]) >= 1 &&
            (x = rIndex + step[0]) <= 8) &&
            ((y = cIndex + step[1]) >= 1 &&
                (y = cIndex + step[1]) <= 8)) {
            result.push([x, y]);
        }
    });

    return result;
}
