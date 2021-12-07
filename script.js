var customerForm = document.getElementById("customerForm");
var fname = document.getElementById("name");
var mobile = document.getElementById("mobile");
var email = document.getElementById("email");
var submit = document.getElementById("submit");
var buttonSpineer = document.getElementById("buttonSpineer");
var buttonText = document.getElementById("buttonText");
var error = document.getElementById("error");

function afterSubmit(e){
    e.preventDefault();
    var info = {
        name : fname.value,
        mobile : mobile.value,
        email : email.value
    };

    var url = "https://script.google.com/macros/s/AKfycbywoeQQ2Vg1e1Ih_xmF_NfY2dEiR5oY0Vph2OCFWxAA1w4DUTcG5BfRec8z_gXDK9LJ5Q/exec";
    
    buttonText.textContent = "Sending...";
    buttonSpineer.classList.remove("d-none"); 
    submit.disabled = true;

    fetch(url,{
        method: 'POST',
        cache: 'no-cache',
        credentials: 'omit',
        redirect: 'follow',
        body: JSON.stringify(info)
        }).then(res => res.json())
        .then(res =>{
            console.log(res);
            customerForm.reset();
            buttonText.textContent = "Send";
            buttonSpineer.classList.add("d-none"); 
            submit.disabled = false;
        })
        .catch(err => {
            console.log(err);
            console.log("Something went wrong :(");
            error.classList.remove("d-none");
            setTimeout(function(){
                error.classList.add("d-none");
                buttonText.textContent = "Send";
                buttonSpineer.classList.add("d-none"); 
                submit.disabled = false;
            },2000
            );
        });
}

customerForm.addEventListener("submit",afterSubmit);
