function calculateResult() {
    const n = document.getElementById("subjects").value;
    let i;
    let total = 0;
    for(i = 0; i < n; i++){
        let x = parseFloat(prompt("Enter the subject no." + (i+1)));
        total += x;
    }
    let avg = total / n;
    let grade;
    if(avg > 90){
        grade = 'A+';
    }
    else{
        if(avg > 75){
            grade = 'A';
        }
        else{
            if(avg > 40){
                grade = 'B';
            }
            else{
                grade = 'F';
            }
        }
    }
    let rs;
    if(avg > 40){
        rs = 'Pass';
    }
    else{
        rs = 'fail';
    }

    let result = document.getElementById("result").innerHTML="Total Marks" + total + "<br/>" + "Average Marks" + avg + "<br/>" + "Grade" + grade + "<br/>" + "Result" + rs + "<br/>";


}