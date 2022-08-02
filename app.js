function idNumber(add) {
    let startingId = 1000;
    return startingId + add;
}

function getRndInteger(min, max) {
    let initialSalary = Math.floor(Math.random() * (max - min) ) + min;
    return initialSalary;
}

  function netSalary(initialSalary) {
    let finalSalary = initialSalary * 0.925;
    return finalSalary;  
}

  const employee1 = {
    employeeId: function() {return idNumber(0)},
    fullName: "Ghazi Samer",
    department: "Administration",
    level: "Senior",
    imageUrl: "www.google.com",
    salary: function() {return getRndInteger(1500, 2000)}
  }


  function printInConsole(object){
    console.log("Employee ID: " + (object.employeeId()));
    console.log("Employee Name: " + (object.fullName));
    console.log("Employee Salary: " + (object.salary()));
  }

  printInConsole(employee1);


  const employee2 = {
    employeeId: function() {return idNumber(1)},
    fullName: "Lana Ali",
    department: "Finance",
    level: "Senior",
    imageUrl: "www.google.com",
    salary: function() {return getRndInteger(1500, 2000)}
  }


  function printInConsole(object){
    console.log("Employee ID: " + (object.employeeId()));
    console.log("Employee Name: " + (object.fullName));
    console.log("Employee Salary: " + (object.salary()));
  }

  
printInConsole(employee2);


const employee3 = {
  employeeId: function() {return idNumber(2)},
  fullName: "Tamara Ayoub	",
  department: "Marketing	",
  level: "Senior",
  imageUrl: "www.google.com",
  salary: function() {return getRndInteger(1500, 2000)}
}


function printInConsole(object){
  console.log("Employee ID: " + (object.employeeId()));
  console.log("Employee Name: " + (object.fullName));
  console.log("Employee Salary: " + (object.salary()));
}


printInConsole(employee3);



const employee4 = {
  employeeId: function() {return idNumber(3)},
  fullName: "Safi Walid		",
  department: "Administration	",
  level: "Mid-Senior",

  imageUrl: "www.google.com",
  salary: function() {return getRndInteger(1000, 1500)}
}


function printInConsole(object){
  console.log("Employee ID: " + (object.employeeId()));
  console.log("Employee Name: " + (object.fullName));
  console.log("Employee Salary: " + (object.salary()));
}


printInConsole(employee4);


const employee5 = {
  employeeId: function() {return idNumber(4)},
  fullName: "Omar Zaid	",
  department: "Development",
  level: "Senior",

  imageUrl: "www.google.com",
  salary: function() {return getRndInteger(1500, 2000)}
}


function printInConsole(object){
  console.log("Employee ID: " + (object.employeeId()));
  console.log("Employee Name: " + (object.fullName));
  console.log("Employee Salary: " + (object.salary()));
}


printInConsole(employee5);

const employee6 = {
  employeeId: function() {return idNumber(5)},
  fullName: "Rana Saleh		",
  department: "Development	",
  level: "Junior  ",

  imageUrl: "www.google.com",
  salary: function() {return getRndInteger(500,1000)}
}


function printInConsole(object){
  console.log("Employee ID: " + (object.employeeId()));
  console.log("Employee Name: " + (object.fullName));
  console.log("Employee Salary: " + (object.salary()));
}


printInConsole(employee6);



const employee7 = {
  employeeId: function() {return idNumber(6)},
  fullName: "	Hadi Ahmad	",
  department: "Finance	",
  level: "Mid-Senior  ",

  imageUrl: "www.google.com",
  salary: function() {return getRndInteger(1000,15000)}
}


function printInConsole(object){
  console.log("Employee ID: " + (object.employeeId()));
  console.log("Employee Name: " + (object.fullName));
  console.log("Employee Salary: " + (object.salary()));
}


printInConsole(employee5);
  
