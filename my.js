function testGS(){

const url = "https://script.google.com/macros/s/AKfycbynCDgIUWvcXdYdQuh5fLJwh9tNlIzLmbeM3vgQDd3AbFJEpOIDMWS6P2Ej0z16SvDs/exec"; 

fetch(url)
.then(d => d.json())
.then(d => {
    document.getElementById("app").textContent = d[0].status;
});
}

function addRow(){

    const url = "https://script.google.com/macros/s/AKfycbynCDgIUWvcXdYdQuh5fLJwh9tNlIzLmbeM3vgQDd3AbFJEpOIDMWS6P2Ej0z16SvDs/exec"; 
    
    fetch(url,{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'omit', // include, *same-origin, omit
        headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({Mobile:"9560255206",Name:"Shri", Email:"Shari@gmail.com"}) // body data type must match "Content-Type" header});
        });
}
    
document.getElementById("btn").addEventListener("click",testGS);

document.getElementById("btn2").addEventListener("click",addRow);
