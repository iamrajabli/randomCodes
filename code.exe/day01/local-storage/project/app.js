const name = document.querySelector('#name'),
    surname = document.querySelector('#surname'),
    submit = document.querySelector('#submit__btn'),
    tbody = document.querySelector('.tbody__contact');
eventListeners();
let updateStatus = null;
let newId;


function eventListeners() {
    submit.addEventListener('click', e => {
        e.preventDefault();
        let id = (((new Date().getTime()) / 100) % 10000).toFixed(0);

        const person = {
            id: id,
            name: name.value,
            surname: surname.value
        }
        if (updateStatus == null) {
            setLS(person);
        } else {
            person.id = newId;
            updateLS(person);
        }
        UI(person);
        empty();

    });

    tbody.addEventListener('click', e => {
        const target = e.target;

        //  TRASH BTN
        if (target.classList.contains('btn--delete')) {
            const tr = target.parentElement.parentElement;
            const id = target.parentElement.parentElement.children[0].textContent;
            removeLS(id);
            tr.remove();
        }

        // EDIT BTN
        if (target.classList.contains('btn--edit')) {
            const id = target.parentElement.parentElement.children[0].textContent;
            const nameTd = target.parentElement.parentElement.children[1];
            const surnameTd = target.parentElement.parentElement.children[2];

            name.value = nameTd.textContent;
            surname.value = surnameTd.textContent;
            submit.value = 'UPDATE';
            submit.style.cssText = `
                background-color: red;
                border: 1px solid red;
            `;
            updateStatus = [nameTd, surnameTd];
            newId = id;
        }
    });
}

function empty() {
    name.value = '';
    surname.value = '';
}


showLS();

function showLS() {
    let person = getLS();


    person.forEach(item => {
        UI(item)
    });


}

function UI(person) {
    if (updateStatus == null) {
        tbody.innerHTML += `
    <tr>
    <td>${person.id}</td>
    <td>${person.name}</td>
    <td>${person.surname}</td>
    <td>
        <button class="btn btn--delete"><i class="fa-solid fa-trash-can"></i></button>
        <button class="btn btn--edit"><i class="fa-solid fa-pen-to-square"></i></button>
    </td>
     </tr>
`
    } else {
        updateStatus[0].textContent = person.name;
        updateStatus[1].textContent = person.surname;
        submit.value = 'ENTER';
        submit.style.cssText = `
                background-color: ;
                border: ;
            `;
        updateStatus = null;
    }
}

function getLS() {
    let arr = null;
    if (localStorage.getItem('person') === null) {
        arr = [];
    } else {
        arr = JSON.parse(localStorage.getItem('person'));
    }

    return arr;
}

function setLS(obj) {
    let arr = getLS();
    arr.push(obj);

    localStorage.setItem('person', JSON.stringify(arr));

}

function removeLS(id) {
    let arr = getLS();

    arr.forEach((item, i) => {
        if (item.id == id) {
            arr.splice(i, 1);
        }
    });

    localStorage.setItem('person', JSON.stringify(arr));
}

function updateLS(person) {
    let arr = getLS();
    arr.forEach((item, i) => {
        if (item.id == person.id) {
            arr[i] = person;
        }
    });

    localStorage.setItem('person', JSON.stringify(arr));

}