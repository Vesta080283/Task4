'use strict'

let table = document.querySelector('.chess-board');
let selTd;
let cellSteps = [];
let cellStep;

table.onclick = (e) => {
    table.querySelectorAll('td').forEach((cell) => {
        cell.classList.remove('selected');
        cell.classList.remove('highlight');
    })

    let target = e.target;
    selTd = target.closest('td');
    if (!selTd) return; // клик вне <td>
    if (!table.contains(selTd)) return;// нашли элемент, который нас интересует!

    highlight();
}

const highlight = () => { 
    selTd.classList.add('selected');

        cellSteps = getSteps();
    cellSteps.forEach((cell) => {
        cellStep = table.rows[cell[0]].cells[cell[1]];
        cellStep.classList.add('highlight');
            
    });
}

const getSteps = () => {
    let rIndex = selTd.parentElement.rowIndex;
    let cIndex = selTd.cellIndex;
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
