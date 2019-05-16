'use strict'

let table = document.querySelector('.chess-board');
let selTd;

table.onclick = (event) => {
    let target = event.target;
    let td = target.closest('td');
    if (!td) return; // клик вне <td>
    if (!table.contains(td)) return;// нашли элемент, который нас интересует!

    highlightSel(td);
    highlightStep(getSteps(td));
}

const highlightSel = (cell) => {
    console.log(cell.cellIndex);
    if (selTd) {
        selTd.classList.remove('highlight');
    }
    selTd = cell;
    selTd.classList.add('highlight');
    //selTd.style.backgroundColor = 'blue';
}

const highlightStep = (indexes) => {
    console.log(...indexes);
    let cellStep;
    if (!indexes == []) {
        indexes.forEach((index) => {
            cellStep = table.rows[index[0]].cells[index[1]];
            cellStep.classList.remove('highlight-step');
        });
    }
    indexes.forEach((index) => {
        cellStep = table.rows[index[0]].cells[index[1]];
        cellStep.classList.add('highlight-step');
        //cellStep.style.backgroundColor = 'aqua';
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
        if (((x = rIndex + step[0]) >= 2 &&
            (x = rIndex + step[0]) <= 10) &&
            ((y = cIndex + step[1]) >= 2 &&
                (y = cIndex + step[1]) <= 10)) {
            result.push([x, y]);
        }
    });

    return result;
}
