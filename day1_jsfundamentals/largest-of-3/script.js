function findLargest() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let c = Number(document.getElementById("num3").value);

    let resultText = document.getElementById("result");

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultText.innerText = "Please enter all three numbers";
        return;
    }

    if (a > b && a > c) {
        resultText.innerText = "Largest number is " + a;
    } else if (b > c) {
        resultText.innerText = "Largest number is " + b;
    } else {
        resultText.innerText = "Largest number is " + c;
    }
}
