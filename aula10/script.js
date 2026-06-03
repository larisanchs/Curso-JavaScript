function somar() {
    let a = document.getElementById("n1").value;
    let b = document.getElementById("n2").value;

    if (a === "" || b === "") {
        document.getElementById("resultado").textContent =
            "Todos os campos devem ser preenchidos.";
        return;
    }

    a = Number(a);
    b = Number(b);

    document.getElementById("resultado").textContent = a + b;
}

function subtrair(){

    let a = document.getElementById("n1").value;
    let b = document.getElementById("n2").value;

    if (a === "" || b === "") {
        document.getElementById("resultado").textContent =
            "Todos os campos devem ser preenchidos.";
        return;
    }

    a = Number(a);
    b = Number(b);
    document.getElementById("resultado").textContent = a - b;
}

function multiplicar(){

    let a = document.getElementById("n1").value;
    let b = document.getElementById("n2").value;

    if (a === "" || b === "") {
        document.getElementById("resultado").textContent =
            "Todos os campos devem ser preenchidos.";
        return;
    }

    a = Number(a);
    b = Number(b);
    document.getElementById("resultado").textContent = a * b;
}

function dividir(){

    let a = document.getElementById("n1").value;
    let b = document.getElementById("n2").value;

    if (a === "" || b === "") {
        document.getElementById("resultado").textContent =
            "Todos os campos devem ser preenchidos.";
        return;
    }

    a = Number(a);
    b = Number(b);
    document.getElementById("resultado").textContent = a / b;
}