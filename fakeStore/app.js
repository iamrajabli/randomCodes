const req = fetch('https://jsonplaceholder.typicode.com/comments');

req
    .then(data => data.json())
    .then(response => console.log(response))