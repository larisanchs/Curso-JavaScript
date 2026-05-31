function somar(){
    let a = parseFloat(document.getElementById("n1").value);
    let b = parseFloat(document.getElementById("n2").value);
    document.querySelector("p").textContent = a + b;
}

function subtrair(){
    let a = parseFloat(document.getElementById("n1").value);
    let b = parseFloat(document.getElementById("n2").value);
    document.querySelector("p").textContent = a - b;
}

function multiplicar(){
    let a = parseFloat(document.getElementById("n1").value);
    let b = parseFloat(document.getElementById("n2").value);
    document.querySelector("p").textContent = a * b;
}

function dividir(){
    let a = parseFloat(document.getElementById("n1").value);
    let b = parseFloat(document.getElementById("n2").value);
    document.querySelector("p").textContent = a / b;
}