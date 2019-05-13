let cellsArray = [];
let colorEl = document.getElementsByClassName('color');
let but = document.getSelection('button');
let curColsq = document.getElementById('square');
let isDrawing = false;
let cur_color = 'white';
let inp_col = document.getElementById('input');
let isFill = false;

function start() {
    let width = prompt('Please enter desired width size', 10);
    let height = prompt('Please enter desired height size', 10);
    let place = document.getElementById('canvas');
    place.innerHTML = ('');
    isDrawing = false;
    isFill = false;
    cur_color = 'white';
    curColsq.style.backgroundColor = cur_color;
    for (var i = 1; i <= height; i++) {
        var newDiv = document.createElement('div');
        newDiv.className = 'row';
        newDiv.innerHTML = '<div class=cell></div>'.repeat(width)
        place.appendChild(newDiv)
    }
    cellsArray = document.getElementsByClassName('cell');
    Array.prototype.forEach.call(cellsArray, function (elem) {
        elem.addEventListener('mousedown', event => {
            if (isFill === true) {
                filler(event.target, cur_color, event.target.style.backgroundColor);
                isFill = false;
            } else {
                event.target.style.backgroundColor = cur_color;
                event.target.style.borderColor = cur_color;
                isDrawing = true;
            }
        })
    });

    Array.prototype.forEach.call(cellsArray, function (elem) {
        elem.addEventListener('mousemove', e => {
            if (isDrawing === true) {
                event.target.style.backgroundColor = cur_color;
                event.target.style.borderColor = cur_color;
            }
        })
    });

    Array.prototype.forEach.call(cellsArray, function (elem) {
        elem.addEventListener('mouseup', e => {
            if (isDrawing === true) {
                event.target.style.backgroundColor = cur_color;
                event.target.style.borderColor = cur_color;
                isDrawing = false;
            }
        })
    });
};

start();

Array.prototype.forEach.call(colorEl, function (elem) {
    elem.addEventListener('click', function (event) {
        cur_color = event.target.style.backgroundColor;
        curColsq.style.backgroundColor = cur_color;
    })
});

inp_col.addEventListener('change', function () {
    cur_color = inp_col.value;
    curColsq.style.backgroundColor = cur_color;
}, false);

document.getElementById('button').addEventListener('click', start);

document.getElementById('new').addEventListener('click', function () {
    isFill = true;
})
    ;

function filler(el, col, el_col) {
    if (el == null) {
        return;
    }
    el.style.backgroundColor = col;
    el.style.borderColor = col;
    if (el.nextSibling != null) {
        if (el.nextSibling.style.backgroundColor == el_col)
            filler(el.nextSibling, col, el_col);
    }

    if (el.previousSibling != null) {
        if (el.previousSibling.style.backgroundColor == el_col)
            filler(el.previousSibling, col, el_col);
    }

    let tt = 0;
    let child = el;
    while (child != null) {
        tt++;
        child = child.previousSibling;
    }

    if (el.parentElement.previousSibling != null) {
        if (el.parentElement.previousSibling.childNodes[tt-1] != null) {
        if (el.parentElement.previousSibling.childNodes[tt-1].style.backgroundColor == el_col)
            filler(el.parentElement.previousSibling.childNodes[tt-1], col, el_col);
    }
}
    if (el.parentElement.nextSibling != null) {
        if (el.parentElement.nextSibling.childNodes[tt-1] != null) {
        if (el.parentElement.nextSibling.childNodes[tt-1].style.backgroundColor == el_col)
            filler(el.parentElement.nextSibling.childNodes[tt-1], col, el_col);
    }
}
}
;