function product() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    alert(`Product of a and b is ${a * b}`);
}

function power() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    alert(`a raised to b is ${Math.pow(a, b)}`);
}

function remainder() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    alert(`Remainder of a divided by b is ${a % b}`);
}

function checkEqual() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    if (a === b) {
        alert("a is equal to b");
    } else {
        alert("a is NOT equal to b");
    }
}
