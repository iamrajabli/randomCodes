'use strict';
const input = document.querySelector('input'),
    btn = document.querySelector('a');


    btn.addEventListener('click', e => {
        e.preventDefault();

        const objData = {
            name: 'Data',
            body: input.value.trim()
        }
       setLS(objData)
    })



function setLS(obj) {
    let arr = getLS();
    arr.push(obj)

    localStorage.setItem('data', JSON.stringify(arr));
};

function getLS() {
    let arr;

    if (localStorage.getItem('data') === null) {
        arr = [];
    } else {
        arr = JSON.parse(localStorage.getItem('data'));
    }

    return arr;
};