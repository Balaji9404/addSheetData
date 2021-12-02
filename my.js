function testGS(){

const url = "https://script.google.com/macros/s/AKfycbwn5jbJ2m25l15SvkXuB2nEXmYptouKUsyEyRnOy2p0qpsbsq5guYqYnbdgTVLWE6pZ/exec"; 

fetch(url)
.then(d => d.json())
.then(d => {
    document.getElementById("app").textContent = d[0].status;
});
}

document.getElementById("btn").addEventListener("click",testGS);