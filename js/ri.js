// footer


function bi() {
    let ha = new Date();
    document.getElementById("rifat").innerHTML = ha.toLocaleString();
}

bi();
setInterval(bi, 1000);


// form

form.onsubmit = event => {
    if (!form.checkValidity()) {
        event.preventDefault()
        form.classList.add('was-validated')
    } else alert("Thank You")
}


