function calculateFactorial() {

    let num = parseInt(document.getElementById("num").value);

    let factorial = 1;

    if (num < 0) {
        document.getElementById("result").innerHTML =
            "Factorial of a negative number is not possible.";
        return;
    }

    for (let i = 1; i <= num; i++) {
        factorial = factorial * i;
    }

    document.getElementById("result").innerHTML =
        "Factorial of " + num + " = " + factorial;
}