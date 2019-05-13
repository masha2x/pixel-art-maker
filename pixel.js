
let cellsArray = [];
let colorEl = document.getElementsByClassName('color');
let but = document.getSelection('button');
let curColsq = document.getElementById('square');
let isDrawing = false;
let cur_color = 'white';
let inp_col = document.getElementById('input');

function start() {
    let width = prompt('Please enter desired width size', 10);
    let height = prompt('Please enter desired height size', 10);
    let place = document.getElementById('canvas');
    place.innerHTML = ('');
    isDrawing = false;
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
            event.target.style.backgroundColor = cur_color;
            event.target.style.borderColor = cur_color;
            isDrawing = true;
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

inp_col.addEventListener('change', function() {
    cur_color = inp_col.value;
    curColsq.style.backgroundColor = cur_color;
}, false); 

document.getElementById('button').addEventListener('click', start);



