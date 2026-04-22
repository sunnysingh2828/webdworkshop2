let employees = [];

function addEmployee() {
    let name = document.getElementById("name").value;
    let empId = document.getElementById("empId").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;
    if (name === "" || empId === "" || isNaN(salary) || dept === "") {
        alert("Please fill all fields properly");
        return;
    }
    let employee = {
        name : name,
        id : empId,
        salary : salary,
        department : dept,
    };
    employees.push(employee);
    alert("Employees Added Successfully!");
    document.getElementById("name").value = "";
    document.getElementById("empId").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("dept").value = "";
    }

    function displayEmployees() {
        let output = "<h3>All Employees</h3>";
        employees.forEach((emp) => {
            output += `
            Name : ${emp.name} |
            ID: ${emp.id} |
            Salary: ₹${emp.salary} |
            Dept: ${emp.department} <br>
            `;
        });
       document.getElementById("output").innerHTML = output;

    }

    function filterSalary() {
        let filterSalary = employees.filter((emp) => emp.salary > 50000);
        let output = "<h3>Employees with Salary ₹50,000</h3>";
        filtered.forEach((emp) => {
            output += `
              Name : ${emp.name} |
            Salary: ₹${emp.salary} |
            `;
        });
         document.getElementById("output").innerHTML = output;
    }

    function totalSalary() {
        let total = employees.reduce((sum,emp) => sum + emp.salary, 0);
        document.getElementById("output").innerHTML = "<h3>Total Salary Payout:₹ </h3>"+ output;
    }

    function averageSalary(){

let total = employees.reduce((sum,emp)=>sum+emp.salary,0);

let avg = total / employees.length;

document.getElementById("output").innerHTML=
"<h3>Average Salary: ₹"+avg.toFixed(2)+"</h3>";

}


function countDepartment(){

let deptCount={};

employees.forEach(emp=>{
deptCount[emp.department]=(deptCount[emp.department]||0)+1;
});

let output="<h3>Department Count</h3>";

for(let dept in deptCount){
output+=dept+" : "+deptCount[dept]+" employees <br>";
}

document.getElementById("output").innerHTML=output;

}