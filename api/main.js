document.getElementById('add').addEventListener('click', function() {
    var value = document.getElementById('item').value;
    if (value) {
        sendItem(value);
    }
})

function sendItem(item) {
    const req = new XMLHttpRequest();
    req.open('POST', '/api/add');
    req.setRequestHeader('Content-Type', 'application/json')
    req.send(JSON.stringify({ item: item }));

    req.addEventListener('load', () => {
        console.log(req.responseText);
    });

    req.addEventListener('error', () => {
        console.log(e);
    })
}
