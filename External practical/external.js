function largest()
{
    let a = Number(document.getElementById("n1").value);
    let b = Number(document.getElementById("n2").value);
    let c = Number(document.getElementById("n3").value);
    let d = Number(document.getElementById("n4").value);
    let e = Number(document.getElementById("n5").value);

    let max = a;

    if(b > max) max = b;
    if(c > max) max = c;
    if(d > max) max = d;
    if(e > max) max = e;

    document.getElementById("result").innerHTML =
    "Largest Number = " + max;
}