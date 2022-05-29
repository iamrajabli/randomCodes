const container = document.querySelector('.container'),
    form = document.querySelector('form'),
    cityName = document.querySelector('#cityName');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const city = cityName.value;

    let xhttp = new XMLHttpRequest();
    xhttp.addEventListener('readystatechange', () => {
        if (xhttp.readyState == 4) {
            const result = JSON.parse(xhttp.responseText).result;

            result.forEach(result => {
                const ul = document.createElement('ul');
                const li = document.createElement('li');
                li.innerHTML += `vakit: ${result.vakit}, saat: ${result.saat}`;
                ul.appendChild(li);

                container.appendChild(ul)
            })

        }
    })
    xhttp.open("GET", `https://api.collectapi.com/pray/all?data.city=${city}`);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.setRequestHeader('authorization', 'apikey 2xRlYIeT57WLIrI1nGHlzt:6qko0UR550kkNBcbhVsuDT');
    xhttp.send();
})